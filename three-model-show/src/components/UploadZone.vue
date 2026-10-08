<template>
  <div
    class="upload-zone"
    :class="{ dragging: isDragging }"
    @dragover.prevent="isDragging = true"
    @dragleave="isDragging = false"
    @drop.prevent="onDrop"
    @click="triggerFile"
  >
    <input
      ref="fileInput"
      type="file"
      style="display:none"
      :accept="acceptedTypes"
      @change="onFileChange"
    />
    <div class="upload-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="17 8 12 3 7 8"/>
        <line x1="12" y1="3" x2="12" y2="15"/>
      </svg>
    </div>
    <div class="upload-text">
      <span class="upload-main">{{ isDragging ? '释放以加载' : '点击或拖拽上传' }}</span>
      <span class="upload-sub">GLB · GLTF · OBJ · FBX · STL · DAE · PLY</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['model-loaded'])
const fileInput = ref(null)
const isDragging = ref(false)

const acceptedTypes = '.glb,.gltf,.obj,.fbx,.stl,.dae,.ply,.3ds'

function triggerFile() {
  fileInput.value?.click()
}

function onFileChange(e) {
  const file = e.target.files?.[0]
  if (file) processFile(file)
  e.target.value = ''
}

function onDrop(e) {
  isDragging.value = false
  const file = e.dataTransfer.files?.[0]
  if (file) processFile(file)
}

function processFile(file) {
  const url = URL.createObjectURL(file)
  emit('model-loaded', { file, url, name: file.name })
}
</script>

<style scoped>
.upload-zone {
  border: 1.5px dashed var(--border-bright);
  border-radius: var(--radius-md);
  padding: 16px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all var(--transition);
  background: var(--bg-card);
  user-select: none;
}
.upload-zone:hover {
  border-color: var(--accent);
  background: var(--accent-glow);
}
.upload-zone.dragging {
  border-color: var(--accent);
  background: var(--accent-glow);
  box-shadow: 0 0 0 3px rgba(79,142,255,0.15);
}
.upload-icon {
  color: var(--accent);
  flex-shrink: 0;
  opacity: 0.8;
}
.upload-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}
.upload-main {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}
.upload-sub {
  font-size: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.03em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
