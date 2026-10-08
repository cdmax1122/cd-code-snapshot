/**
 * @file topo.main.js
 * @description 应用入口：初始化 TopoCanvas，绑定 UI 控件事件，
 *              处理配置文本的解析、应用与文件加载。
 */

import { TopoCanvas } from "./topo.renderer.js";
import { DEFAULT_CONFIG_TEXT } from "./topo.config.js";

/**
 * 主函数：在 DOM 就绪后由 topo.js 调用。
 */
export async function main() {
  // ─── DOM 引用 ──────────────────────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);

  /** @type {HTMLCanvasElement} */
  const canvas = $("#topo");
  const statusEl = $("#status");

  /** @type {HTMLTextAreaElement} */
  const configText   = $("#configText");
  const btnApply     = $("#btnApply");
  const btnLoadConfig = $("#btnLoadConfig");
  /** @type {HTMLInputElement} */
  const fileConfig   = $("#fileConfig");
  const btnFit       = $("#btnFit");
  const btnCenter    = $("#btnCenter");
  const btnReset     = $("#btnReset");

  // ─── 渲染器初始化 ──────────────────────────────────────────────────────────
  const view = new TopoCanvas(canvas, statusEl);

  /** 上一次成功解析的配置，用于解析出错时回退 */
  let lastGood = null;

  // ─── 配置应用 ──────────────────────────────────────────────────────────────

  /**
   * 从文本框读取 JSON 并应用到画布。
   * 解析失败时显示错误，并用上次合法配置回退。
   */
  function applyFromText() {
    try {
      const cfg = JSON.parse(configText.value);
      view.setConfig(cfg);
      lastGood = cfg;
      statusEl.textContent = "配置已应用。";
    } catch (err) {
      statusEl.textContent = `JSON 解析失败：${err?.message ?? err}`;
      if (lastGood) view.setConfig(lastGood);
    }
  }

  // ─── 按钮事件 ──────────────────────────────────────────────────────────────

  // 应用配置
  btnApply.addEventListener("click", applyFromText);

  // 重置视口并重新应用当前配置
  btnReset.addEventListener("click", () => {
    view.resetView();
    if (lastGood) view.setConfig(lastGood);
    statusEl.textContent = "已重置。";
  });

  // 居中视图
  btnCenter.addEventListener("click", () => view.centerView());

  // 适配视图（自动缩放使所有节点可见）
  btnFit.addEventListener("click", () => view.fitView(40));

  // 触发文件选择对话框
  btnLoadConfig.addEventListener("click", () => {
    fileConfig.value = ""; // 清空，确保相同文件可以重复选取
    fileConfig.click();
  });

  // ─── 文件加载 ──────────────────────────────────────────────────────────────

  fileConfig.addEventListener("change", async () => {
    const f = fileConfig.files?.[0];
    if (!f) {
      // 未选择文件 → 加载内置示例
      configText.value = DEFAULT_CONFIG_TEXT;
      applyFromText();
      view.fitView(40);
      return;
    }
    try {
      const txt = await f.text();
      configText.value = txt;
      applyFromText();
      view.fitView(40);
      statusEl.textContent = `已加载：${f.name}`;
    } catch (err) {
      statusEl.textContent = `读取文件失败：${err?.message ?? err}`;
    }
  });

  // ─── 初始加载 ──────────────────────────────────────────────────────────────

  // 将内置示例填入文本框并立即渲染
  configText.value = DEFAULT_CONFIG_TEXT;
  applyFromText();
  view.fitView(40);
}
