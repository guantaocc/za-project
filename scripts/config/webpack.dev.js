// merge
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const paths = require('../paths')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    filename: 'js/[name].js',
    path: paths.appBuild,
  },
  devServer: {
    compress: true,
    open: false,
    // "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
    hot: true,
    // proxy: {
    //   ...require(paths.appProxySetup),
    // },
  },
  plugins: [new ErrorOverlayPlugin()],
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      // 使用 cacheGroups 提取模块
      cacheGroups: {
        common: {
          chunks: 'async' | 'all' | 'initial',
          minSize: 0,
          minChunks: 1,
        },
      },
    },
  },
})
