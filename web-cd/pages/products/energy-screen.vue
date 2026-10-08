<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink> <span>›</span>
          <NuxtLink to="/products">解决方案</NuxtLink> <span>›</span>
          <span>储能大屏方案</span>
        </div>
        <div class="product-hero-inner">
          <div class="product-hero-content">
            <span class="tag" style="background:rgba(0,229,160,0.12);color:#00e5a0;border-color:rgba(0,229,160,0.3)">数据大屏</span>
            <h1 class="product-title gradient-green">储能大屏方案</h1>
            <p class="product-subtitle">面向储能电站与能源系统的实时监控可视化解决方案，支持多维数据展示与告警联动，让运营决策更高效。</p>
            <div class="product-actions">
              <NuxtLink to="/contact" class="btn btn-primary" style="background:linear-gradient(135deg,#00e5a0,#00b894)">获取演示</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline" style="color:#00e5a0;border-color:rgba(0,229,160,0.4)">咨询定制</NuxtLink>
            </div>
          </div>
          <div class="product-hero-visual" aria-hidden="true">
            <div class="energy-demo">
              <div class="energy-stats">
                <div class="e-stat" v-for="s in demoStats" :key="s.label">
                  <span class="e-val" :style="`color:${s.color}`">{{ s.val }}</span>
                  <span class="e-label">{{ s.label }}</span>
                </div>
              </div>
              <div class="energy-bar-group">
                <div class="energy-bar" v-for="b in bars" :key="b.label" :style="`--h:${b.h}%;--c:${b.c}`">
                  <span class="bar-label">{{ b.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="section-label">FEATURES</p>
        <h2 class="section-title">核心功能</h2>
        <div class="features-list">
          <div class="feat-card" v-for="f in features" :key="f.title">
            <div class="feat-icon">{{ f.icon }}</div>
            <div><h3 class="feat-title">{{ f.title }}</h3><p class="feat-desc">{{ f.desc }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section specs-section">
      <div class="container">
        <p class="section-label">SPECS</p>
        <h2 class="section-title">技术规格</h2>
        <div class="specs-grid">
          <div class="spec-item" v-for="s in specs" :key="s.key">
            <span class="spec-key">{{ s.key }}</span>
            <span class="spec-val" style="color:#00e5a0">{{ s.val }}</span>
          </div>
        </div>
      </div>
    </section>

    <ProductCTA />
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '储能大屏方案 - CD.Tech',
  '面向储能电站与能源系统的实时监控可视化解决方案，支持实时数据推送、多维图表与告警联动。',
)

const demoStats = [
  { val: '98.6%', label: 'SOC', color: '#00e5a0' },
  { val: '1.2MW', label: '功率', color: '#00c8ff' },
  { val: '0', label: '告警', color: '#f5a623' },
]

const bars = [
  { label: '电池1', h: '85', c: '#00e5a0' },
  { label: '电池2', h: '72', c: '#00c8ff' },
  { label: '电池3', h: '91', c: '#00e5a0' },
  { label: '电池4', h: '60', c: '#f5a623' },
  { label: '电池5', h: '78', c: '#00c8ff' },
]

const features = [
  { icon: '⚡', title: '实时数据推送', desc: 'WebSocket 实时刷新，毫秒级延迟，确保数据始终最新。' },
  { icon: '📊', title: '多维度图表', desc: '折线图、柱状图、仪表盘、热力图一应俱全，数据立体呈现。' },
  { icon: '🔔', title: '告警联动', desc: '阈值告警、声光提示、短信推送，异常第一时间响应。' },
  { icon: '🖥️', title: '多屏适配', desc: '自适应各类大屏尺寸，支持4K分辨率，画面清晰锐利。' },
  { icon: '🗂️', title: '历史数据回溯', desc: '支持任意时间段数据查询与对比，帮助分析运营规律。' },
  { icon: '🔌', title: '设备接入', desc: '支持Modbus、MQTT、OPC-UA等主流协议，快速接入各类设备。' },
]

const specs = [
  { key: '数据协议', val: 'WebSocket / MQTT / SSE' },
  { key: '图表库', val: 'ECharts / D3.js' },
  { key: '刷新频率', val: '100ms ~ 实时' },
  { key: '最大分辨率', val: '4K (3840×2160)' },
  { key: '告警方式', val: '声音 / 短信 / 邮件' },
  { key: '设备协议', val: 'Modbus / MQTT / OPC-UA' },
  { key: '历史数据', val: '支持任意区间查询' },
  { key: '部署方式', val: '私有化 / 云端' },
]
</script>

<style scoped>
.product-page { overflow: hidden; }
.product-hero {
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-2xl);
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}
.breadcrumb {
  display: flex; align-items: center; gap: var(--space-sm);
  font-size: 0.8rem; color: var(--color-text-3); margin-bottom: var(--space-xl);
  font-family: var(--font-mono);
}
.breadcrumb a { color: var(--color-text-2); transition: color var(--transition-fast); }
.breadcrumb a:hover { color: var(--color-accent); }
.product-hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl); align-items: center;
}
@media (max-width: 900px) {
  .product-hero-inner { grid-template-columns: 1fr; }
  .product-hero-visual { display: none; }
}
.product-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900; line-height: 1.1; margin: var(--space-md) 0;
}
.gradient-green {
  background: linear-gradient(135deg, #00e5a0, #00c8ff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.product-subtitle {
  font-size: 1.05rem; color: var(--color-text-2);
  line-height: 1.8; margin-bottom: var(--space-xl); max-width: 500px;
}
.product-actions { display: flex; gap: var(--space-md); flex-wrap: wrap; }
.energy-demo {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  display: flex; flex-direction: column; gap: var(--space-lg);
}
.energy-stats { display: flex; gap: var(--space-lg); justify-content: space-around; }
.e-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.e-val { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; }
.e-label { font-size: 0.72rem; font-family: var(--font-mono); color: var(--color-text-3); text-transform: uppercase; }
.energy-bar-group {
  display: flex; align-items: flex-end; gap: 8px;
  height: 100px; padding: 0 var(--space-sm);
}
.energy-bar {
  flex: 1; height: var(--h); background: var(--c);
  border-radius: 3px 3px 0 0; opacity: 0.8;
  display: flex; align-items: flex-end; justify-content: center; padding-bottom: 4px;
  transition: height 1s ease;
}
.bar-label { font-size: 0.65rem; color: var(--color-bg); font-family: var(--font-mono); writing-mode: vertical-rl; }
.features-list {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg); margin-top: var(--space-2xl);
}
@media (max-width: 900px) { .features-list { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 560px) { .features-list { grid-template-columns: 1fr; } }
.feat-card {
  display: flex; gap: var(--space-md); padding: var(--space-lg);
  border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  background: var(--gradient-card); transition: border-color var(--transition-base);
}
.feat-card:hover { border-color: rgba(0,229,160,0.35); }
.feat-icon { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.feat-title { font-size: 0.95rem; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
.feat-desc { font-size: 0.83rem; color: var(--color-text-2); line-height: 1.7; }
.specs-section { background: var(--color-bg-2); border-top: 1px solid var(--color-border); }
.specs-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1px; background: var(--color-border);
  border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  overflow: hidden; margin-top: var(--space-2xl);
}
@media (max-width: 900px) { .specs-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 480px) { .specs-grid { grid-template-columns: 1fr; } }
.spec-item { display: flex; flex-direction: column; gap: 6px; padding: var(--space-lg); background: var(--color-bg); }
.spec-key { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-3); }
.spec-val { font-size: 0.9rem; font-weight: 500; }
</style>
