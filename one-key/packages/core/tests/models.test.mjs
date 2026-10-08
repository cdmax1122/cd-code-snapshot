import test from 'node:test'
import assert from 'node:assert/strict'
import { loadUts, fixture } from './load-uts.mjs'

const models = await loadUts(fixture('apps/mobile/core/domain/models.uts'))

test('draft conversion preserves the account-first credential shape', () => {
  const draft = models.emptyAccountDraft()
  Object.assign(draft, {
    id: 'account-1', title: ' GitHub ', email: 'dev@example.com',
    url: 'https://github.com', password: 'secret', tagsText: 'work, dev'
  })
  const entry = models.draftToEntry(draft, 200, 100)
  assert.equal(entry.title, 'GitHub')
  assert.equal(entry.credentials.password.value, 'secret')
  assert.deepEqual(entry.credentials.passkeys, [])
  assert.deepEqual(entry.tags, ['work', 'dev'])
  assert.equal(entry.createdAt, 100)
})
