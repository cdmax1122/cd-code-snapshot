<template>
  <header class="nav-wrapper" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <nav class="nav-inner container" role="navigation" aria-label="主导航">
      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo" aria-label="CD.Tech 首页">
        <span class="logo-mark" aria-hidden="true">CD</span>
        <span class="logo-dot">.</span>
        <span class="logo-text">Tech</span>
      </NuxtLink>

      <!-- Desktop nav links -->
      <ul class="nav-links" role="list">
        <li>
          <NuxtLink to="/" class="nav-link" exact-active-class="active">首页</NuxtLink>
        </li>
        <li
          ref="productsMenuRef"
          class="nav-item-dropdown"
          @mouseenter="productsOpen = true"
          @mouseleave="productsOpen = false"
        >
          <NuxtLink to="/products" class="nav-link" active-class="active">解决方案</NuxtLink>
          <button
            class="nav-link nav-dropdown-trigger"
            type="button"
            aria-label="展开解决方案菜单"
            :aria-expanded="productsOpen"
            @click="toggleProductsMenu"
          >
            <span class="chevron" :class="{ open: productsOpen }">›</span>
          </button>
          <div class="nav-dropdown" :class="{ open: productsOpen }" role="menu">
            <NuxtLink to="/products/topology" class="dropdown-item" role="menuitem" @click="productsOpen = false">
              <span class="di-icon">⬡</span>
              <span>
                <strong>工业拓扑图方案</strong>
                <small>工业级网络拓扑可视化与监测</small>
              </span>
            </NuxtLink>
            <NuxtLink to="/products/3d-model" class="dropdown-item" role="menuitem" @click="productsOpen = false">
              <span class="di-icon">◈</span>
              <span>
                <strong>3D模型展示方案</strong>
                <small>WebGL 三维展示与交互体验</small>
              </span>
            </NuxtLink>
            <NuxtLink to="/products/energy-screen" class="dropdown-item" role="menuitem" @click="productsOpen = false">
              <span class="di-icon">◉</span>
              <span>
                <strong>储能大屏方案</strong>
                <small>能源监控可视化与告警联动</small>
              </span>
            </NuxtLink>
            <NuxtLink to="/products/english-app" class="dropdown-item" role="menuitem" @click="productsOpen = false">
              <span class="di-icon">◎</span>
              <span>
                <strong>英语口语方案</strong>
                <small>AI 驱动练习与学习产品</small>
              </span>
            </NuxtLink>
          </div>
        </li>
        <li>
          <NuxtLink to="/about" class="nav-link" active-class="active">关于我们</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link" active-class="active">联系我们</NuxtLink>
        </li>
      </ul>

      <NuxtLink to="/contact" class="btn btn-primary nav-cta" style="padding: 10px 20px; font-size: 0.85rem;">获取方案</NuxtLink>

      <button
        class="nav-hamburger"
        :aria-expanded="menuOpen"
        aria-label="菜单"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
    </nav>

    <div class="mobile-menu" :class="{ open: menuOpen }" role="dialog" aria-modal="true" aria-label="移动菜单">
      <ul role="list">
        <li><NuxtLink to="/" class="mobile-link" @click="menuOpen = false">首页</NuxtLink></li>
        <li>
          <NuxtLink to="/products" class="mobile-link" @click="menuOpen = false; mobileProductsOpen = false">解决方案总览</NuxtLink>
          <button class="mobile-link mobile-section-toggle" type="button" @click="mobileProductsOpen = !mobileProductsOpen">
            解决方案
            <span class="chevron" :class="{ open: mobileProductsOpen }">›</span>
          </button>
          <ul v-if="mobileProductsOpen" class="mobile-submenu" role="list">
            <li><NuxtLink to="/products" class="mobile-sub-link mobile-sub-link-overview" @click="menuOpen = false; mobileProductsOpen = false">全部解决方案</NuxtLink></li>
            <li><NuxtLink to="/products/topology" class="mobile-sub-link" @click="menuOpen = false">工业拓扑图方案</NuxtLink></li>
            <li><NuxtLink to="/products/3d-model" class="mobile-sub-link" @click="menuOpen = false">3D模型展示方案</NuxtLink></li>
            <li><NuxtLink to="/products/energy-screen" class="mobile-sub-link" @click="menuOpen = false">储能大屏方案</NuxtLink></li>
            <li><NuxtLink to="/products/english-app" class="mobile-sub-link" @click="menuOpen = false">英语口语方案</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/about" class="mobile-link" @click="menuOpen = false">关于我们</NuxtLink></li>
        <li><NuxtLink to="/contact" class="mobile-link" @click="menuOpen = false">联系我们</NuxtLink></li>
      </ul>
      <NuxtLink to="/contact" class="btn btn-primary" style="margin: 24px 20px 0;" @click="menuOpen = false">获取方案</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const productsOpen = ref(false)
