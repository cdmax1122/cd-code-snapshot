<template>
  <canvas ref="canvasRef" class="viewer-canvas" />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useThreeScene } from '../composables/useThreeScene.js'
import { loadModelFromFile } from '../composables/useModelLoader.js'
import { buildExampleModel, getExampleStats } from '../composables/useExampleModels.js'

const props = defineProps({
  sceneOptions: { type: Object, required: true }
})
const emit = defineEmits(['model-info', 'loading'])

const canvasRef = ref(null)
let scene3d = null
let resizeObserver = null

onMounted(() => {
  scene3d = useThreeScene(canvasRef.value)
  scene3d.init()

  // Apply initial options
  scene3d.setBackground(props.sceneOptions.bgColor)
  scene3d.setGrid(props.sceneOptions.showGrid)
  scene3d.setAxes(props.sceneOptions.showAxes)

  // Resize observer
  resizeObserver = new ResizeObserver(entries => {
    const e = entries[0]
    if (e) {
      const { width, height } = e.contentRect
      scene3d.resize(width, height)
    }
  })
  const parent = canvasRef.value.parentElement
  if (parent) {
    resizeObserver.observe(parent)
    const { width, height } = parent.getBoundingClientRect()
    scene3d.resize(width, height)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  scene3d?.dispose()
})

// Watch scene options
watch(() => props.sceneOptions.bgColor, v => scene3d?.setBackground(v))
watch(() => props.sceneOptions.showGrid, v => scene3d?.setGrid(v))
watch(() => props.sceneOptions.showAxes, v => scene3d?.setAxes(v))
watch(() => props.sceneOptions.wireframe, v => scene3d?.setWireframe(v))

async function loadModel({ file, url, name }) {
  emit('loading', { active: true, text: '解析模型...' })
  try {
    const { object, info } = await loadModelFromFile(file)
    scene3d.addModel(object)
    if (props.sceneOptions.wireframe) scene3d.setWireframe(true)
    emit('model-info', info)
  } catch (err) {
    console.error('Model load error:', err)
    alert('加载模型失败: ' + (err.message || err))
  } finally {
    emit('loading', { active: false })
  }
}

async function loadExample(example) {
  emit('loading', { active: true, text: `生成 ${example.name}...` })
  try {
    await new Promise(r => setTimeout(r, 80))
    const object = buildExampleModel(example.id)
    scene3d.addModel(object)
    if (props.sceneOptions.wireframe) scene3d.setWireframe(true)
    const stats = getExampleStats(example.id)
    emit('model-info', {
      name: example.name,
      format: example.desc,
      size: '-',
      ...stats
    })
  } catch (err) {
    console.error('Example load error:', err)
    alert('加载示例失败: ' + (err.message || err))
  } finally {
    emit('loading', { active: false })
  }
}

function resetCamera() { scene3d?.resetCamera() }
function fitCamera() { scene3d?.fitToModel() }

defineExpose({ loadModel, loadExample, resetCamera, fitCamera })
</script>

<style scoped>
.viewer-canvas {
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
}
</style>
