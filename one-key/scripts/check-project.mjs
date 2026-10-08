import { readFile, readdir, access } from 'node:fs/promises'
import { resolve, relative, extname, dirname } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const required = [
  'apps/mobile/manifest.json',
  'apps/mobile/pages.json',
  'apps/mobile/App.uvue',
  'apps/mobile/uni_modules/vault-native/utssdk/interface.uts',
  'apps/mobile/uni_modules/vault-native/utssdk/app-android/VaultNativeEngine.kt',
  'apps/mobile/core/generator/password-generator.uts',
  'apps/mobile/core/strength/password-strength.uts'
]

async function files(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const result = []
  for (const entry of entries) {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) result.push(...await files(path))
    else result.push(path)
  }
  return result
}

for (const path of required) await readFile(resolve(root, path))
JSON.parse(await readFile(resolve(root, 'apps/mobile/manifest.json'), 'utf8'))
const pages = JSON.parse(await readFile(resolve(root, 'apps/mobile/pages.json'), 'utf8'))
for (const page of pages.pages) await readFile(resolve(root, 'apps/mobile', `${page.path}.uvue`))

const sources = (await files(root)).filter((path) => ['.uts', '.uvue', '.kt', '.json'].includes(extname(path)))
for (const path of sources) {
  const source = await readFile(path, 'utf8')
  if (source.includes('Math.random(')) throw new Error(`禁止使用 Math.random: ${relative(root, path)}`)
  if (/console\.(log|debug|info)\s*\(\s*(account|password|vault|notes)/i.test(source)) {
    throw new Error(`可能输出敏感数据: ${relative(root, path)}`)
  }
  for (const match of source.matchAll(/from\s+['"](\.{1,2}\/[^'"]+)['"]/g)) {
    await access(resolve(dirname(path), match[1]))
  }
}

const manifest = await readFile(resolve(root, 'apps/mobile/manifest.json'), 'utf8')
if (manifest.includes('android.permission.INTERNET')) throw new Error('MVP 不应声明网络权限')
const androidManifest = await readFile(resolve(root, 'apps/mobile/AndroidManifest.xml'), 'utf8')
if (!/android\.permission\.INTERNET[^>]+tools:node="remove"/.test(androidManifest)) {
  throw new Error('Android Release 必须显式移除 INTERNET 权限')
}
console.log(`Project check passed: ${pages.pages.length} pages, ${sources.length} source/config files.`)
