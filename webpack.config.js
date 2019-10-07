const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: [
          'webpack-hot-middleware/client?reload=true',
          './src/client/index.js'
        ]
    },
    output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'app.js',
       publicPath: '/'
    },
    module: {
          rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                  
                ],
              },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'app.css',
          chunkFilename: '[id].css'
      })
  ]
}