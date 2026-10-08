<template>
  <div class="app-layout">
    <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-header">
        <div class="logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,22 2,22" fill="none" stroke="#4f8eff" stroke-width="2"/>
            <polygon points="14,8 22,22 6,22" fill="rgba(79,142,255,0.15)" stroke="#a259ff" stroke-width="1.5"/>
          </svg>
          <span v-if="!sidebarCollapsed" class="logo-text">ModelViewer</span>
        </div>
        <button class="btn btn-ghost collapse-btn" @click="sidebarCollapsed = !sidebarCollapsed">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path v-if="!sidebarCollapsed" d="M11 8L6 3v10l5-5z"/>
            <path v-else d="M5 8l5-5v10L5 8z"/>
          </svg>
        </button>
      </div>
      <div class="sidebar-content" v-show="!sidebarCollapsed">
        <div class="sidebar-section">
          <div class="section-label">上传模型</div>
          <UploadZone @model-loaded="handleModelLoaded" />
        </div>
        <div class="sidebar-section">
          <div class="section-label">示例模型</div>
          <ExampleLibrary @load-example="handleLoadExample" :active-example="activeExample" />
        </div>
        <transition name="fade">
          <div class="sidebar-section" v-if="modelInfo">
            <div class="section-label">模型信息</div>
            <ModelInfo :info="modelInfo" />
          </div>
        </transition>
        <div class="sidebar-section">
          <div class="section-label">场景设置</div>
          <SceneControls
            :show-grid="sceneOptions.showGrid"
            :show-axes="sceneOptions.showAxes"
            :bg-color="sceneOptions.bgColor"
            :wireframe="sceneOptions.wireframe"
            @update:show-grid="sceneOptions.showGrid = $event"
            @update:show-axes="sceneOptions.showAxes = $event"
            @update:bg-color="sceneOptions.bgColor = $event"
            @update:wireframe="sceneOptions.wireframe = $event"
          />
        </div>
      </div>
    </aside>

    <main class="viewport-area">
      <ViewerCanvas
        ref="viewerCanvas"
        :scene-options="sceneOptions"
        @model-info="modelInfo = $event"
        @loading="onLoading"
      />
      <div class="viewport-toolbar">
        <div class="toolbar-left">
          <transition name="fade">
            <div class="model-badge" v-if="modelInfo">
              <span class="tag" :style="{ background: formatColor(modelInfo.format), color: '#fff' }">
                {{ modelInfo.format }}
              </span>
              <span class="model-name">{{ modelInfo.name }}</span>
            </div>
          </transition>
        </div>
        <div class="toolbar-right">
          <button class="btn btn-ghost" @click="resetCamera" title="重置视角">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M7.5 1a6.5 6.5 0 100 13A6.5 6.5 0 007.5 1zm0 1.5a5 5 0 110 10 5 5 0 010-10zM7 4.5V8l2.5 1.5-.75 1.3L6 9V4.5H7z"/></svg>
            重置
          </button>
          <button class="btn btn-ghost" @click="fitCamera" title="适配视角">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor"><path d="M1 1h4v1.5H2.5V4H1V1zm8 0h4v3h-1.5V2.5H9V1zM1 10.5H2.5V13H5V14.5H1v-4zm10.5 2.5V10.5H13v4H9V13h2.5z"/></svg>
            适配
          </button>
          <button class="btn btn-ghost" @click="toggleFullscreen" title="全屏">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
              <path v-if="!isFullscreen" d="M1 1h4v1.5H2.5V4H1V1zm8 0h4v3h-1.5V2.5H9V1zM1 10.5H2.5V13H5V14.5H1v-4zm10.5 2.5V10.5H13v4H9V13h2.5z"/>
              <path v-else d="M4 1H1v3h1.5V2.5H4V1zm7 0v1.5h2.5V4H13V1h-2zM1 11v3h3v-1.5H2.5V11H1zm10.5 1.5V15H14v-3h-1.5v1.5h-1z"/>
            </svg>
          </button>
        </div>
      </div>
      <transition name="fade">
        <div class="empty-state" v-if="!modelInfo && !loading">
          <div class="empty-icon">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <polygon points="36,8 64,58 8,58" fill="none" stroke="#4f8eff" stroke-width="1.5" opacity="0.5"/>
              <polygon points="36,22 56,58 16,58" fill="rgba(79,142,255,0.07)" stroke="#a259ff" stroke-width="1.2" opacity="0.7"/>
              <circle cx="36" cy="36" r="34" stroke="#1f2330" stroke-width="1" fill="none"/>
            </svg>
          </div>
          <h2>拖拽 3D 模型至此处</h2>
          <p>支持 glTF &middot; GLB &middot; OBJ &middot; FBX &middot; STL &middot; DAE &middot; PLY</p>
          <p class="hint">或从左侧示例库快速预览</p>
        </div>
      </transition>
      <transition name="fade">
        <div class="loading-overlay" v-if="loading">
          <div class="loader">
            <div class="loader-ring"></div>
            <span>{{ loadingText }}</span>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ViewerCanvas from './components/ViewerCanvas.vue'
