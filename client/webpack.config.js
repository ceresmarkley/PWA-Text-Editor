const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    //  Add and configure workbox plugins for a service worker and manifest file.
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Just Another Text Editor(JATE)",
      }),
      // service-worker.js
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      // create manifest.json
      new WebpackPwaManifest({
        // manifest.<fingerprint>.json sest to false
        fingerprints: false,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'offline text editor',
        background_color: '#497bd1',
        theme_color: '#497bd1',
        start_url: './',
        publicPath: './',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    //  Add CSS loaders and babel to webpack. 

    module: {
      rules: [
        // css-loader
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        // babel
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            }
          }
        }
      ],
    },
  };
};
