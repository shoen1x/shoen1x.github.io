'use strict';

/**
 * @Created by Revenant|Shoenix on 2022/12/12
 * @version 0.9.26.10-PreAlpha Created
 * @description Using Next Generation Vanilla JS & JS Modules today with Webpack 3 & Babel!
 *
 * @license MIT
 * @copyright Shoenix Studios All Rights Reserved
 * @update 2023.3.5
 *
 */

const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const AssetsPlugin = require('assets-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const PROD = JSON.parse(process.env.PROD_ENV || '0');
const package_version = require('./package.json').version;

var cdn_url;
if(process.env.NODE_ENV == "development"){
  cdn_url = "http://127.0.0.1:5000/";
}else if (process.env.NODE_ENV == "production"){
  cdn_url = "https://shoenix-studios.web.app/";
}
  console.log("Now running: " + process.env.NODE_ENV + " Environment");

// Get Current Date based on days
const date = new Date();
let day = date.getDate();
let month = date.toLocaleString('default', { month: 'short' });
let year = date.getFullYear();
let currentDate = `${day} ${month} ${year}`;

var assetsPluginInstance = new AssetsPlugin({
  path: path.join(__dirname, './', 'docs'),
  publicPath: "/docs/",
  removeFullPathAutoPrefix: true,
  includeDynamicImportedAssets: true,
  update: true,
  filename: 'assets-terminal.json',
  prettyPrint: true,
  metadata: {version: package_version, date: currentDate, revision: 'RevF' + Date.parse(Date())},

  processOutput: function (assets) {
    return JSON.stringify(assets)
  }
});

let htmlPageNames = ['home', 'project', 'blog', '404', 'maintenance'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
    inject: true,
  })
});

// let htmlPageNames_product = ['in-the-name-of-tsar', 'black-steel-eagle', 'the-world', 'unity'];
// let multipleHtmlPlugins_product = htmlPageNames_product.map(name => {
//   return new HtmlWebpackPlugin({
//     template: `./src/product/${name}.html`, // relative path to the HTML files
//     filename: `/product/${name}.html`, // output HTML files
//     chunks: [`product`], // respective JS files
//     inject: true,
//   })
// });

let htmlPageNames_my = ['home', 'project', 'blog', '404'];
let multipleHtmlPlugins_my = htmlPageNames_my.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/ms/${name}.html`, // relative path to the HTML files
    filename: `/ms/${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
    inject: true,
  })
});

module.exports = {
    entry: {
        home :["./src/assets/js/home.js", "./src/assets/css/home.css"],
        project :["./src/assets/js/project.js", "./src/assets/css/project.css"],
        blog :["./src/assets/js/blog.js", "./src/assets/css/blog.css"],
    },
    output: {
        publicPath: cdn_url,
        path: path.resolve(__dirname, './docs'),
        filename: "global/assets/js/[name].js?v=[contenthash]",
        chunkFilename: "global/assets/js/[name].chunk.js?v=[contenthash]",
        assetModuleFilename: "global/assets/portal/[name][ext]?v=[contenthash]",
        crossOriginLoading: "anonymous",
    },
    performance: {
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'html-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/i,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              presets: ['@babel/preset-env']
            }
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: cdn_url,
              },
            },
            { loader: "css-loader", options: { sourceMap: true, esModule: true } },
            { loader: "postcss-loader", options: { sourceMap: true } },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          generator: {
            filename: 'global/assets/images/svg/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?[a-z0-9=.]+)?$/,
          type: 'asset/resource',
            generator: {
              filename: 'global/assets/webfonts/[name][ext]?v=[contenthash]'
            },
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          type: 'asset/resource',
          generator: {
            filename: 'global/assets/images/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /\.(gltf|glb)$/,
          type: 'asset/resource',
          generator: {
            filename: 'global/assets/images/3D/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /(og-image).*\.jpg$/,
          type: 'asset/resource',
          generator: {
            filename: 'global/assets/images/og-image/[name][ext]?v=[contenthash]'
          },
          exclude: /node_modules/,
        },
        {
          test: /(favicon\.ico|site\.webmanifest|browserconfig\.xml|robots\.txt|humans\.txt|sitemap.xml|robots.txt)$/,
          type: 'asset/resource',
            generator: {
              filename: '[name][ext]?v=[contenthash]'
            },
          exclude: /node_modules/,
        },
        {
          test: /\.json$/,
          type: 'asset/resource',
            generator: {
              filename: '[name][ext]?v=[contenthash]'
            },
          exclude: /node_modules/,
        },
      ],
    },
    optimization: {
      realContentHash: true,
      minimizer: [new CssMinimizerPlugin({parallel: true})],
    },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "global/assets/css/[name].css?v=[contenthash]",
      chunkFilename: "global/assets/css/[id].css?v=[contenthash]",
    }),

    new SubresourceIntegrityPlugin(),
    new HtmlWebpackInjector(),
    new WebpackAssetsManifest({ integrity: true }),
    new CleanWebpackPlugin(),
    assetsPluginInstance,

  ].concat(multipleHtmlPlugins, multipleHtmlPlugins_my)
};