const {resolve} = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env = {}) => ({
  context: resolve('source'),

  entry: ['app.js', 'styles/main.scss'],

  devServer: {
    contentBase: './public'
  },

  output: {
    filename: 'bundle.js',
    path: resolve('public'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.vue'],
    modules: [resolve('source'), 'node_modules'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    loaders: [
      { test: /\.(woff|png|jpg|gif)$/, loader: 'file-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader'
            })
          }
        }
      },
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }

    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: env.prod ? '"production"' : '"dev"'
      }
    })
  ],

  devtool: env.prod ? 'source-map' : 'eval'
})
