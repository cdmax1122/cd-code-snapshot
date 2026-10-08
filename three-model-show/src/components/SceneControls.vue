<template>
  <div class="scene-controls">
    <label class="toggle-row">
      <span class="toggle-label">网格地面</span>
      <button class="toggle-btn" :class="{ active: showGrid }" @click="$emit('update:show-grid', !showGrid)">
        <span class="toggle-thumb"/>
      </button>
    </label>
    <label class="toggle-row">
      <span class="toggle-label">坐标轴</span>
      <button class="toggle-btn" :class="{ active: showAxes }" @click="$emit('update:show-axes', !showAxes)">
        <span class="toggle-thumb"/>
      </button>
    </label>
    <label class="toggle-row">
      <span class="toggle-label">线框模式</span>
      <button class="toggle-btn" :class="{ active: wireframe }" @click="$emit('update:wireframe', !wireframe)">
        <span class="toggle-thumb"/>
      </button>
    </label>
    <div class="color-row">
      <span class="toggle-label">背景颜色</span>
      <div class="color-options">
        <button
          v-for="c in bgColors"
          :key="c.value"
          class="color-swatch"
          :class="{ active: bgColor === c.value }"
          :style="{ background: c.value }"
          :title="c.label"
          @click="$emit('update:bg-color', c.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  showGrid: Boolean,
  showAxes: Boolean,
  bgColor: String,
  wireframe: Boolean
})
defineEmits(['update:show-grid', 'update:show-axes', 'update:bg-color', 'update:wireframe'])

const bgColors = [
  { value: '#0a0b0f', label: '深黑' },
  { value: '#111827', label: '夜蓝' },
  { value: '#1a0a2e', label: '深紫' },
  { value: '#0d1f12', label: '深绿' },
  { value: '#ffffff', label: '纯白' },
  { value: '#f0f0f0', label: '浅灰' },
]
</script>

<style scoped>
.scene-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.toggle-label {
  font-size: 12px;
  color: var(--text-secondary);
}
.toggle-btn {
  width: 34px;
  height: 18px;
  border-radius: 9px;
  background: var(--bg-hover);
  border: 1px solid var(--border-bright);
  position: relative;
  cursor: pointer;
  transition: all var(--transition);
  padding: 0;
  outline: none;
}
.toggle-btn.active {
  background: var(--accent);
  border-color: var(--accent);
}
.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition: transform var(--transition);
}
.toggle-btn.active .toggle-thumb {
  transform: translateX(16px);
}
.color-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.color-options {
  display: flex;
  gap: 6px;
}
.color-swatch {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition);
  outline: none;
}
.color-swatch:hover {
  transform: scale(1.2);
}
.color-swatch.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(79,142,255,0.3);
}
</style>
