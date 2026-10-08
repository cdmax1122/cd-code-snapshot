<template>
  <div class="product-page">
    <section class="product-hero">
      <div class="container">
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink> <span>›</span>
          <NuxtLink to="/products">解决方案</NuxtLink> <span>›</span>
          <span>英语口语方案</span>
        </div>
        <div class="product-hero-inner">
          <div class="product-hero-content">
            <span class="tag" style="background:rgba(245,166,35,0.12);color:#f5a623;border-color:rgba(245,166,35,0.3)">AI · 小程序</span>
            <h1 class="product-title gradient-amber">英语口语方案</h1>
            <p class="product-subtitle">面向教育与学习场景的英语口语 AI 解决方案，支持智能评分、跟读纠音与场景化练习，帮助用户持续提升表达能力。</p>
            <div class="product-actions">
              <NuxtLink to="/contact" class="btn btn-primary" style="background:linear-gradient(135deg,#f5a623,#e67e22)">立即体验</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline" style="color:#f5a623;border-color:rgba(245,166,35,0.4)">咨询合作</NuxtLink>
            </div>
            <div class="platforms">
              <span class="platform-badge">📱 iOS App</span>
              <span class="platform-badge">🤖 Android App</span>
              <span class="platform-badge">💬 微信小程序</span>
            </div>
          </div>
          <div class="product-hero-visual" aria-hidden="true">
            <div class="app-demo">
              <div class="phone-frame">
                <div class="phone-screen">
                  <div class="score-ring">
                    <span class="score-num">92</span>
                    <span class="score-sub">发音分</span>
                  </div>
                  <div class="waveform">
                    <span v-for="i in 14" :key="i" class="wave-bar"
                      :style="`height:${12 + Math.abs(Math.sin(i * 0.9)) * 24}px`" />
                  </div>
                  <div class="phone-sentence">&quot;Hello, how are you?&quot;</div>
                  <div class="phone-btn">● 开始录音</div>
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
            <span class="spec-val" style="color:#f5a623">{{ s.val }}</span>
          </div>
        </div>
      </div>
    </section>

    <ProductCTA />
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '英语口语方案 - CD.Tech',
  '面向教育与学习场景的英语口语 AI 解决方案，支持智能评分、跟读纠音、场景化练习与 AI 对话陪练。',
)

const features = [
  { icon: '🎙️', title: 'AI智能评分', desc: '深度学习模型实时分析发音，从音调、重音、流利度多维度评分。' },
  { icon: '🔁', title: '跟读与纠音', desc: '标准音频对比，逐词高亮纠正，找准发音偏差一目了然。' },
  { icon: '🗂️', title: '场景化练习', desc: '覆盖日常对话、商务英语、旅游出行等20+真实场景话题。' },
  { icon: '💬', title: '微信小程序', desc: '无需下载，微信扫码即用，随时随地开口练习不受限制。' },
  { icon: '📈', title: '学习报告', desc: '每日、每周练习统计，进步曲线可视化，激励坚持学习。' },
  { icon: '🤖', title: 'AI对话伙伴', desc: 'GPT驱动的AI陪练，自由对话练口语，像和真人聊天一样自然。' },
]

const specs = [
  { key: 'AI引擎', val: '自研 ASR + TTS' },
  { key: '评分维度', val: '音调 / 重音 / 流利度' },
  { key: '支持平台', val: 'iOS / Android / 小程序' },
  { key: '练习场景', val: '20+ 真实场景' },
  { key: 'AI对话', val: 'GPT 驱动' },
  { key: '离线支持', val: '核心功能离线可用' },
  { key: '语言', val: '英语（美音/英音）' },
  { key: '数据同步', val: '云端多端同步' },
]
</script>

