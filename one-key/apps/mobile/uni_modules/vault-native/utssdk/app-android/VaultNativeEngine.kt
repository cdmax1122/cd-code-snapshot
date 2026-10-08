package uts.sdk.modules.vaultNative

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.ContentValues
import android.os.Build
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.provider.MediaStore
import android.util.Base64
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.nio.charset.StandardCharsets
import java.security.MessageDigest
import java.security.SecureRandom
import java.text.SimpleDateFormat
import java.util.Arrays
import java.util.Date
import java.util.Locale
import javax.crypto.Cipher
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.PBEKeySpec
import javax.crypto.spec.SecretKeySpec

/**
 * Android-only security boundary. The page layer never receives the derived key
 * and plaintext is retained only while this process is unlocked.
 */
object VaultNativeEngine {
    private const val MAGIC = "TLV1"
    private const val FORMAT_VERSION = 1
    private const val PBKDF2_ITERATIONS = 600_000
    private const val KEY_BYTES = 32
    private const val SALT_BYTES = 16
    private const val NONCE_BYTES = 12
    private const val GCM_TAG_BITS = 128

    private val random = SecureRandom()
    private var sessionVault: JSONObject? = null
    private var sessionKey: ByteArray? = null

    @Synchronized
    fun hasVault(context: Context): Boolean = vaultFile(context).isFile

    fun vaultPath(context: Context): String = vaultFile(context).absolutePath

    @Synchronized
    fun createVault(context: Context, masterPassword: String): String {
        if (masterPassword.length < 12) return result(false, "主密码至少需要 12 个字符")
        if (hasVault(context)) return result(false, "本机已存在保险箱")

        return try {
            val now = System.currentTimeMillis()
            val payload = JSONObject()
                .put("version", FORMAT_VERSION)
                .put("entries", JSONArray())
                .put("settings", JSONObject()
                    .put("autoLockSeconds", 300)
                    .put("clipboardClearSeconds", 30)
                    .put("biometricUnlockEnabled", false))
                .put("metadata", JSONObject().put("createdAt", now).put("updatedAt", now))
            val salt = randomBytes(SALT_BYTES)
            val key = deriveKey(masterPassword, salt)
            writeEncrypted(context, payload, key, salt)
            replaceSession(payload, key)
            result(true, "保险箱已创建")
        } catch (_: Exception) {
            lock()
            result(false, "无法创建保险箱")
        }
    }

    @Synchronized
    fun unlockVault(context: Context, masterPassword: String): String {
        val file = vaultFile(context)
        if (!file.isFile) return result(false, "未找到本地保险箱")

        return try {
            val envelope = JSONObject(file.readText(Charsets.UTF_8))
            validateEnvelope(envelope)
            val salt = decode(envelope.getString("salt"))
            val nonce = decode(envelope.getString("nonce"))
            val ciphertext = decode(envelope.getString("ciphertext"))
            val key = deriveKey(masterPassword, salt)
            try {
                val cipher = Cipher.getInstance("AES/GCM/NoPadding")
                cipher.init(Cipher.DECRYPT_MODE, SecretKeySpec(key, "AES"), GCMParameterSpec(GCM_TAG_BITS, nonce))
                cipher.updateAAD(aad())
                val plaintext = cipher.doFinal(ciphertext)
                val payload = JSONObject(String(plaintext, StandardCharsets.UTF_8))
                Arrays.fill(plaintext, 0)
                if (payload.getInt("version") != FORMAT_VERSION) throw IllegalArgumentException("version")
                replaceSession(payload, key)
                result(true, "保险箱已解锁")
            } catch (_: Exception) {
                Arrays.fill(key, 0)
                result(false, "主密码错误或保险箱无法解密")
            }
        } catch (_: Exception) {
            lock()
            result(false, "主密码错误或保险箱无法解密")
        }
    }

    @Synchronized
    fun lock() {
        sessionVault = null
        sessionKey?.let { Arrays.fill(it, 0) }
        sessionKey = null
    }

    @Synchronized
    fun isUnlocked(): Boolean = sessionVault != null && sessionKey != null

    @Synchronized
    fun listAccounts(): String = sessionVault?.optJSONArray("entries")?.toString() ?: "[]"

    @Synchronized
    fun getAccount(id: String): String {
        val entries = sessionVault?.optJSONArray("entries") ?: return ""
        for (index in 0 until entries.length()) {
            val account = entries.optJSONObject(index) ?: continue
            if (account.optString("id") == id) return account.toString()
        }
        return ""
    }

