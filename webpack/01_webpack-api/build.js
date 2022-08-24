const webpack = require('webpack')

function build() {
  return webpack({
    mode: 'none',
    entry: './index.js'
  })
}

build().run((_err, stat) => {
  const startTime = stat.startTime
  const endTime = stat.endTime
  console.log('构建时间', endTime - startTime)
})