<style scoped>
.product-page { overflow: hidden; }
.product-hero {
  padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-2xl);
  background: var(--color-bg-2); border-bottom: 1px solid var(--color-border);
}
.breadcrumb {
  display: flex; align-items: center; gap: var(--space-sm);
  font-size: 0.8rem; color: var(--color-text-3); margin-bottom: var(--space-xl); font-family: var(--font-mono);
}
.breadcrumb a { color: var(--color-text-2); transition: color var(--transition-fast); }
.breadcrumb a:hover { color: var(--color-accent); }
.product-hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2xl); align-items: center; }
@media (max-width: 900px) { .product-hero-inner { grid-template-columns: 1fr; } .product-hero-visual { display: none; } }
.product-title { font-family: var(--font-display); font-size: clamp(2rem,5vw,3.5rem); font-weight: 900; line-height: 1.1; margin: var(--space-md) 0; }
.gradient-amber { background: linear-gradient(135deg,#f5a623,#f39c12); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.product-subtitle { font-size: 1.05rem; color: var(--color-text-2); line-height: 1.8; margin-bottom: var(--space-xl); max-width: 500px; }
.product-actions { display: flex; gap: var(--space-md); flex-wrap: wrap; margin-bottom: var(--space-lg); }
.platforms { display: flex; gap: var(--space-sm); flex-wrap: wrap; }
.platform-badge { font-size: 0.78rem; padding: 6px 12px; background: rgba(245,166,35,0.1); border: 1px solid rgba(245,166,35,0.25); border-radius: 100px; color: var(--color-text-2); }
.app-demo { display: flex; justify-content: center; }
.phone-frame { width: 200px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 32px; padding: 24px 16px; box-shadow: 0 0 40px rgba(245,166,35,0.12); }
.phone-screen { display: flex; flex-direction: column; align-items: center; gap: var(--space-md); }
.score-ring { width: 90px; height: 90px; border-radius: 50%; border: 3px solid #f5a623; box-shadow: 0 0 20px rgba(245,166,35,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; animation: pulse-glow 2s ease-in-out infinite; }
.score-num { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; color: #f5a623; line-height: 1; }
.score-sub { font-size: 0.65rem; color: var(--color-text-3); font-family: var(--font-mono); }
.waveform { display: flex; align-items: center; gap: 3px; height: 40px; }
.wave-bar { display: block; width: 4px; background: #f5a623; border-radius: 2px; opacity: 0.7; animation: waveAnim 1.2s ease-in-out infinite alternate; }
.wave-bar:nth-child(odd) { animation-delay: 0.15s; }
.wave-bar:nth-child(3n) { animation-delay: 0.3s; }
@keyframes waveAnim { from { transform: scaleY(0.3); } to { transform: scaleY(1); } }
.phone-sentence { font-size: 0.72rem; color: var(--color-text-2); text-align: center; font-style: italic; }
.phone-btn { background: linear-gradient(135deg,#f5a623,#e67e22); color: #fff; border-radius: 100px; padding: 8px 20px; font-size: 0.78rem; font-weight: 600; width: 100%; text-align: center; }
.features-list { display: grid; grid-template-columns: repeat(3,1fr); gap: var(--space-lg); margin-top: var(--space-2xl); }
@media (max-width: 900px) { .features-list { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 560px) { .features-list { grid-template-columns: 1fr; } }
.feat-card { display: flex; gap: var(--space-md); padding: var(--space-lg); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--gradient-card); transition: border-color var(--transition-base); }
.feat-card:hover { border-color: rgba(245,166,35,0.35); }
.feat-icon { font-size: 1.4rem; flex-shrink: 0; line-height: 1; margin-top: 2px; }
.feat-title { font-size: 0.95rem; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
.feat-desc { font-size: 0.83rem; color: var(--color-text-2); line-height: 1.7; }
.specs-section { background: var(--color-bg-2); border-top: 1px solid var(--color-border); }
.specs-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--color-border); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; margin-top: var(--space-2xl); }
@media (max-width: 900px) { .specs-grid { grid-template-columns: repeat(2,1fr); } }
@media (max-width: 480px) { .specs-grid { grid-template-columns: 1fr; } }
.spec-item { display: flex; flex-direction: column; gap: 6px; padding: var(--space-lg); background: var(--color-bg); }
.spec-key { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-3); }
.spec-val { font-size: 0.9rem; font-weight: 500; }
</style>
