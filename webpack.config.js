require('dotenv').config();
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src', 'index'),
  build: path.join(__dirname, 'public'),
  exclude: /node_modules/
}

const common = {
  entry: PATHS.app,

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },

  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: PATHS.exclude },
      { test: /\.styl$/, loader: 'style!css!postcss!stylus', exclude: PATHS.exclude }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({ React: 'react' })
  ]
}

const configs = {
  start: merge(common, {}),

  watch: merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || '8080'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}

module.exports = configs[process.env.npm_lifecycle_event] || common;
