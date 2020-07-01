const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {

  devServer: {
    host: '192.168.88.224',
    port: 1991
  },

  output: {
    filename: "main.js",
    publicPath: '/'
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },

      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader-srcset',
          options: {
            minimize: true
          }
        }],
      },
      
      {
        test: /\.sass$/,
        use: [
            MiniCssExtractPlugin.loader,
            // "style-loader", // style nodes from js strings
            "css-loader",
            "sass-loader"
        ]
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
              esModule: false
            },
          },
        ],
      },

      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }

    ]
  },

  plugins: [

    // Index.html
    new HtmlWebPackPlugin({
      template: "./src/views/index.pug",
      filename: "./index.html"
    }),

    // Stylesheet
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    // Jquery (if needed)
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    
    // Favicons generator
    new FaviconsWebpackPlugin({
      logo: './src/assets/logo.png',
      prefix: 'favicons/'
    })
  ]
};
