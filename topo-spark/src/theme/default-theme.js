// 辅助判断是否为纯对象
const isObj = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);

export const DefaultTheme = {
  // ==========================================
  // 节点 视觉规范
  // ==========================================
  node: {
    // 基础透明度
    opacity: 1,

    // 背景配置组
    background: {
      visible: true,
      color: "rgba(255, 255, 255, 0.95)",
      borderRadius: 8,
    },

    // 边框配置组
    border: {
      visible: true,
      width: 1,
      color: "#d1d5db",
    },

    // 文本标签配置组
    label: {
      visible: true,
      color: "#1f2937",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "system-ui, -apple-system, sans-serif",
      offsetY: 8, // 距离节点底部的垂直间距
    },

    // 图片内容配置组 (供 ImageNode 等使用)
    image: {
      padding: 12,
      placeholderColor: "#d1d5db", // 图片加载失败时的占位符颜色
    },

    // 状态与动效配置组
    state: {
      overlayColor: "rgba(200, 200, 200, 0.6)", // 离线/禁用遮罩色
      glowColor: null,
      glowStrength: 0,
    },
  },

  // ==========================================
  // 连线 视觉规范
  // ==========================================
  edge: {
    base: {
      visible: true,
      color: "rgba(148, 163, 184, 0.35)", // 静态底色
      width: 2,
      lineCap: "round",
      lineJoin: "round",
    },
    active: {
      visible: true,
      color: "#22d3ee", // 活跃光晕底色
      width: 3,
      // 流光动效参数
      dashSegments: [8, 4],
      dashColor: "#67e8f9",
      textureColor: "#fef08a",
      particleColor: "#ffffff",
      particleSize: 4,
    },
  },

  // ==========================================
  // 画布 视觉规范
  // ==========================================
  canvas: {
    background: "transparent",
    gridColor: "rgba(0, 0, 0, 0.05)",
  },
};

// 深度合并工具函数：确保业务层传入的部分 style 能正确覆盖嵌套的默认配置
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