const mobileProductsOpen = ref(false)
const productsMenuRef = ref<HTMLElement | null>(null)

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

function toggleProductsMenu() {
  productsOpen.value = !productsOpen.value
}

function handleDocumentClick(event: MouseEvent) {
  const target = event.target as Node | null

  if (productsMenuRef.value && target && !productsMenuRef.value.contains(target)) {
    productsOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<style scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: background var(--transition-base), box-shadow var(--transition-base);
}

.nav-wrapper.scrolled {
  background: rgba(5, 10, 21, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--shadow-nav);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-xl);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
  text-decoration: none;
}

.logo-mark {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-accent);
  letter-spacing: -0.05em;
}

.logo-dot {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--color-amber);
}

.logo-text {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-left: auto;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 14px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  color: var(--color-text-2);
  transition: color var(--transition-fast), background var(--transition-fast);
  background: none;
  border: none;
  font-family: var(--font-body);
  cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
  background: rgba(255,255,255,0.05);
}

.nav-link.active {
  color: var(--color-accent);
}

.nav-item-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-dropdown-trigger {
  padding-left: 8px;
  padding-right: 10px;
}

.chevron {
  font-style: normal;
  display: inline-block;
  transition: transform var(--transition-fast);
  transform: rotate(90deg);
  font-size: 1rem;
}

.chevron.open {
  transform: rotate(-90deg);
}

.nav-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  width: 300px;
  background: rgba(10, 20, 40, 0.97);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(20px);
  padding: var(--space-sm);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-base), transform var(--transition-base);
  box-shadow: var(--shadow-card);
}

.nav-dropdown.open {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: 12px var(--space-md);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast);
}

.dropdown-item:hover {
  background: var(--color-accent-dim);
}

.di-icon {
  font-size: 1.2rem;
  color: var(--color-accent);
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}

.dropdown-item strong {
  display: block;
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: 500;
}

.dropdown-item small {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-3);
  margin-top: 2px;
}

.nav-cta {
  flex-shrink: 0;
  margin-left: var(--space-sm);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-base);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(5, 10, 21, 0.98);
  backdrop-filter: blur(20px);
  padding: var(--space-lg) 0;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform var(--transition-slow);
  z-index: 999;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  font-size: 1.1rem;
  color: var(--color-text-2);
  background: none;
  border: none;
  font-family: var(--font-body);
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}

.mobile-link:hover {
  color: var(--color-text);
}

.mobile-section-toggle {
  width: 100%;
}

.mobile-submenu {
  background: var(--color-bg-2);
}

.mobile-sub-link {
  display: block;
  padding: 12px 20px 12px 36px;
  font-size: 0.95rem;
  color: var(--color-text-3);
  border-bottom: 1px solid var(--color-border);
  transition: color var(--transition-fast);
}

.mobile-sub-link-overview {
  color: var(--color-accent);
}

.mobile-sub-link:hover {
  color: var(--color-accent);
}

@media (max-width: 900px) {
  .nav-links,
  .nav-cta {
    display: none;
  }

  .nav-hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .nav-inner {
    gap: 0;
  }
}
</style>
