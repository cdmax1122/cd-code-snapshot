<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink>
          <span>›</span>
          <NuxtLink to="/products">解决方案</NuxtLink>
          <span>›</span>
          <span>3D模型展示方案</span>
        </div>
        <div class="product-hero-inner">
          <div class="product-hero-content">
            <span class="tag" style="background:rgba(124,77,255,0.15);color:#7c4dff;border-color:rgba(124,77,255,0.3)">WebGL</span>
            <h1 class="product-title gradient-purple">3D模型展示方案</h1>
            <p class="product-subtitle">面向品牌展示与工业演示的三维展示解决方案，支持旋转、缩放、材质切换与 AR 预览，让内容表达更立体。</p>
            <div class="product-actions">
              <NuxtLink to="/contact" class="btn btn-primary">获取演示</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline">咨询定制</NuxtLink>
            </div>
          </div>
          <div class="product-hero-visual" aria-hidden="true">
            <div class="model-demo">
              <div class="cube-wrapper">
                <div class="cube">
                  <div class="face front">3D</div>
                  <div class="face back">CD</div>
                  <div class="face right">GL</div>
                  <div class="face left">VR</div>
                  <div class="face top">AR</div>
                  <div class="face bottom">WEB</div>
                </div>
              </div>
              <div class="model-ring model-ring-1"></div>
              <div class="model-ring model-ring-2"></div>
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
            <span class="spec-val" style="color:#7c4dff">{{ s.val }}</span>
          </div>
        </div>
      </div>
    </section>

    <ProductCTA />
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '3D模型展示方案 - CD.Tech',
  '面向品牌展示与工业演示的 3D 模型展示解决方案，支持多格式模型、材质光照编辑与 AR 预览。',
)

const features = [
  { icon: '🎮', title: 'WebGL高性能渲染', desc: '基于 Three.js 深度封装，PBR材质、实时光影，高帧率流畅展示。' },
  { icon: '📦', title: '多格式模型支持', desc: '支持 GLTF/GLB、OBJ、FBX、STL 等主流三维格式，无缝导入。' },
  { icon: '💡', title: '材质与光照编辑', desc: '实时调节材质参数、光源类型与强度，所见即所得。' },
  { icon: '📱', title: 'AR预览能力', desc: '支持 WebXR，扫码即可在真实环境中预览三维模型。' },
  { icon: '🔄', title: '动画与交互', desc: '支持骨骼动画、关键帧动画，交互热点配置，演示更生动。' },
  { icon: '🌐', title: '嵌入式部署', desc: 'iframe 或 SDK 方式嵌入任意网站，零依赖轻量集成。' },
]

const specs = [
  { key: '渲染引擎', val: 'Three.js / WebGL 2.0' },
  { key: '模型格式', val: 'GLTF / OBJ / FBX / STL' },
  { key: '最大面数', val: '1,000万+ 三角面' },
  { key: '材质系统', val: 'PBR / Lambert / Phong' },
  { key: 'AR支持', val: 'WebXR Device API' },
  { key: '动画', val: '骨骼 / 关键帧 / Morph' },
  { key: '移动端', val: '触控旋转缩放' },
  { key: '集成方式', val: 'iframe / NPM SDK' },
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
}

.gradient-purple {
  background: linear-gradient(135deg, #7c4dff, #b388ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-subtitle {
  font-size: 1.05rem;
  color: var(--color-text-2);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
  max-width: 500px;
}

.product-actions { display: flex; gap: var(--space-md); flex-wrap: wrap; }

.model-demo {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube-wrapper {
  perspective: 600px;
}

.cube {
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 8s linear infinite;
}

@keyframes rotateCube {
  from { transform: rotateX(15deg) rotateY(0deg); }
  to { transform: rotateX(15deg) rotateY(360deg); }
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  color: #b388ff;
  border: 1px solid rgba(124,77,255,0.4);
  background: rgba(124,77,255,0.08);
  backdrop-filter: blur(4px);
}

.front  { transform: translateZ(50px); }
.back   { transform: rotateY(180deg) translateZ(50px); }
.right  { transform: rotateY(90deg) translateZ(50px); }
.left   { transform: rotateY(-90deg) translateZ(50px); }
.top    { transform: rotateX(90deg) translateZ(50px); }
.bottom { transform: rotateX(-90deg) translateZ(50px); }

.model-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(124,77,255,0.2);
  animation: spin 6s linear infinite;
}

.model-ring-1 { width: 200px; height: 200px; animation-duration: 8s; }
.model-ring-2 { width: 260px; height: 260px; animation-duration: 12s; animation-direction: reverse; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.features-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-top: var(--space-2xl);
}
@media (max-width: 900px) { .features-list { grid-template-columns: repeat(2,1fr); } }
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
.feat-card:hover { border-color: rgba(124,77,255,0.35); }
.feat-icon { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.feat-title { font-size: 0.95rem; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
.feat-desc { font-size: 0.83rem; color: var(--color-text-2); line-height: 1.7; }

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
@media (max-width: 900px) { .specs-grid { grid-template-columns: repeat(2,1fr); } }
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
.spec-val { font-size: 0.9rem; font-weight: 500; }
</style>
