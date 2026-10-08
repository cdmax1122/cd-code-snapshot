export function mockRequest(data, delay = 220) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(data), delay)
  })
}
