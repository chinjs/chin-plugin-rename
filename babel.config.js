module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: '6' }
    }],
    '@babel/preset-flow',
  ],
  env: {
    test: {
      presets: [
        'power-assert'
      ],
      plugins: [
        'istanbul'
      ]
    }
  }
}