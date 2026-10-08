<template>
  <div class="products-page">
    <section class="products-hero">
      <div class="hero-orb hero-orb-1" aria-hidden="true" />
      <div class="hero-orb hero-orb-2" aria-hidden="true" />
      <div class="container products-hero-inner">
        <div class="hero-copy">
          <p class="section-label">SOLUTION OVERVIEW</p>
          <h1 class="products-title">解决方案总览</h1>
          <p class="products-lead">
            从工业可视化到 AI 应用，我们把复杂能力整理成清晰、可交付、可落地的解决方案。
          </p>
        </div>
        <div class="hero-metrics" aria-label="解决方案概览指标">
          <div class="metric-card" v-for="item in metrics" :key="item.label">
            <span class="metric-value">{{ item.value }}</span>
            <span class="metric-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="products-grid">
          <NuxtLink
            v-for="product in products"
            :key="product.slug"
            :to="`/products/${product.slug}`"
            class="product-card"
            :style="`--card-accent: ${product.color}; --card-accent-soft: ${product.softColor}`"
          >
            <div class="product-card-top">
              <span class="product-icon" aria-hidden="true">{{ product.icon }}</span>
              <span class="tag product-tag">{{ product.tag }}</span>
            </div>
            <div class="product-card-body">
              <h2 class="product-name">{{ product.name }}</h2>
              <p class="product-desc">{{ product.desc }}</p>
              <ul class="product-features">
                <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            <div class="product-card-bottom">
              <span class="product-link">查看解决方案详情 →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <ProductCTA />
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '解决方案总览 - CD.Tech',
  '浏览 CD.Tech 全部解决方案，包括工业拓扑图、3D模型展示、储能大屏与英语口语 AI 应用。',
)

const metrics = [
  { value: '4', label: '解决方案' },
  { value: 'Web · App · 小程序', label: '交付形态' },
  { value: '工业 + AI', label: '能力方向' },
]

const products = [
  {
    slug: 'topology',
    name: '工业拓扑图方案',
    icon: '⬡',
    color: '#00c8ff',
    softColor: 'rgba(0,200,255,0.16)',
    tag: '工业级',
    desc: '面向工业网络与设备管理场景的拓扑可视化解决方案，适合大规模节点渲染、实时状态监控与多层级结构表达。',
    features: ['大规模节点渲染', '实时状态监控', '自定义图元', '导入导出支持'],
  },
  {
    slug: '3d-model',
    name: '3D模型展示方案',
    icon: '◈',
    color: '#7c4dff',
    softColor: 'rgba(124,77,255,0.16)',
    tag: 'WebGL',
    desc: '面向品牌展示与工业演示的三维展示解决方案，支持旋转、缩放、材质切换、交互热点与 AR 预览。',
    features: ['高性能三维渲染', '多格式模型支持', '材质与光照编辑', 'AR 预览'],
  },
  {
    slug: 'energy-screen',
    name: '储能大屏方案',
    icon: '◉',
    color: '#00e5a0',
    softColor: 'rgba(0,229,160,0.16)',
    tag: '数据大屏',
    desc: '面向储能电站与能源系统的实时监控可视化解决方案，支持多维图表、告警联动与多屏适配。',
    features: ['实时数据推送', '多维图表展示', '告警联动', '4K 大屏适配'],
  },
  {
    slug: 'english-app',
    name: '英语口语方案',
    icon: '◎',
    color: '#f5a623',
    softColor: 'rgba(245,166,35,0.16)',
    tag: 'AI · 小程序',
    desc: '面向教育与学习场景的英语口语 AI 解决方案，提供发音评分、跟读纠音、场景化练习与 AI 对话陪练。',
    features: ['AI 智能评分', '跟读纠音', '场景化练习', '微信小程序'],
  },
]
</script>

<style scoped>
.products-page {
  overflow: hidden;
}

.products-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-2xl);
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
}

.hero-orb-1 {
  width: 420px;
  height: 420px;
  top: -120px;
  right: -80px;
  background: radial-gradient(circle, rgba(0, 200, 255, 0.18) 0%, transparent 72%);
}

.hero-orb-2 {
  width: 320px;
  height: 320px;
  bottom: -120px;
  left: -80px;
  background: radial-gradient(circle, rgba(124, 77, 255, 0.14) 0%, transparent 72%);
}

.products-hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-2xl);
  align-items: end;
}

@media (max-width: 900px) {
  .products-hero-inner {
    grid-template-columns: 1fr;
  }
}

.products-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 4.4rem);
  font-weight: 900;
  line-height: 1.08;
  margin: var(--space-md) 0;
  color: var(--color-text);
}

.products-lead {
  max-width: 620px;
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--color-text-2);
}

.hero-metrics {
  display: grid;
  gap: var(--space-md);
}

.metric-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  backdrop-filter: blur(12px);
}

.metric-value {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-accent);
}

.metric-label {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-3);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-lg);
}

@media (max-width: 900px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: var(--space-xl);
  border-radius: var(--radius-xl);
  border: 1px solid color-mix(in srgb, var(--card-accent) 24%, var(--color-border));
  background:
    radial-gradient(circle at top right, var(--card-accent-soft), transparent 34%),
    var(--gradient-card);
  overflow: hidden;
  transition: transform var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base);
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--card-accent) 42%, var(--color-border));
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
}

.product-card-top,
.product-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.product-card-body {
  flex: 1;
  margin: var(--space-lg) 0;
}

.product-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  font-size: 1.6rem;
  color: var(--card-accent);
  background: color-mix(in srgb, var(--card-accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--card-accent) 30%, transparent);
}

.product-tag {
  border-color: color-mix(in srgb, var(--card-accent) 26%, transparent);
  color: var(--card-accent);
  background: color-mix(in srgb, var(--card-accent) 12%, transparent);
}

.product-name {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

.product-desc {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--color-text-2);
  margin-bottom: var(--space-lg);
}

.product-features {
  display: grid;
  gap: 8px;
}

.product-features li {
  position: relative;
  padding-left: 16px;
  font-size: 0.84rem;
  color: var(--color-text-2);
}

.product-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--card-accent);
  box-shadow: 0 0 10px color-mix(in srgb, var(--card-accent) 55%, transparent);
}

.product-link {
  font-size: 0.84rem;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  color: var(--card-accent);
}
</style>
