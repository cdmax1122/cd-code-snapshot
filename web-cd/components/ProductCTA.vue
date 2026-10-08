<template>
  <div class="cta-section section">
    <div class="container">
      <div class="cta-inner">
        <div class="cta-glow" aria-hidden="true" />
        <p class="section-label" style="text-align:center">GET STARTED</p>
        <h2 class="section-title" style="text-align:center;max-width:560px;margin:0 auto var(--space-md)">对这个产品感兴趣？</h2>
        <p class="section-desc" style="text-align:center;margin:0 auto var(--space-xl)">联系我们，获取专属演示或定制方案，免费咨询。</p>
        <div class="cta-actions">
          <NuxtLink to="/contact" class="btn btn-primary">免费咨询</NuxtLink>
          <NuxtLink to="/" class="btn btn-outline">查看其他产品</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-section {
  background: var(--color-bg-2);
  border-top: 1px solid var(--color-border);
}
.cta-inner {
  position: relative;
  text-align: center;
}
.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 200px;
  background: radial-gradient(ellipse, rgba(0,200,255,0.07) 0%, transparent 70%);
  pointer-events: none;
}
.cta-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}
</style>
