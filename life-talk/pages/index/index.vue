<template>
  <view class="page-wrap" :style="pageStyle">
    <view class="page">
      <view class="hero">
        <view class="hero__badge">生活英语 · 场景练习</view>
        <text class="hero__title">Life Talk</text>
        <text class="hero__subtitle">
          从通勤、点单到家庭聚餐，随时打开一个生活场景，边看边听边开口。
        </text>
      </view>

      <view class="section-head">
        <text class="section-head__title">场景列表</text>
        <text class="section-head__meta">{{ scenes.length }} 个场景</text>
      </view>

      <view class="scene-list">
        <view
          v-for="scene in scenes"
          :key="scene.id"
          class="scene-card"
          hover-class="scene-card--hover"
          @click="goDetail(scene.id)"
        >
          <view class="scene-card__icon">{{ scene.icon }}</view>
          <view class="scene-card__body">
            <text class="scene-card__name">{{ scene.name }}</text>
            <text class="scene-card__desc">{{ scene.description }}</text>
          </view>
          <text class="scene-card__arrow">›</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import scenes from '@/data/scenes.json'
import { getSafeTopInset } from '@/navigation'

export default {
  data() {
    return {
      scenes,
      topInset: 0
    }
  },
  computed: {
    pageStyle() {
      return `padding-top:${this.topInset}px;`
    }
  },
  onLoad() {
    this.topInset = getSafeTopInset()
  },
  methods: {
    goDetail(id) {
      uni.navigateTo({
        url: `/pages/scene/detail?id=${id}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrap {
  min-height: 100vh;
  box-sizing: border-box;
  background:
    radial-gradient(circle at top right, rgba(211, 107, 44, 0.18), transparent 35%),
    linear-gradient(180deg, #fbf6ef 0%, #f6efe6 100%);
}

.page {
  min-height: 100vh;
  padding-right: 28rpx;
  padding-bottom: 48rpx;
  padding-left: 28rpx;
  box-sizing: border-box;
}

.hero {
  padding: 40rpx 32rpx;
  border-radius: 32rpx;
  background: linear-gradient(145deg, #8f3f16, #d36b2c 60%, #f0b36e 100%);
  box-shadow: 0 24rpx 48rpx rgba(143, 63, 22, 0.22);
  color: #fff7ef;
}

.hero__badge {
  display: inline-flex;
  padding: 10rpx 18rpx;
  border-radius: 999rpx;
  background: rgba(255, 247, 239, 0.16);
  font-size: 22rpx;
  letter-spacing: 2rpx;
}

.hero__title {
  display: block;
  margin-top: 24rpx;
  font-size: 56rpx;
  font-weight: 700;
  letter-spacing: 1rpx;
}

.hero__subtitle {
  display: block;
  margin-top: 18rpx;
  font-size: 28rpx;
  line-height: 1.7;
  color: rgba(255, 247, 239, 0.9);
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 34rpx 4rpx 22rpx;
}

.section-head__title {
  font-size: 34rpx;
  font-weight: 700;
  color: var(--lt-primary-deep);
}

.section-head__meta {
  font-size: 24rpx;
  color: var(--lt-text-secondary);
}

.scene-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.scene-card {
  display: flex;
  align-items: center;
  gap: 22rpx;
  padding: 28rpx 24rpx;
  border: 2rpx solid var(--lt-border);
  border-radius: var(--lt-radius-lg);
  background: rgba(255, 250, 243, 0.92);
  box-shadow: var(--lt-shadow);
  transition: transform 0.2s ease;
}

.scene-card--hover {
  transform: translateY(-4rpx);
}

.scene-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88rpx;
  height: 88rpx;
  border-radius: 24rpx;
  background: linear-gradient(145deg, #fff3e3, #f0dbc5);
  font-size: 44rpx;
}

.scene-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.scene-card__name {
  font-size: 32rpx;
  font-weight: 700;
  color: var(--lt-text-primary);
}

.scene-card__desc {
  font-size: 25rpx;
  line-height: 1.5;
  color: var(--lt-text-secondary);
}

.scene-card__arrow {
  font-size: 44rpx;
  color: var(--lt-primary);
}
</style>
