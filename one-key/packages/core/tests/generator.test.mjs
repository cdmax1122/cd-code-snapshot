import test from 'node:test'
import assert from 'node:assert/strict'
import { loadUts, fixture } from './load-uts.mjs'

const generator = await loadUts(fixture('apps/mobile/core/generator/password-generator.uts'))

class CyclingRandom {
  constructor() { this.value = 0 }
  nextBytes(length) {
    return Array.from({ length }, () => (this.value++ * 73 + 19) % 256)
  }
}

test('default generator produces the requested length and every selected group', () => {
  const options = generator.defaultGenerateOptions()
  const password = generator.generatePassword(options, new CyclingRandom())
  assert.equal(password.length, 20)
  assert.match(password, /[A-Z]/)
  assert.match(password, /[a-z]/)
  assert.match(password, /[0-9]/)
  assert.match(password, /[^a-zA-Z0-9]/)
})

test('similar characters are excluded', () => {
  const options = generator.defaultGenerateOptions()
  options.length = 64
  options.excludeSimilar = true
  const password = generator.generatePassword(options, new CyclingRandom())
  assert.doesNotMatch(password, /[O0Il1]/)
})

test('generator rejects an empty character selection', () => {
  const options = generator.defaultGenerateOptions()
  options.uppercase = options.lowercase = options.numbers = options.symbols = false
  assert.throws(() => generator.generatePassword(options, new CyclingRandom()), /至少选择/)
})

test('entropy estimate grows with length', () => {
  const options = generator.defaultGenerateOptions()
  const short = generator.generatedEntropyBits({ ...options, length: 12 })
  const long = generator.generatedEntropyBits({ ...options, length: 24 })
  assert.ok(long > short)
})
