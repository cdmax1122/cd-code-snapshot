export function formatPower(value) {
  return `${value.toLocaleString()} MW`
}

export function formatEnergy(value) {
  return `${value.toLocaleString()} MWh`
}

export function formatCurrency(value) {
  return `¥ ${value.toLocaleString()}`
}

export function formatPercent(value) {
  return `${value}%`
}
