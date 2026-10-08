<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="hero-orb" aria-hidden="true" />
      <div class="container">
        <p class="section-label">ABOUT CD.TECH</p>
        <h1 class="about-title">数字化方案<br><span class="about-accent">持续交付</span></h1>
        <p class="about-lead">CD.Tech 聚焦工业可视化与智能应用，为企业提供从方案设计到项目落地的数字化能力支持。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-grid">
          <div>
            <p class="section-label">STORY</p>
            <h2 class="section-title">我们的定位</h2>
            <p class="story-text">CD.Tech 长期关注工业可视化、业务展示与智能应用场景，致力于把复杂系统能力转化为清晰、可用、易落地的数字化方案。</p>
            <p class="story-text">我们坚持以业务目标为导向，围绕展示效果、交互体验、系统性能与部署效率，持续打磨解决方案能力。</p>
            <p class="story-text">无论是独立交付单个项目，还是配合企业团队推进长期建设，我们都希望提供高效、稳定、可信赖的合作体验。</p>
          </div>
          <div>
            <p class="section-label">VALUES</p>
            <h2 class="section-title">合作原则</h2>
            <div class="values-list">
              <div class="value-item" v-for="v in values" :key="v.title">
                <span class="value-icon">{{ v.icon }}</span>
                <div>
                  <h3 class="value-title">{{ v.title }}</h3>
                  <p class="value-desc">{{ v.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section skills-section">
      <div class="container">
        <p class="section-label">CAPABILITIES</p>
        <h2 class="section-title">技术能力</h2>
        <div class="skills-grid">
          <div class="skill-group" v-for="g in skillGroups" :key="g.name">
            <h3 class="skill-group-name">{{ g.name }}</h3>
            <div class="skill-tags">
              <span class="skill-tag" v-for="s in g.skills" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-glow" aria-hidden="true" />
          <p class="section-label" style="text-align:center">CONTACT</p>
          <h2 class="section-title" style="text-align:center;max-width:560px;margin:0 auto var(--space-md)">想了解更多？</h2>
          <p class="section-desc" style="text-align:center;margin:0 auto var(--space-xl)">欢迎随时联系，探讨合作方式或了解适合您业务的解决方案。</p>
          <div class="cta-actions">
            <NuxtLink to="/contact" class="btn btn-primary">立即联系</NuxtLink>
            <NuxtLink to="/products" class="btn btn-outline">查看解决方案</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '关于我们 - CD.Tech',
  'CD.Tech 聚焦工业可视化与智能应用，面向企业提供从方案设计到交付落地的数字化解决方案。',
)

const values = [
  { icon: '🎯', title: '业务导向', desc: '围绕真实业务问题设计方案，兼顾展示价值、使用效率与后续扩展。' },
  { icon: '⚡', title: '高效交付', desc: '注重响应速度与交付节奏，让方案尽快进入验证、落地与迭代阶段。' },
  { icon: '🤝', title: '透明协作', desc: '保持清晰沟通与过程同步，让项目推进更加稳定、可预期。' },
  { icon: '🔄', title: '持续演进', desc: '以长期使用为前提持续优化功能、体验与技术架构。' },
]

const skillGroups = [
  { name: '前端', skills: ['Vue 3', 'Nuxt 3', 'React', 'TypeScript', 'Three.js', 'ECharts', 'Canvas'] },
  { name: '后端', skills: ['Node.js', 'Python', 'Go', 'WebSocket', 'REST API'] },
  { name: '移动端', skills: ['微信小程序', 'uni-app', 'React Native'] },
  { name: '工具链', skills: ['Vite', 'Docker', 'Nginx', 'Git', 'Linux'] },
]
</script>

<style scoped>
.about-page { overflow: hidden; }
.about-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}
.hero-orb {
  position: absolute; width: 600px; height: 600px;
  top: -200px; right: -100px;
  background: radial-gradient(circle, rgba(0,100,200,0.2) 0%, transparent 70%);
  border-radius: 50%; filter: blur(60px); pointer-events: none;
}
.about-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 5rem);
  font-weight: 900; line-height: 1.1; margin: var(--space-md) 0;
}
.about-accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.about-lead {
  font-size: 1.1rem; color: var(--color-text-2);
  line-height: 1.8; max-width: 600px;
}
.about-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
}
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; } }
.story-text {
  font-size: 0.95rem; color: var(--color-text-2);
  line-height: 1.9; margin-bottom: var(--space-md);
}
.values-list { display: flex; flex-direction: column; gap: var(--space-md); margin-top: var(--space-lg); }
.value-item {
  display: flex; gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  background: var(--gradient-card); transition: border-color var(--transition-base);
}
.value-item:hover { border-color: var(--color-border-hover); }
.value-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
.value-title { font-size: 0.95rem; font-weight: 600; color: var(--color-text); margin-bottom: 4px; }
.value-desc { font-size: 0.83rem; color: var(--color-text-2); line-height: 1.6; }
.skills-section { background: var(--color-bg-2); border-top: 1px solid var(--color-border); }
.skills-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg); margin-top: var(--space-2xl);
}
@media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr; } }
.skill-group {
  padding: var(--space-lg); border: 1px solid var(--color-border);
  border-radius: var(--radius-lg); background: var(--gradient-card);
}
.skill-group-name {
  font-family: var(--font-mono); font-size: 0.72rem;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--color-accent); margin-bottom: var(--space-md);
}
.skill-tags { display: flex; flex-wrap: wrap; gap: var(--space-sm); }
.skill-tag {
  font-size: 0.78rem; padding: 4px 10px;
  background: var(--color-surface-2); border: 1px solid var(--color-border);
  border-radius: var(--radius-sm); color: var(--color-text-2);
}
.cta-section { border-top: 1px solid var(--color-border); }
.cta-inner { position: relative; text-align: center; }
.cta-glow {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 500px; height: 200px;
  background: radial-gradient(ellipse, rgba(0,200,255,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.cta-actions { display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap; }
</style>
