const path = require('path')
const webpack = require('webpack')

function build() {
  return webpack({
    mode: 'none',

    entry: {
      index: './index.js',
      index2: './index2.js'
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    }
  })
}

build().run((_err, stat) => {
  console.log('构建时间', stat.endTime - stat.startTime)
})
