import assert from 'assert'
import path from 'path'
import Outpath from './index.js'

const parse = (filepath) => {
  const { base, ...obj } = path.parse(filepath)
  return obj
}

const filename = 'name.ext'
const util = {
  out: parse(path.resolve(filename)),
  msg: () => {}
}

describe('success', () => {
  it('()', test())
  it('({ root })', test({ root: '/' }))
  it('({ dir })', test({ dir: '/home/user/dir' }))
  it('({ name })', test({ name: 'hoge' }))
  it('({ ext })', test({ ext: '.fuga' }))
  it('({ quiet })', test({ quiet: true }))
  it('({ name: fn })', test({ name: (name) => 'string' }))

  function test(options) {
    return () => {
      const { isStream, processor } = Outpath(options)
      assert.ok(isStream === false)

      const [ outpath, data ] = processor('data', util)
      assert.ok(data)
      assert.ok(outpath && typeof outpath === 'string')
    }
  }
})

describe('fail', () => {
  const invalidValue = 10
  it('({ name: invalid })', test({ name: invalidValue }))
  it('({ name: () => invalid })', test({ name: (name) => invalidValue }))

  function test(options) {
    return () => {
      const { processor } = Outpath(options)
      assert.throws(() => processor('data', util))
    }
  }
})