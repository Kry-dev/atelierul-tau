var HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpack = require('webpack'),
  path = require('path');

const cssLoader = {
  loader: 'css-loader',
  query: {sourceMap: true}
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: function() {
      return [
        autoprefixer({
          browsers: ['last 2 version', 'Explorer >= 10']
        })
      ];
    }
  }
};

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: 'pug-loader?pretty'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            postcssLoader,
            {
              loader: 'sass-loader',
              query: {sourceMap: true}
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader, postcssLoader]
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=1000&name=[path][name].[ext]'
      },
      {
        test: /\.(eot|svg|gif|ttf|woff|woff2|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      template: 'pug/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'pug/main.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'accessories.html',
      template: 'pug/accessories.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'accessories-listing.html',
      template: 'pug/accessories-listing.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: 'pug/cart.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'new-account.html',
      template: 'pug/new-account.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: 'pug/product.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'checkout.html',
        template: 'pug/checkout.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'checkout-social-login.html',
        template: 'pug/checkout-social-login.pug'
    }),
    new HtmlWebpackPlugin({
        filename: 'checkout-2.html',
        template: 'pug/checkout-2.pug'
    })
  ]
};
