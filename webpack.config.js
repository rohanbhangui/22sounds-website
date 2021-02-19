const path = require("path");

const { featured_music, full_music } = require("./src/pages/music/discography.js");
const { featured_video, full_videos } = require("./src/pages/video/videography.js");


const CopyPlugin = require("copy-webpack-plugin");
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
          {
            loader: 'sass-resources-loader',
            options: {
              resources: require(path.join(process.cwd(), "src/assets/scss/utils.js"))
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]  //Preset used for env setup
          }
        }]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                name: 'assets/img/[name].[ext]',
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
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html',
      templateParameters: {
        'featured_discography': featured_music
      }
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/pages/contact/index.html',
      filename: './contact/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/pages/music/index.html',
      filename: './music/index.html',
      templateParameters: {
        'full_discography': full_music
      }
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/pages/video/index.html',
      filename: './video/index.html',
      templateParameters: {
        'full_videography': full_videos
      }
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/index.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img", to: "assets/img" },
        { from: "src/404.html", to: "/404.html" },
      ],
    }),
  ]
};