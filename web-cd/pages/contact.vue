<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="hero-orb" aria-hidden="true" />
      <div class="container">
        <p class="section-label">CONTACT US</p>
        <h1 class="contact-title">联系我们</h1>
        <p class="contact-lead">无论是解决方案咨询、定制开发还是合作沟通，我们都期待与您深入交流。</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="section-label">INFO</p>
            <h2 class="section-title">联系方式</h2>
            <div class="info-cards">
              <div class="info-card" v-for="c in contacts" :key="c.label">
                <span class="info-icon">{{ c.icon }}</span>
                <div>
                  <h3 class="info-label">{{ c.label }}</h3>
                  <a :href="c.href" class="info-value">{{ c.value }}</a>
                </div>
              </div>
            </div>
            <div class="response-note">
              <span class="rn-dot" />
              <p>通常在 1 个工作日内回复</p>
            </div>
          </div>
          <div class="contact-form-wrap">
            <p class="section-label">MESSAGE</p>
            <h2 class="section-title">发送消息</h2>
            <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="cf-name">姓名</label>
                  <input id="cf-name" v-model="form.name" type="text" placeholder="您的姓名" required />
                </div>
                <div class="form-group">
                  <label for="cf-email">邮箱</label>
                  <input id="cf-email" v-model="form.email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div class="form-group">
                <label for="cf-subject">主题</label>
                <select id="cf-subject" v-model="form.subject">
                  <option value="">请选择主题</option>
                  <option value="topology">工业拓扑图方案咨询</option>
                  <option value="3d">3D模型展示方案咨询</option>
                  <option value="energy">储能大屏方案咨询</option>
                  <option value="english">英语口语方案咨询</option>
                  <option value="custom">定制开发</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div class="form-group">
                <label for="cf-message">消息</label>
                <textarea id="cf-message" v-model="form.message" rows="5" placeholder="请描述您的需求..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary submit-btn" :disabled="submitted">
                {{ submitted ? '✓ 已发送！' : '发送消息' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
usePageSeo(
  '联系我们 - CD.Tech',
  '联系 CD.Tech，咨询工业可视化、3D展示、储能大屏与英语口语 AI 等数字化解决方案。',
)

const form = ref({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 4000)
}

const contacts = [
  { icon: '✉️', label: '邮箱', value: 'contact@cd.tech', href: 'mailto:contact@cd.tech' },
  { icon: '🌐', label: '网站', value: 'www.cd.tech', href: 'https://www.cd.tech' },
  { icon: '💬', label: '微信', value: '扫码添加微信', href: '#' },
]
</script>

<style scoped>
.contact-page { overflow: hidden; }
.contact-hero {
  position: relative;
  padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}
.hero-orb {
  position: absolute; width: 500px; height: 500px;
  top: -150px; left: -100px;
  background: radial-gradient(circle, rgba(0,200,255,0.15) 0%, transparent 70%);
  border-radius: 50%; filter: blur(60px); pointer-events: none;
}
.contact-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 900; line-height: 1.1; margin: var(--space-md) 0;
  background: var(--gradient-accent);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.contact-lead { font-size: 1.1rem; color: var(--color-text-2); line-height: 1.8; max-width: 560px; }
.contact-grid {
  display: grid; grid-template-columns: 1fr 1.4fr;
  gap: var(--space-2xl); align-items: start;
}
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
.info-cards { display: flex; flex-direction: column; gap: var(--space-md); margin-top: var(--space-lg); }
.info-card {
  display: flex; gap: var(--space-md); padding: var(--space-lg);
  border: 1px solid var(--color-border); border-radius: var(--radius-lg);
  background: var(--gradient-card); transition: border-color var(--transition-base);
}
.info-card:hover { border-color: var(--color-border-hover); }
.info-icon { font-size: 1.4rem; flex-shrink: 0; }
.info-label { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-3); margin-bottom: 4px; }
.info-value { font-size: 0.9rem; color: var(--color-accent); transition: opacity var(--transition-fast); }
.info-value:hover { opacity: 0.8; }
.response-note {
  display: flex; align-items: center; gap: var(--space-sm);
  margin-top: var(--space-lg); font-size: 0.82rem; color: var(--color-text-3);
}
.rn-dot {
  display: block; width: 8px; height: 8px; border-radius: 50%;
  background: #00e5a0; flex-shrink: 0;
  box-shadow: 0 0 8px rgba(0,229,160,0.6);
  animation: pulse-glow 2s ease-in-out infinite;
}
.contact-form { display: flex; flex-direction: column; gap: var(--space-md); margin-top: var(--space-lg); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
@media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-3); }
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 12px var(--space-md);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none; width: 100%;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(0,200,255,0.1);
}
.form-group select option { background: var(--color-bg-2); }
.form-group textarea { resize: vertical; min-height: 120px; }
.submit-btn { align-self: flex-start; min-width: 140px; justify-content: center; }
.submit-btn:disabled { opacity: 0.7; cursor: default; }
</style>
