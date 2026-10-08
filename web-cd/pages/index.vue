<template>
  <div class="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-bg" aria-hidden="true">
        <div class="hero-orb hero-orb-1" />
        <div class="hero-orb hero-orb-2" />
        <div class="hero-scan" />
      </div>
      <div class="container hero-inner">
        <div class="hero-badge animate-fade-up">
          <span class="tag">CD.Tech · 数字化解决方案</span>
        </div>
        <h1 id="hero-title" class="hero-title animate-fade-up-delay-1">
          极致可视化<br>
          <span class="hero-accent">连接业务与现场</span>
        </h1>
        <p class="hero-desc animate-fade-up-delay-2">
          围绕工业拓扑图、3D模型展示、储能大屏及英语口语 AI 应用，<br class="hide-mobile">
          为企业提供可落地、可交付、可持续演进的数字化解决方案。
        </p>
        <div class="hero-actions animate-fade-up-delay-3">
          <NuxtLink to="/products" class="btn btn-primary">查看解决方案</NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline">立即咨询</NuxtLink>
        </div>
        <div class="hero-stats animate-fade-up-delay-4">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section products-section" aria-labelledby="products-title">
      <div class="container">
        <p class="section-label">SOLUTIONS</p>
        <h2 id="products-title" class="section-title">解决方案矩阵</h2>
        <p class="section-desc">目前可提供以下解决方案，覆盖工业监控、三维展示、能源数据与 AI 应用等场景。</p>
        <div class="products-grid">
          <NuxtLink
            v-for="product in products"
            :key="product.slug"
            :to="`/products/${product.slug}`"
            class="product-card"
            :style="`--card-accent: ${product.color}`"
          >
            <div class="card-icon" aria-hidden="true">{{ product.icon }}</div>
            <div class="card-body">
              <h3 class="card-title">{{ product.name }}</h3>
              <p class="card-desc">{{ product.desc }}</p>
              <ul class="card-features">
                <li v-for="f in product.features" :key="f">{{ f }}</li>
              </ul>
            </div>
            <div class="card-footer">
              <span class="card-link">了解详情 →</span>
              <span class="tag" style="font-size:0.7rem">{{ product.tag }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section features-section" aria-labelledby="features-title">
      <div class="container">
        <p class="section-label">WHY CD.TECH</p>
        <h2 id="features-title" class="section-title">为什么选择我们</h2>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.title">
            <div class="feature-icon" aria-hidden="true">{{ f.icon }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-glow" aria-hidden="true" />
          <p class="section-label" style="text-align:center">GET STARTED</p>
          <h2 class="section-title" style="text-align:center;max-width:600px;margin:0 auto var(--space-md)">准备好开始了吗？</h2>
          <p class="section-desc" style="text-align:center;margin:0 auto var(--space-xl)">联系我们获取定制方案，或进一步了解适合您业务的解决方案。</p>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="btn btn-primary">免费咨询</NuxtLink>
            <NuxtLink to="/about" class="btn btn-outline">了解我们</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  'CD.Tech - 工业可视化与数字化解决方案',
  'CD.Tech 聚焦工业可视化、三维展示、能源数据大屏与 AI 应用，为企业提供可落地的数字化解决方案。',
  {
    ogTitle: 'CD.Tech - 工业可视化与数字化解决方案',
    ogDescription: '工业拓扑图、3D模型展示、储能大屏、英语口语 AI 应用，覆盖多场景数字化解决方案。',
  },
)

const stats = [
  { value: '4+', label: '解决方案' },
  { value: '多场景', label: '行业覆盖' },
  { value: 'SSR', label: 'SEO友好' },
  { value: '全端', label: '交付适配' },
]

const products = [
  {
    slug: 'topology',
    name: '工业拓扑图方案',
    icon: '⬡',
    color: '#00c8ff',
    tag: '工业级',
    desc: '面向工业场景的网络拓扑可视化解决方案，支持大规模节点渲染、实时状态监控与结构分析。',
    features: ['大规模节点渲染', '实时状态监控', '自定义图元与连线', '导入/导出支持'],
  },
  {
    slug: '3d-model',
    name: '3D模型展示方案',
    icon: '◈',
    color: '#7c4dff',
    tag: 'WebGL',
    desc: '面向品牌展示与工业演示的三维展示解决方案，支持旋转、缩放、材质切换与 AR 预览。',
    features: ['WebGL高性能渲染', '多格式模型支持', '材质与光照编辑', 'AR预览能力'],
  },
  {
    slug: 'energy-screen',
    name: '储能大屏方案',
    icon: '◉',
    color: '#00e5a0',
    tag: '数据大屏',
    desc: '面向储能电站与能源系统的实时数据大屏解决方案，支持多维展示与告警联动。',
    features: ['实时数据推送', '多维度图表', '告警联动', '多屏适配'],
  },
  {
    slug: 'english-app',
    name: '英语口语方案',
    icon: '◎',
    color: '#f5a623',
    tag: 'AI · 小程序',
    desc: '面向教育与学习场景的英语口语 AI 解决方案，提供智能评分、跟读纠音与陪练能力。',
    features: ['AI智能评分', '跟读与纠音', '场景化练习', '微信小程序'],
  },
]

const features = [
  { icon: '⚡', title: '方案落地', desc: '从需求梳理、界面设计到部署交付，提供完整的数字化解决方案闭环。' },
  { icon: '🎯', title: '场景聚焦', desc: '围绕工业现场、能源管理、品牌展示与 AI 应用等真实业务场景持续打磨。' },
  { icon: '🔧', title: '灵活定制', desc: '支持按行业特点与业务流程做能力组合，满足不同团队的上线需求。' },
  { icon: '📱', title: '全端覆盖', desc: 'Web、移动端、小程序等多端协同，兼顾展示、操作与传播体验。' },
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.hero-orb-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(0,100,200,0.25) 0%, transparent 70%);
}

