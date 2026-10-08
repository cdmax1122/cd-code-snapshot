<template>
  <view>
    <view v-if="scene" class="page-wrap" :style="pageStyle">
      <view class="page">
        <view class="topbar" :style="topbarStyle">
          <view class="topbar__back" hover-class="topbar__back--hover" @click="goBack">‹ 返回</view>
          <text class="topbar__title">{{ scene.name }}</text>
        </view>

        <view class="scene-banner">
          <text class="scene-banner__icon">{{ scene.icon }}</text>
          <view class="scene-banner__content">
            <text class="scene-banner__title">{{ scene.name }}</text>
            <text class="scene-banner__desc">{{ scene.description }}</text>
          </view>
        </view>

        <view class="panel">
          <view class="panel__head">
            <text class="panel__title">单词区</text>
            <text class="panel__tag">{{ scene.words.length }} 个词汇</text>
          </view>
          <view class="card-list">
            <view v-for="item in scene.words" :key="item.en" class="lang-card">
              <view class="lang-card__text">
                <text class="lang-card__en">{{ item.en }}</text>
                <text class="lang-card__zh">{{ item.zh }}</text>
              </view>
              <view class="speak-btn" hover-class="speak-btn--hover" @click="speak(item.en)">
                <text class="speak-btn__icon">🔊</text>
                <text class="speak-btn__text">发音</text>
              </view>
            </view>
          </view>
        </view>

        <view class="panel">
          <view class="panel__head">
            <text class="panel__title">短句区</text>
            <text class="panel__tag">{{ scene.phrases.length }} 句表达</text>
          </view>
          <view class="card-list">
            <view v-for="item in scene.phrases" :key="item.en" class="lang-card lang-card--phrase">
              <view class="lang-card__text">
                <text class="lang-card__en">{{ item.en }}</text>
                <text class="lang-card__zh">{{ item.zh }}</text>
              </view>
              <view class="speak-btn" hover-class="speak-btn--hover" @click="speak(item.en)">
                <text class="speak-btn__icon">🔊</text>
                <text class="speak-btn__text">朗读</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-else class="empty">
      <text class="empty__title">未找到该场景</text>
      <view class="empty__btn" hover-class="empty__btn--hover" @click="goBack">返回首页</view>
    </view>
  </view>
</template>

<script>
import scenes from '@/data/scenes.json'
import { getCustomNavMetrics } from '@/navigation'

