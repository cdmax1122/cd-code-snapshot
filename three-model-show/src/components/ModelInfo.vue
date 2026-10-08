<template>
  <div class="model-info">
    <div class="info-row" v-for="item in rows" :key="item.label">
      <span class="info-label">{{ item.label }}</span>
      <span class="info-value" :style="item.style">{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  info: { type: Object, required: true }
})

function fmt(n) {
  if (n == null) return '-'
  return n.toLocaleString()
}

const rows = computed(() => [
  { label: '文件名', value: props.info.name || '-' },
  { label: '格式', value: props.info.format || '-', style: { color: 'var(--accent)', fontWeight: '600' } },
  { label: '顶点数', value: fmt(props.info.vertices) },
  { label: '面数', value: fmt(props.info.faces) },
  { label: '三角形', value: fmt(props.info.triangles) },
  { label: '子网格', value: fmt(props.info.meshes) },
  { label: '材质', value: fmt(props.info.materials) },
  { label: '文件大小', value: props.info.size || '-' },
])
</script>

<style scoped>
.model-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.info-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px solid var(--border);
}
.info-row:last-child { border-bottom: none; }
.info-label {
  font-size: 11px;
  color: var(--text-muted);
  flex-shrink: 0;
}
.info-value {
  font-size: 12px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  text-align: right;
  word-break: break-all;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
