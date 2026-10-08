// 辅助判断是否为纯对象
const isObj = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);

export const DefaultTheme = {
  node: {
    opacity: 1,
    background: {
      visible: true,
      color: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 8
    },
    border: {
      visible: true,
      width: 1,
      color: '#d1d5db'
    },
    label: {
      visible: true,
      color: '#1f2937',
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      offsetY: 8
    },
    image: {
      padding: 12,
      placeholderColor: '#d1d5db'
    },
    state: {
      overlayColor: null,
      glowColor: null,
      glowStrength: 0
    }
  },
  edge: {
    base: {
      visible: true,
      color: 'rgba(148, 163, 184, 0.35)',
      width: 2,
      lineCap: 'round',
      lineJoin: 'round'
    },
    active: {
      visible: true,
      color: '#22d3ee',
      width: 3,
      dashSegments: [8, 4],
      dashColor: '#67e8f9',
      textureColor: '#fef08a',
      particleColor: '#ffffff',
      particleSize: 4
    }
  },
  canvas: {
    background: 'transparent',
    gridColor: 'rgba(0, 0, 0, 0.05)'
  }
};

export function mergeTheme(defaultTheme, userTheme) {
  const result = { ...defaultTheme };
  for (const key in userTheme) {
    if (isObj(userTheme[key]) && isObj(result[key])) {
      result[key] = mergeTheme(result[key], userTheme[key]);
    } else {
      result[key] = userTheme[key];
    }
  }
  return result;
}