export default {
  data() {
    return {
      scene: null,
      speechTask: null,
      topInset: 0,
      navHeight: 44
    }
  },
  computed: {
    pageStyle() {
      return `padding-top:${this.topInset}px;`
    },
    topbarStyle() {
      return `min-height:${this.navHeight}px;`
    }
  },
  onLoad(options) {
    const id = options.id
    this.scene = scenes.find(item => item.id === id) || null

    const metrics = getCustomNavMetrics()
    this.topInset = metrics.topInset
    this.navHeight = metrics.navHeight
  },
  onUnload() {
    if (this.speechTask && this.speechTask.stop) {
      this.speechTask.stop()
    }
  },
  methods: {
    goBack() {
      const pages = typeof getCurrentPages === 'function' ? getCurrentPages() : []
      if (pages.length > 1) {
        uni.navigateBack()
        return
      }
      uni.reLaunch({
        url: '/pages/index/index'
      })
    },
    speak(text) {
      const manager = this.getSpeechManager()
      if (!manager) {
        uni.showToast({
          title: '当前平台暂不支持语音播放',
          icon: 'none'
        })
        return
      }

      if (manager.stop) {
        manager.stop()
      }

      if (manager.speak) {
        manager.speak({
          text,
          lang: 'en-US'
        })
      }
    },
    getSpeechManager() {
      // #ifdef MP-WEIXIN
      if (!this.speechTask) {
        this.speechTask = uni.createInnerAudioContext()
      }
      return {
        stop: () => {
          if (this.speechTask) {
            this.speechTask.stop()
          }
        },
        speak: ({ text }) => {
          const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&type=2`
          this.speechTask.src = audioUrl
          this.speechTask.play()
        }
      }
      // #endif

      // #ifdef APP-PLUS
      return {
        stop: () => {
          plus.speech.stopSpeak()
        },
        speak: ({ text }) => {
          plus.speech.speak(text, {
            engine: 'iFly',
            lang: 'en-us'
          })
        }
      }
      // #endif

      // #ifdef H5
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        return {
          stop: () => {
            window.speechSynthesis.cancel()
          },
          speak: ({ text, lang }) => {
            const utterance = new SpeechSynthesisUtterance(text)
            utterance.lang = lang
            window.speechSynthesis.speak(utterance)
          }
        }
      }
      // #endif

      return null
    }
  }
}
</script>

<style scoped lang="scss">
.page-wrap {
  min-height: 100vh;
  box-sizing: border-box;
  background:
    radial-gradient(circle at top left, rgba(47, 111, 98, 0.14), transparent 28%),
    linear-gradient(180deg, #f6efe6 0%, #f2e7d9 100%);
}

.page {
  min-height: 100vh;
  padding-right: 24rpx;
  padding-bottom: 40rpx;
  padding-left: 24rpx;
  box-sizing: border-box;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 20rpx;
  padding: 0 8rpx 28rpx;
}

.topbar__back {
  display: inline-flex;
  align-items: center;
  height: 100%;
  font-size: 28rpx;
  color: var(--lt-primary);
}

.topbar__back--hover {
  opacity: 0.85;
}

.topbar__title {
  font-size: 30rpx;
  font-weight: 700;
  color: var(--lt-text-primary);
}

.scene-banner {
  display: flex;
  align-items: center;
  gap: 22rpx;
  padding: 28rpx;
  border-radius: 30rpx;
  background: linear-gradient(140deg, #fff6ea, #f4e2cd);
  box-shadow: var(--lt-shadow);
}

.scene-banner__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94rpx;
  height: 94rpx;
  border-radius: 26rpx;
  background: rgba(211, 107, 44, 0.12);
  font-size: 48rpx;
}

.scene-banner__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.scene-banner__title {
  font-size: 40rpx;
  font-weight: 700;
  color: var(--lt-primary-deep);
}

.scene-banner__desc {
  font-size: 26rpx;
  line-height: 1.6;
  color: var(--lt-text-secondary);
}

.panel {
  margin-top: 24rpx;
  padding: 26rpx 22rpx;
  border-radius: 28rpx;
  background: rgba(255, 250, 243, 0.94);
  box-shadow: var(--lt-shadow);
}

.panel__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.panel__title {
  font-size: 32rpx;
  font-weight: 700;
  color: var(--lt-text-primary);
}

.panel__tag {
  padding: 8rpx 16rpx;
  border-radius: 999rpx;
  background: rgba(47, 111, 98, 0.12);
  font-size: 22rpx;
  color: var(--lt-accent);
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 18rpx;
}

.lang-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18rpx;
  padding: 24rpx 20rpx;
  border-radius: 22rpx;
  background: #fffdf9;
  border: 2rpx solid rgba(143, 63, 22, 0.08);
}

.lang-card--phrase {
  align-items: flex-start;
}

.lang-card__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.lang-card__en {
  font-size: 30rpx;
  font-weight: 700;
  line-height: 1.5;
  color: var(--lt-text-primary);
}

.lang-card__zh {
  font-size: 25rpx;
  line-height: 1.6;
  color: var(--lt-text-secondary);
}

.speak-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 108rpx;
  padding: 16rpx 14rpx;
  border-radius: 20rpx;
  background: linear-gradient(145deg, #2f6f62, #4a9988);
  color: #fff;
}

.speak-btn--hover {
  opacity: 0.9;
}

.speak-btn__icon {
  font-size: 30rpx;
}

.speak-btn__text {
  margin-top: 4rpx;
  font-size: 22rpx;
}

.empty {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24rpx;
  background: var(--lt-bg);
}

.empty__title {
  font-size: 34rpx;
  color: var(--lt-text-primary);
}

.empty__btn {
  padding: 18rpx 30rpx;
  border-radius: 999rpx;
  background: var(--lt-primary);
  color: #fff;
  font-size: 26rpx;
}

.empty__btn--hover {
  opacity: 0.9;
}
</style>
