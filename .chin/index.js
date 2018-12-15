const Rename = require('..').default

module.exports = {
  put: '.chin/put',
  out: '.chin/out',
  clean: true,
  processors: [
    ['fuga', { js: Rename({ ext: '.mjs' }) }],
    ['hoge', { js: Rename({ ext: '.js.flow' }) }],
  ]
}