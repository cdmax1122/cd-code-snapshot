<template>
  <div class="example-library">
    <div
      v-for="ex in examples"
      :key="ex.id"
      class="example-item"
      :class="{ active: activeExample === ex.id }"
      @click="$emit('load-example', ex)"
    >
      <div class="example-icon" :style="{ background: ex.color + '22', color: ex.color }">
        <svg v-if="ex.icon === 'box'" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <path d="M9 1.5L16.5 5.25v7.5L9 16.5 1.5 12.75v-7.5L9 1.5zm0 1.73L3.27 5.87 9 8.77l5.73-2.9L9 3.23zm-6.75 3.4v5.63L8.25 15V9.37L2.25 6.63zm13.5 0L9.75 9.37V15l6-2.75V6.63z"/>
        </svg>
        <svg v-else-if="ex.icon === 'sphere'" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <circle cx="9" cy="9" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <ellipse cx="9" cy="9" rx="3.5" ry="7" fill="none" stroke="currentColor" stroke-width="1"/>
          <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" stroke-width="1"/>
        </svg>
        <svg v-else-if="ex.icon === 'torus'" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <ellipse cx="9" cy="9" rx="7" ry="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <ellipse cx="9" cy="9" rx="3.5" ry="1.5" fill="none" stroke="currentColor" stroke-width="1"/>
        </svg>
        <svg v-else-if="ex.icon === 'diamond'" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <polygon points="9,1 17,7 9,17 1,7" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <line x1="1" y1="7" x2="17" y2="7" stroke="currentColor" stroke-width="1"/>
        </svg>
        <svg v-else-if="ex.icon === 'knot'" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 3c3 0 5 2 5 4s-3 4-6 3-4-3-2-5 5-2 6 1-1 5-4 5-5-2-4-4"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
          <polygon points="9,2 16,14 2,14" fill="none" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </div>
      <div class="example-info">
        <span class="example-name">{{ ex.name }}</span>
        <span class="example-desc">{{ ex.desc }}</span>
      </div>
      <div class="example-arrow">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M4.5 2.5l4 3.5-4 3.5"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  activeExample: { type: String, default: null }
})
defineEmits(['load-example'])

const examples = [
  { id: 'box', name: '立方体', desc: 'BoxGeometry', icon: 'box', color: '#4f8eff' },
  { id: 'sphere', name: '球体', desc: 'SphereGeometry', icon: 'sphere', color: '#a259ff' },
  { id: 'torus', name: '圆环', desc: 'TorusGeometry', icon: 'torus', color: '#00d4b4' },
  { id: 'knot', name: '结形体', desc: 'TorusKnotGeometry', icon: 'knot', color: '#f5a623' },
  { id: 'diamond', name: '八面体', desc: 'OctahedronGeometry', icon: 'diamond', color: '#ff5f6d' },
  { id: 'cone', name: '圆锥体', desc: 'ConeGeometry', icon: 'cone', color: '#3dd68c' },
]
</script>

<style scoped>
.example-library {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.example-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition);
  border: 1px solid transparent;
}
.example-item:hover {
  background: var(--bg-hover);
  border-color: var(--border);
}
.example-item.active {
  background: var(--accent-glow);
  border-color: var(--accent);
}
.example-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.example-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.example-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.example-desc {
  font-size: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.example-arrow {
  color: var(--text-muted);
  flex-shrink: 0;
  opacity: 0;
  transition: opacity var(--transition);
}
.example-item:hover .example-arrow,
.example-item.active .example-arrow {
  opacity: 1;
  color: var(--accent);
}
</style>