    @Synchronized
    fun saveAccount(context: Context, accountJson: String): String {
        val vault = sessionVault ?: return result(false, "保险箱已锁定")
        return try {
            val candidate = JSONObject(vault.toString())
            val account = JSONObject(accountJson)
            val id = account.optString("id")
            if (id.isBlank() || account.optString("title").isBlank()) return result(false, "账户信息不完整")
            val entries = candidate.getJSONArray("entries")
            var replaced = false
            for (index in 0 until entries.length()) {
                if (entries.getJSONObject(index).optString("id") == id) {
                    entries.put(index, account)
                    replaced = true
                    break
                }
            }
            if (!replaced) entries.put(account)
            touch(candidate)
            persistCandidate(context, candidate)
            result(true, "账户已保存")
        } catch (_: Exception) {
            result(false, "无法保存账户")
        }
    }

    @Synchronized
    fun deleteAccount(context: Context, id: String): String {
        val vault = sessionVault ?: return result(false, "保险箱已锁定")
        return try {
            val candidate = JSONObject(vault.toString())
            val entries = candidate.getJSONArray("entries")
            for (index in 0 until entries.length()) {
                if (entries.getJSONObject(index).optString("id") == id) {
                    entries.remove(index)
                    touch(candidate)
                    persistCandidate(context, candidate)
                    return result(true, "账户已删除")
                }
            }
            result(false, "未找到账户")
        } catch (_: Exception) {
            result(false, "无法删除账户")
        }
    }

    @Synchronized
    fun getSettings(): String = sessionVault?.optJSONObject("settings")?.toString() ?: "{}"

    @Synchronized
    fun saveSettings(context: Context, settingsJson: String): String {
        val vault = sessionVault ?: return result(false, "保险箱已锁定")
        return try {
            val candidate = JSONObject(vault.toString())
            val input = JSONObject(settingsJson)
            val autoLock = input.optInt("autoLockSeconds", 300).coerceIn(30, 3600)
            val clipboard = input.optInt("clipboardClearSeconds", 30)
            if (clipboard !in listOf(0, 15, 30, 60)) return result(false, "剪贴板清理时间无效")
            candidate.put("settings", JSONObject()
                .put("autoLockSeconds", autoLock)
                .put("clipboardClearSeconds", clipboard)
                .put("biometricUnlockEnabled", false))
            touch(candidate)
            persistCandidate(context, candidate)
            result(true, "设置已保存")
        } catch (_: Exception) {
            result(false, "无法保存设置")
        }
    }

