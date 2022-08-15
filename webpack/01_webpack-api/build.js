const webpack = require('webpack')

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    filename: 'main.js'
  }
})

compiler.run((err, stats) => {
  if (err)
    console.log(err)

  if (stats)
    console.log(stats.endTime - stats.startTime)
})
