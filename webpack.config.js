var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: {
    app: './index.js',
    vendor: './vendor.js'
  },
  output: {
    path: __dirname + '/app',
    filename: 'app.bundle.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.ProvidePlugin({//https://webpack.github.io/docs/shimming-modules.html
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  }),
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    })
  ],
  
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules)/, loader: 'ng-annotate!babel'},
      {test: /.html$/, loader: 'raw', exclude: /(node_modules)/},
      {test: /.css$/, loader: 'style!css'},
      {test: /.styl$/, loader: 'style!css!stylus', exclude: /(node_modules)/},
      {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/, loader: 'file'}
    ]
  },
  devServer: {
    historyApiFallback: true //html5mode on for dev
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;