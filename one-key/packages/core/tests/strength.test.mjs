import test from 'node:test'
import assert from 'node:assert/strict'
import { loadUts, fixture } from './load-uts.mjs'

const strength = await loadUts(fixture('apps/mobile/core/strength/password-strength.uts'))

test('common transformed password is not misclassified as strong', () => {
  const result = strength.evaluatePassword('P@ssw0rd123!')
  assert.equal(result.level, 'weak')
  assert.ok(result.reasons.some((reason) => reason.includes('常见密码')))
})

test('long random-looking password is very strong', () => {
  const result = strength.evaluatePassword('N8#uZ4!qT2$pxF7@Km3L')
  assert.equal(result.level, 'veryStrong')
})

test('date and repetition patterns are explained', () => {
  const result = strength.evaluatePassword('aaaa-1990-aaaa')
  assert.ok(result.reasons.some((reason) => reason.includes('重复')))
  assert.ok(result.reasons.some((reason) => reason.includes('日期')))
})
