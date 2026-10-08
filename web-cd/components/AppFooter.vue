<template>
  <footer class="footer">
    <div class="glow-line" />
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-mark">CD</span><span class="logo-dot">.</span><span class="logo-text">Tech</span>
          </div>
          <p class="footer-tagline">工业可视化 &amp; 智能应用<br>一人公司，专注极致产品</p>
          <div class="footer-social">
            <a href="mailto:contact@cd.tech" class="social-link" aria-label="邮箱">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div class="footer-col">
          <h3 class="footer-col-title">产品</h3>
          <ul>
            <li><NuxtLink to="/products/topology" class="footer-link">工业拓扑图</NuxtLink></li>
            <li><NuxtLink to="/products/3d-model" class="footer-link">3D模型展示</NuxtLink></li>
            <li><NuxtLink to="/products/energy-screen" class="footer-link">储能大屏</NuxtLink></li>
            <li><NuxtLink to="/products/english-app" class="footer-link">英语口语</NuxtLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div class="footer-col">
          <h3 class="footer-col-title">公司</h3>
          <ul>
            <li><NuxtLink to="/about" class="footer-link">关于我们</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">联系我们</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h3 class="footer-col-title">联系</h3>
          <ul>
            <li class="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
              <a href="mailto:contact@cd.tech" class="footer-link">contact@cd.tech</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} CD.Tech. All rights reserved.</p>
        <p class="footer-tech">Built with Nuxt 3 · Vue SSR</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--color-bg-2);
  padding: var(--space-2xl) 0 var(--space-lg);
  margin-top: auto;
}

.glow-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-2xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
  }
  .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: var(--space-md);
}

.logo-mark {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--color-accent);
}
.logo-dot {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 900;
  color: var(--color-amber);
}
.logo-text {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text);
}

.footer-tagline {
  font-size: 0.85rem;
  color: var(--color-text-3);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.footer-social {
  display: flex;
  gap: var(--space-sm);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-3);
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--color-accent);
  border-color: var(--color-border-hover);
  background: var(--color-accent-dim);
}

.footer-col-title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-3);
  margin-bottom: var(--space-md);
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-link {
  font-size: 0.88rem;
  color: var(--color-text-2);
  transition: color var(--transition-fast);
}

.footer-link:hover { color: var(--color-accent); }

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-3);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  font-size: 0.8rem;
  color: var(--color-text-3);
}

@media (max-width: 640px) {
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-sm);
    text-align: center;
  }
}

.footer-tech {
  font-family: var(--font-mono);
  font-size: 0.75rem;
}
</style>
