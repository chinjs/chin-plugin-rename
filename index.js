// @flow
import path from 'path'
import type { Outpath, Options, Out, Processor } from './index.js.flow'

const elements = [
  'root',
  'dir',
  'name',
  'ext',
]

type AnyObject = { [string]: any }

const assign = (objects: AnyObject[]): AnyObject => objects.reduce((a, c) => ({ ...a, ...c }), {})

const hog = (options: Options): (out: Out) => Out => {
  const map = assign(elements.map(element => ({
    [element]: hov(options, element)
  })))

  return (out) => assign(elements.map(element => {
    const value = map[element](out)
    if (typeof value !== 'string') throw new Error(``)
    return { [element]: value }
  }))
}

const hov = (options: Options, key: string): (out: Out) => string =>
  typeof options[key] === 'function'
  ? (out) => options[key](out[key], out)
  : (out) => options[key] || out[key]

const outpath: Outpath = (options = {}) => {
  const gen = hog(options)

  const processor: Processor = (data, { out, msg }) => {
    const generated: AnyObject = gen(out)
    const outpath = path.format(generated)
    if (!options.quiet) msg(` ${outpath}`)
    return [outpath, data]
  }

  return { isStream: false, processor }
}

export default outpath