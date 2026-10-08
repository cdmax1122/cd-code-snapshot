const DEFAULT_NAV_HEIGHT = 44

function getWindowInfoSafe() {
  if (typeof uni.getWindowInfo === 'function') {
    return uni.getWindowInfo()
  }

  return uni.getSystemInfoSync()
}

function getMenuButtonRect() {
  // #ifdef MP-WEIXIN
  if (typeof wx !== 'undefined' && typeof wx.getMenuButtonBoundingClientRect === 'function') {
    return wx.getMenuButtonBoundingClientRect()
  }
  // #endif

  if (typeof uni.getMenuButtonBoundingClientRect === 'function') {
    return uni.getMenuButtonBoundingClientRect()
  }

  return null
}

function getStatusBarHeight() {
  const windowInfo = getWindowInfoSafe()
  return windowInfo.statusBarHeight || 0
}

export function getSafeTopInset(extra = 12) {
  const menuButton = getMenuButtonRect()

  if (menuButton) {
    return menuButton.top + menuButton.height + extra
  }

  return getStatusBarHeight() + extra
}

export function getCustomNavMetrics() {
  const metrics = {
    topInset: getStatusBarHeight() + 8,
    navHeight: DEFAULT_NAV_HEIGHT
  }

  const menuButton = getMenuButtonRect()
  if (menuButton) {
    metrics.topInset = menuButton.top
    metrics.navHeight = menuButton.height
  }

  return metrics
}