    @Synchronized
    fun backupVault(context: Context): String {
        val source = vaultFile(context)
        if (!source.isFile) return result(false, "未找到保险箱文件")
        return try {
            val stamp = SimpleDateFormat("yyyyMMdd-HHmmss", Locale.US).format(Date())
            val fileName = "vault-$stamp.localvault"
            val internal = File(backupDirectory(context).apply { mkdirs() }, fileName)
            source.copyTo(internal, overwrite = false)

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val values = ContentValues().apply {
                    put(MediaStore.Downloads.DISPLAY_NAME, fileName)
                    put(MediaStore.Downloads.MIME_TYPE, "application/octet-stream")
                    put(MediaStore.Downloads.RELATIVE_PATH, "${Environment.DIRECTORY_DOWNLOADS}/TransparentVault")
                    put(MediaStore.Downloads.IS_PENDING, 1)
                }
                val uri = context.contentResolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)
                    ?: throw IllegalStateException("downloads")
                context.contentResolver.openOutputStream(uri)?.use { output -> internal.inputStream().use { it.copyTo(output) } }
                    ?: throw IllegalStateException("output")
                values.clear()
                values.put(MediaStore.Downloads.IS_PENDING, 0)
                context.contentResolver.update(uri, values, null, null)
                result(true, "下载/TransparentVault/$fileName")
            } else {
                val directory = File(context.getExternalFilesDir(null), "TransparentVault/backups").apply { mkdirs() }
                val target = File(directory, fileName)
                internal.copyTo(target, overwrite = false)
                result(true, target.absolutePath)
            }
        } catch (_: Exception) {
            result(false, "无法创建本地备份")
        }
    }

    fun secureRandomBytes(length: Int): List<Int> {
        require(length in 1..4096)
        return randomBytes(length).map { it.toInt() and 0xff }
    }

    fun copySensitive(context: Context, value: String, clearSeconds: Int) {
        val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
        clipboard.setPrimaryClip(ClipData.newPlainText("保险箱密码", value))
        if (clearSeconds <= 0) return
        val fingerprint = digest(value)
        Handler(Looper.getMainLooper()).postDelayed({
            val current = if (clipboard.hasPrimaryClip()) {
                clipboard.primaryClip?.getItemAt(0)?.coerceToText(context)?.toString() ?: ""
            } else ""
            if (MessageDigest.isEqual(fingerprint, digest(current))) {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) clipboard.clearPrimaryClip()
                else clipboard.setPrimaryClip(ClipData.newPlainText("", ""))
            }
        }, clearSeconds * 1000L)
    }

    private fun persistCandidate(context: Context, candidate: JSONObject) {
        val key = sessionKey ?: throw IllegalStateException("locked")
        val envelope = JSONObject(vaultFile(context).readText(Charsets.UTF_8))
        val salt = decode(envelope.getString("salt"))
        writeEncrypted(context, candidate, key, salt)
        sessionVault = candidate
    }

    private fun writeEncrypted(context: Context, payload: JSONObject, key: ByteArray, salt: ByteArray) {
        val nonce = randomBytes(NONCE_BYTES)
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(Cipher.ENCRYPT_MODE, SecretKeySpec(key, "AES"), GCMParameterSpec(GCM_TAG_BITS, nonce))
        cipher.updateAAD(aad())
        val plaintext = payload.toString().toByteArray(StandardCharsets.UTF_8)
        val ciphertext = cipher.doFinal(plaintext)
        Arrays.fill(plaintext, 0)
        val envelope = JSONObject()
            .put("magic", MAGIC)
            .put("formatVersion", FORMAT_VERSION)
            .put("kdf", JSONObject()
                .put("algorithm", "PBKDF2-HMAC-SHA256")
                .put("iterations", PBKDF2_ITERATIONS))
            .put("salt", encode(salt))
            .put("cipher", JSONObject().put("algorithm", "AES-256-GCM"))
            .put("nonce", encode(nonce))
            .put("ciphertext", encode(ciphertext))
        atomicWrite(vaultFile(context), envelope.toString())
    }

    private fun deriveKey(password: String, salt: ByteArray): ByteArray {
        val passwordChars = password.toCharArray()
        val specification = PBEKeySpec(passwordChars, salt, PBKDF2_ITERATIONS, KEY_BYTES * 8)
        try {
            return SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(specification).encoded
        } finally {
            Arrays.fill(passwordChars, '\u0000')
            specification.clearPassword()
        }
    }

    private fun validateEnvelope(envelope: JSONObject) {
        if (envelope.optString("magic") != MAGIC || envelope.optInt("formatVersion") != FORMAT_VERSION) {
            throw IllegalArgumentException("format")
        }
        val kdf = envelope.getJSONObject("kdf")
        if (kdf.optString("algorithm") != "PBKDF2-HMAC-SHA256" ||
            kdf.optInt("iterations") != PBKDF2_ITERATIONS) {
            throw IllegalArgumentException("kdf")
        }
        if (envelope.getJSONObject("cipher").optString("algorithm") != "AES-256-GCM") {
            throw IllegalArgumentException("cipher")
        }
        if (decode(envelope.getString("salt")).size != SALT_BYTES || decode(envelope.getString("nonce")).size != NONCE_BYTES) {
            throw IllegalArgumentException("parameters")
        }
    }

    private fun replaceSession(payload: JSONObject, key: ByteArray) {
        lock()
        sessionVault = payload
        sessionKey = key
    }

    private fun touch(vault: JSONObject) {
        vault.getJSONObject("metadata").put("updatedAt", System.currentTimeMillis())
    }

    private fun atomicWrite(target: File, content: String) {
        target.parentFile?.mkdirs()
        val temporary = File(target.parentFile, "${target.name}.tmp")
        temporary.outputStream().buffered().use { output ->
            output.write(content.toByteArray(Charsets.UTF_8))
            output.flush()
        }
        val previous = File(target.parentFile, "${target.name}.previous")
        if (previous.exists()) previous.delete()
        if (target.exists() && !target.renameTo(previous)) throw IllegalStateException("prepare")
        if (!temporary.renameTo(target)) {
            previous.renameTo(target)
            throw IllegalStateException("rename")
        }
        previous.delete()
    }

    private fun vaultFile(context: Context) = File(File(context.filesDir, "TransparentVault"), "vault.localvault")
    private fun backupDirectory(context: Context) = File(File(context.filesDir, "TransparentVault"), "backups")
    private fun randomBytes(size: Int) = ByteArray(size).also(random::nextBytes)
    private fun encode(value: ByteArray) = Base64.encodeToString(value, Base64.NO_WRAP)
    private fun decode(value: String) = Base64.decode(value, Base64.NO_WRAP)
    private fun aad() = "$MAGIC|$FORMAT_VERSION|PBKDF2-HMAC-SHA256|$PBKDF2_ITERATIONS|AES-256-GCM"
        .toByteArray(StandardCharsets.UTF_8)
    private fun digest(value: String) = MessageDigest.getInstance("SHA-256").digest(value.toByteArray(StandardCharsets.UTF_8))
    private fun result(ok: Boolean, message: String) = JSONObject().put("ok", ok).put("message", message).toString()
}
