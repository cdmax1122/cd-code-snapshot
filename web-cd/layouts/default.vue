<template>
  <div class="app-wrapper">
    <div class="grid-bg" aria-hidden="true"></div>
    <AppNav />
    <main class="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  isolation: isolate;
}

.main-content {
  flex: 1;
  min-height: calc(100vh - var(--nav-height));
  padding-top: var(--nav-height);
}
</style>
