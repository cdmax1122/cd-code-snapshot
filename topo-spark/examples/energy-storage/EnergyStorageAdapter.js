const COMM_VISUAL = {
  online: {
    opacity: 1,
    fillColor: 'rgba(11, 28, 48, 0.9)',
    strokeColor: 'rgba(103, 232, 249, 0.78)',
    strokeWidth: 1.5,
    labelColor: '#e5f7ff',
    overlayColor: null,
    badge: { text: '通信在线', color: '#2dd4bf', textColor: '#07111f' }
  },
  offline: {
    opacity: 0.48,
    fillColor: 'rgba(43, 51, 61, 0.92)',
    strokeColor: 'rgba(148, 163, 184, 0.46)',
    strokeWidth: 1.5,
    labelColor: '#94a3b8',
    placeholderColor: '#94a3b8',
    overlayColor: 'rgba(100, 116, 139, 0.5)',
    glowColor: null,
    glowStrength: 0,
    indicator: null,
    badge: { text: '通信离线', color: '#64748b', textColor: '#07111f' }
  },
  warning: {
    opacity: 1,
    fillColor: 'rgba(11, 28, 48, 0.9)',
    strokeColor: '#f59e0b',
    strokeWidth: 2.5,
    labelColor: '#fde68a',
    badge: { text: '通信告警', color: '#f59e0b', textColor: '#07111f' }
  }
};

const WORK_VISUAL = {
  running: { text: '运行', color: '#38bdf8', glow: '#38bdf8' },
  generating: { text: '发电', color: '#facc15', glow: '#facc15' },
  charging: { text: '充电', color: '#22c55e', glow: '#22c55e' },
  discharging: { text: '放电', color: '#38bdf8', glow: '#38bdf8' },
  standby: { text: '待机', color: '#94a3b8', glow: null }
};

export function adaptEnergyStorageData(rawData) {
  return {
    ...rawData,
    nodes: rawData.nodes.map(adaptNode)
  };
}

function adaptNode(node) {
  const commStatus = node.data?.commStatus || 'online';
  const workStatus = node.data?.workStatus || 'standby';
  const commStyle = COMM_VISUAL[commStatus] || COMM_VISUAL.online;
  const workStyle = WORK_VISUAL[workStatus] || WORK_VISUAL.standby;
  const businessStyle = commStatus === 'offline'
    ? {}
    : {
        glowColor: workStyle.glow,
        glowStrength: workStyle.glow ? 22 : 0,
        indicator: {
          text: workStyle.text,
          color: workStyle.color
        }
      };

  return {
    ...node,
    style: {
      ...commStyle,
      ...businessStyle,
      ...(node.style || {})
    },
    tooltip: {
      title: node.label,
      items: [
        { label: '通信状态', value: commStatusLabel(commStatus) },
        { label: '业务状态', value: commStatus === 'offline' ? '不可用' : workStyle.text },
        { label: '状态说明', value: node.data?.statusText || '-' },
        { label: '功率', value: `${node.data?.power ?? '-'} kW` },
        { label: '说明', value: node.data?.description || '-' }
      ]
    }
  };
}

function commStatusLabel(status) {
  const labels = {
    online: '通信在线',
    offline: '通信离线',
    warning: '通信告警'
  };
  return labels[status] || status;
}
