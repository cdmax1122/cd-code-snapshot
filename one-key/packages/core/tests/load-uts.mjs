import { readFile } from 'node:fs/promises'
import { stripTypeScriptTypes } from 'node:module'
import { pathToFileURL } from 'node:url'

export async function loadUts(path) {
  const source = await readFile(path, 'utf8')
  const javascript = stripTypeScriptTypes(source, { mode: 'transform' })
  return import(`data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`)
}

export function fixture(relativePath) {
  return new URL(relativePath, pathToFileURL(`${process.cwd()}/`))
}

