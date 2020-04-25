const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.css'
    })
  ],
  module: {
    rules: [
      {
        test:  /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        loader: [
          // Creates `style` nodes from JS strings with style-loader
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
}