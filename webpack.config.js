const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                name: '[path][name].[ext]',
                limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/, 
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]',
        }, 
      },
      {
        test: /\.ico$/, 
        loader: 'file-loader',
        options: {
          name: '/[name].[ext]',
        }, 
      },

    ]
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/index.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img/favicon", to: "favicon" },
      ],
    }),
  ]
};