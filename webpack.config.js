const path = require('path')

module.exports = (env) => {
  return {
    mode: 'development',
    target: 'web',
    entry: {
      index: './src/index.js',
      // main: './index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      sourceMapFilename: '[file].map',
      library: 'WeeklyDatePicker',
      libraryTarget: 'umd',
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
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader'
            }
          ]
        }
      ]
    },
    // externals: {
    //   react: 'react',
    //   antd: 'antd'
    // }
  }
}
