const path = require('path')

module.exports = {

  entry: './app/app.js',
  output: {

    path: path.resolve(__dirname, './public'),
    publicPath: '/public/',
    filename: 'bundle.js'

  },
  module: {

    rules: [

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {

          presets: [ '@babel/preset-env', '@babel/preset-react']

        }
      }

    ]

  }
}
