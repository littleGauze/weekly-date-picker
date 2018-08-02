const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  return {
    mode: 'development',
    target: 'web',
    entry: {
      main: './index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                  javascriptEnabled: true
              }
            }
          ]
        },
        {
          test: /\.less$/,
          include: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                  javascriptEnabled: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'public',
          to: '.'
        }
      ])
    ]
  }
}
