<script setup>
import { computed } from 'vue'
import { formatEnergy, formatPercent, formatPower } from '../utils/formatters'

const props = defineProps({
  device: {
    type: Object,
    default: null,
  },
  position: {
    type: Object,
    required: true,
  },
  visible: {
    type: Boolean,
    default: false,
  },
})

const cardStyle = computed(() => ({
  transform: `translate(${props.position.x}px, ${props.position.y}px)`,
  opacity: props.visible && props.device ? 1 : 0,
  pointerEvents: props.visible && props.device ? 'auto' : 'none',
}))
</script>

<template>
  <div class="floating-card" :style="cardStyle">
    <template v-if="device">
      <div class="floating-card__eyebrow">站点详情</div>
      <h3>{{ device.name }}</h3>
      <p>{{ device.city }} · {{ device.status }}</p>
      <div class="floating-card__grid">
        <div>
          <span>实时功率</span>
          <strong>{{ formatPower(device.power) }}</strong>
        </div>
        <div>
          <span>SOC</span>
          <strong>{{ formatPercent(device.soc) }}</strong>
        </div>
        <div>
          <span>总容量</span>
          <strong>{{ formatEnergy(device.capacity) }}</strong>
        </div>
        <div>
          <span>可调容量</span>
          <strong>{{ formatEnergy(Math.round(device.capacity * (device.soc / 100))) }}</strong>
        </div>
      </div>
    </template>
  </div>
</template>
