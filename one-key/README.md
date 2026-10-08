# 透明本地保险箱

一个以透明为第一原则、默认完全本地的密码与凭证保险箱。当前版本优先实现 Android，UI 与普通业务使用 uni-app x / UTS，敏感能力收敛在 Android 原生安全插件内。

## V0.1 已实现

- 首次创建、主密码解锁、手动锁定、5 分钟无操作自动锁定与后台锁定
- 单文件整体加密保险箱：PBKDF2-HMAC-SHA256 + AES-256-GCM
- 账户新增、查看、编辑、删除、搜索、标签、备注与自定义字段
- Password 与 Passkey 兼容的数据模型（Passkey 暂不创建）
- 使用系统 `SecureRandom` 的密码生成器，以及面向用户的强度说明
- 密码显示/隐藏、复制与 15/30/60 秒条件式剪贴板清理
- 加密备份；Android 10+ 导出到 `下载/TransparentVault`
- 数据位置、加密方式、网络请求和版本信息可见的安全状态页
- 不申请网络权限，不启用统计或遥测

## 工程结构

```text
apps/mobile/                 uni-app x 移动端项目（HBuilderX 打开此目录）
  pages/                     页面
  services/                  应用服务
  stores/                    非持久化 Session 状态
  core/                      领域、生成器、强度与校验逻辑
  uni_modules/vault-native/  Android 原生安全边界
packages/core/tests/         Core 的平台外单元测试
doc/                         产品与架构设计原文
```

## Android 运行

1. 使用 HBuilderX 5.24 或更高版本打开 `apps/mobile`。
2. 连接 Android 设备，选择“运行到 Android App 基座”。安全核心只使用 Android 系统 API，可直接使用标准基座编译。
3. Release 前应使用自有 Android 构建链固定依赖、记录 Git Commit，并发布 APK/AAB 的 SHA-256。

仓库本身没有 CLI 版 uni-app x 编译器；DCloud 官方目前要求通过 HBuilderX 创建和使用 UTS 插件。因此通用检查通过 `npm test` 与 `npm run check` 执行，真机编译需要 HBuilderX。

## 安全说明

- 主密码不会持久化；派生密钥仅驻留原生进程内存，锁定时覆盖密钥字节。
- 除格式版本、KDF 参数、Salt、Nonce 与密文外，账户元数据均在 AEAD 加密 Payload 中。
- 当前不提供密码找回、云同步、浏览器自动填充、生物识别或完整 Passkey。
- 本应用无法防御已 Root、被完全控制的系统、键盘记录器、恶意输入法或用户主动泄露。

更完整的边界见 [安全设计](docs/security.md)。
