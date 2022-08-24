const webpack = require('webpack')

function build() {
  return webpack({
    mode: 'none',
    entry: './index.js'
  })
}

build().run((_err, stat) => {
  console.log('构建时间', stat.endTime - stat.startTime)
})
