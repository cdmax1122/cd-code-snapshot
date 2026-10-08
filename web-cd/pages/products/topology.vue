<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink>
          <span>›</span>
          <NuxtLink to="/products">解决方案</NuxtLink>
          <span>›</span>
          <span>工业拓扑图方案</span>
        </div>
        <div class="product-hero-inner">
          <div class="product-hero-content">
            <span class="tag" style="--tag-color:#00c8ff">工业级</span>
            <h1 class="product-title">工业拓扑图方案</h1>
            <p class="product-subtitle">面向工业网络与设备管理场景的拓扑可视化解决方案，支持大规模节点渲染、实时状态监控与多层级结构表达。</p>
            <div class="product-actions">
              <NuxtLink to="/contact" class="btn btn-primary">获取演示</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline">咨询定制</NuxtLink>
            </div>
          </div>
          <div class="product-hero-visual" aria-hidden="true">
            <div class="topo-demo">
              <div class="topo-node topo-node-center"><span>核心</span></div>
              <div class="topo-node topo-node-1"><span>设备A</span></div>
              <div class="topo-node topo-node-2"><span>设备B</span></div>
              <div class="topo-node topo-node-3"><span>设备C</span></div>
              <div class="topo-node topo-node-4"><span>设备D</span></div>
              <svg class="topo-lines" viewBox="0 0 300 300">
                <line x1="150" y1="150" x2="150" y2="40" stroke="#00c8ff" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
                <line x1="150" y1="150" x2="260" y2="150" stroke="#00c8ff" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
                <line x1="150" y1="150" x2="150" y2="260" stroke="#00c8ff" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
                <line x1="150" y1="150" x2="40" y2="150" stroke="#00c8ff" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
              </svg>
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
            <div>
              <h3 class="feat-title">{{ f.title }}</h3>
              <p class="feat-desc">{{ f.desc }}</p>
            </div>
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
            <span class="spec-val">{{ s.val }}</span>
          </div>
        </div>
      </div>
    </section>

    <ProductCTA />
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '工业拓扑图方案 - CD.Tech',
  '工业网络拓扑可视化解决方案，支持大规模节点渲染、实时状态监控、自定义图元与多层级结构展示。',
)

const features = [
  { icon: '⬡', title: '大规模节点渲染', desc: '支持数千节点与连线的流畅渲染，WebGL 加速，无惧复杂拓扑。' },
  { icon: '📡', title: '实时状态监控', desc: '节点状态实时更新，告警高亮，一屏掌握全局网络健康状态。' },
  { icon: '✏️', title: '自定义图元与连线', desc: '丰富的内置图元库，支持自定义 SVG 图元与多样化连线样式。' },
  { icon: '📤', title: '导入/导出支持', desc: '支持 JSON、XML 等多种格式导入导出，轻松与现有系统集成。' },
  { icon: '🔍', title: '智能缩放与导航', desc: '缩略图导航、鱼眼放大、局部聚焦，大图不再迷路。' },
  { icon: '🔗', title: '多层级子图', desc: '支持层级展开与折叠，复杂网络分层管理，清晰直观。' },
]

const specs = [
  { key: '渲染引擎', val: 'Canvas 2D / WebGL' },
  { key: '最大节点数', val: '10,000+' },
  { key: '布局算法', val: '力导向 / 树形 / 环形 / 自定义' },
  { key: '数据格式', val: 'JSON / XML / CSV' },
  { key: '实时推送', val: 'WebSocket / SSE' },
  { key: '框架兼容', val: 'Vue 3 / React / 原生 JS' },
  { key: '移动端', val: '触控手势支持' },
  { key: '导出格式', val: 'PNG / SVG / PDF' },
]
</script>

<style scoped>
.product-page { overflow: hidden; }

.product-hero {
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-2xl);
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.8rem;
  color: var(--color-text-3);
  margin-bottom: var(--space-xl);
  font-family: var(--font-mono);
}

.breadcrumb a { color: var(--color-text-2); transition: color var(--transition-fast); }
.breadcrumb a:hover { color: var(--color-accent); }

.product-hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

@media (max-width: 900px) {
  .product-hero-inner { grid-template-columns: 1fr; }
  .product-hero-visual { display: none; }
}

.product-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin: var(--space-md) 0;
  color: var(--color-text);
}

.product-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-2);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
  max-width: 500px;
}

.product-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.topo-demo {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.topo-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.topo-node {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--color-accent);
  border: 1px solid rgba(0,200,255,0.4);
  background: rgba(0,200,255,0.08);
  animation: float 3s ease-in-out infinite;
}

.topo-node-center {
  width: 64px; height: 64px;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0,200,255,0.15);
  border-color: var(--color-accent);
  box-shadow: 0 0 20px rgba(0,200,255,0.3);
  animation-delay: 0s;
}

.topo-node-1 { width: 48px; height: 48px; top: 8px; left: 50%; transform: translateX(-50%); animation-delay: 0.2s; }
.topo-node-2 { width: 48px; height: 48px; top: 50%; right: 8px; transform: translateY(-50%); animation-delay: 0.4s; }
.topo-node-3 { width: 48px; height: 48px; bottom: 8px; left: 50%; transform: translateX(-50%); animation-delay: 0.6s; }
.topo-node-4 { width: 48px; height: 48px; top: 50%; left: 8px; transform: translateY(-50%); animation-delay: 0.8s; }

.features-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

@media (max-width: 900px) { .features-list { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .features-list { grid-template-columns: 1fr; } }

.feat-card {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--gradient-card);
  transition: border-color var(--transition-base);
}

.feat-card:hover { border-color: var(--color-border-hover); }

.feat-icon { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }

.feat-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 6px;
}

.feat-desc {
  font-size: 0.83rem;
  color: var(--color-text-2);
  line-height: 1.7;
}

.specs-section { background: var(--color-bg-2); border-top: 1px solid var(--color-border); }

.specs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: var(--space-2xl);
}

@media (max-width: 900px) { .specs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .specs-grid { grid-template-columns: 1fr; } }

.spec-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--space-lg);
  background: var(--color-bg);
}

.spec-key {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-3);
}

.spec-val {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-accent);
}
</style>