import UploadZone from './components/UploadZone.vue'
import ExampleLibrary from './components/ExampleLibrary.vue'
import ModelInfo from './components/ModelInfo.vue'
import SceneControls from './components/SceneControls.vue'

const viewerCanvas = ref(null)
const sidebarCollapsed = ref(false)
const modelInfo = ref(null)
const loading = ref(false)
const loadingText = ref('加载中...')
const isFullscreen = ref(false)
const activeExample = ref(null)

const sceneOptions = reactive({
  showGrid: true,
  showAxes: false,
  bgColor: '#0a0b0f',
  wireframe: false
})

function onLoading({ active, text }) {
  loading.value = active
  if (text) loadingText.value = text
}

async function handleModelLoaded({ file, url, name }) {
  loading.value = true
  loadingText.value = '解析模型...'
  activeExample.value = null
  modelInfo.value = null
  try {
    await viewerCanvas.value?.loadModel({ file, url, name })
  } finally {
    loading.value = false
  }
}

async function handleLoadExample(example) {
  loading.value = true
  loadingText.value = `加载 ${example.name}...`
  activeExample.value = example.id
  modelInfo.value = null
  try {
    await viewerCanvas.value?.loadExample(example)
  } finally {
    loading.value = false
  }
}

function resetCamera() { viewerCanvas.value?.resetCamera() }
function fitCamera() { viewerCanvas.value?.fitCamera() }

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

const FORMAT_COLORS = {
  GLB: '#4f8eff', GLTF: '#4f8eff', OBJ: '#a259ff',
  FBX: '#00d4b4', STL: '#f5a623', DAE: '#3dd68c',
  PLY: '#ff5f6d', '3DS': '#ff9f43'
}
function formatColor(fmt) {
  return FORMAT_COLORS[fmt?.toUpperCase()] || '#4a5268'
}
</script>

<style scoped>
.app-layout {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* SIDEBAR */
.sidebar {
  width: 280px;
  min-width: 280px;
  height: 100%;
  background: var(--bg-panel);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transition: width 0.25s ease, min-width 0.25s ease;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 10;
}
.sidebar.collapsed {
  width: 52px;
  min-width: 52px;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
  gap: 8px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
}
.logo-text {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  white-space: nowrap;
  background: linear-gradient(135deg, #4f8eff, #a259ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.collapse-btn {
  padding: 6px;
  flex-shrink: 0;
  color: var(--text-secondary);
}
.sidebar-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 0;
}
.sidebar-section {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
}
.sidebar-section:last-child { border-bottom: none; }
.section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 10px;
}

/* VIEWPORT */
.viewport-area {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: var(--bg-deep);
}
.viewport-toolbar {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  z-index: 5;
}
.toolbar-left, .toolbar-right {
  display: flex;
  align-items: center;
  gap: 6px;
  pointer-events: all;
}
.model-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(17,19,24,0.85);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 6px 12px;
}
.model-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.toolbar-right .btn {
  background: rgba(17,19,24,0.85);
  backdrop-filter: blur(8px);
}

/* EMPTY STATE */
.empty-state {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  pointer-events: none;
  z-index: 2;
}
.empty-icon {
  margin-bottom: 8px;
  animation: float 3s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.empty-state h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}
.empty-state p {
  font-size: 13px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}
.empty-state .hint {
  font-size: 12px;
  color: var(--text-muted);
  font-family: var(--font-main);
  margin-top: 4px;
}

/* LOADING */
.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10,11,15,0.75);
  backdrop-filter: blur(4px);
  z-index: 20;
}
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.loader-ring {
  width: 48px;
  height: 48px;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.loader span {
  font-size: 13px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}
</style>
