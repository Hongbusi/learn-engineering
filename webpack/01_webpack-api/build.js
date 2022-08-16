const webpack = require('webpack')

function f1() {
  return webpack({
    entry: './index.js',
    mode: 'none',
    output: {
      iife: false, // 告诉 webpack 添加 IIFE（立即调用函数表达式） 外层包裹生成的代码
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

f1().run((err, stat) => {
  if (err)
    console.log(err)

  if (stat)
    console.log(stat.endTime - stat.startTime)
})

f2().run((err, stat) => {
  if (err)
    console.log(err)

  if (stat)
    console.log(stat.endTime - stat.startTime)
})
