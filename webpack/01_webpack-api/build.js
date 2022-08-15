const webpack = require('webpack')

function f1() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false,
      pathinfo: 'verbose'
    }
  })
}

function f2() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    optimization: {
      runtimeChunk: true
    }
  })
}

f1().run((err, stats) => {
  if (err)
    console.log(err)

  if (stats)
    console.log(stats.endTime - stats.startTime)
})

f2().run((err, stats) => {
  if (err)
    console.log(err)

  if (stats)
    console.log(stats.endTime - stats.startTime)
})
