const webpack = require('webpack')

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    iife: false,
    pathinfo: 'verbose'
  }
})

compiler.run()
