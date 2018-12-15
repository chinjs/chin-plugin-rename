// @flow
import path from 'path'
import type { Plugin, Out, Processor, Element } from './index.js.flow'

type Gev = (out: Out) => string
type Gen = (out: Out) => Generated
type Elements = {
  root?: Element,
  dir?: Element,
  base?: Element,
  name?: Element,
  ext?: Element,
}
type Generated = {
  root: string,
  dir: string,
  base?: string,
  name?: string,
  ext?: string,
}

const hog = (elements: Elements): Gen => {
  const entries = Object.keys(elements).map(el => [el, hov(elements, el)])
  return (out) => Object.assign({}, ...entries.map(([ el, gev ]) => {
    const value = gev(out)
    if (typeof value !== 'string') throw new Error(`${el} is invalid value`)
    return { [el]: value }
  }))
}

const hov = (elements: Elements, key: string): Gev =>
  typeof elements[key] === 'function'
  ? (out) => elements[key](out[key], out)
  : (out) => elements[key] || out[key]

const format: any = path.format;(format: (Generated) => string)

const plugin: Plugin = (options = {}) => {
  const {
    root,
    dir,
    base,
    name,
    ext,
    quiet,
  } = options

  const gen = base
  ? hog({ root, dir, base })
  : hog({ root, dir, name, ext })

  const processor: Processor = (data, { out, msg }) => {
    const outpath = format(gen(out))
    if (!quiet) msg(` ${outpath}`)
    return [ outpath, data ]
  }

  return { isStream: false, processor }
}

export default plugin