.hero-orb-2 {
  width: 400px;
  height: 400px;
  bottom: 0;
  left: -100px;
  background: radial-gradient(circle, rgba(0,200,255,0.1) 0%, transparent 70%);
}

.hero-scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,200,255,0.015) 2px,
    rgba(0,200,255,0.015) 4px
  );
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  padding-top: var(--space-3xl);
  padding-bottom: var(--space-3xl);
}

.hero-badge {
  margin-bottom: var(--space-lg);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-lg);
  color: var(--color-text);
}

.hero-accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--color-text-2);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: var(--space-xl);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-2xl);
}

.hero-stats {
  display: flex;
  gap: var(--space-xl);
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--color-text-3);
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.products-section {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

@media (max-width: 1100px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
}

.product-card {
  display: flex;
  flex-direction: column;
  background: var(--gradient-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: border-color var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--card-accent, var(--color-accent));
  opacity: 0;
  transition: opacity var(--transition-base);
}

.product-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,200,255,0.1);
}

.product-card:hover::before {
  opacity: 1;
}

.card-icon {
  font-size: 2rem;
  color: var(--card-accent, var(--color-accent));
  margin-bottom: var(--space-md);
  line-height: 1;
}

.card-body {
  flex: 1;
}

.card-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

.card-desc {
  font-size: 0.85rem;
  color: var(--color-text-2);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.card-features {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: var(--space-md);
}

.card-features li {
  font-size: 0.78rem;
  color: var(--color-text-3);
  padding-left: 14px;
  position: relative;
}

.card-features li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: var(--card-accent, var(--color-accent));
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border);
}

.card-link {
  font-size: 0.82rem;
  color: var(--card-accent, var(--color-accent));
  font-family: var(--font-mono);
  transition: letter-spacing var(--transition-fast);
}

.product-card:hover .card-link {
  letter-spacing: 0.05em;
}

.features-section {
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}

@media (max-width: 1100px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
}

.feature-item {
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--gradient-card);
  transition: border-color var(--transition-base);
}

.feature-item:hover {
  border-color: var(--color-border-hover);
}

.feature-icon {
  font-size: 1.8rem;
  margin-bottom: var(--space-md);
  line-height: 1;
}

.feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--space-sm);
}

.feature-desc {
  font-size: 0.85rem;
  color: var(--color-text-2);
  line-height: 1.7;
}

.cta-banner {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
}

.cta-inner {
  position: relative;
  text-align: center;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(0,200,255,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.cta-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .hide-mobile { display: none; }
  .hero-stats { gap: var(--space-lg); }
}
</style>
