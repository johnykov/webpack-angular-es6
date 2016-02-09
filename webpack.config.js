var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ng-annotate!babel'
      },
      {test: /.html$/, loader: 'raw', exclude: /(node_modules|bower_components)/},
      {test: /.css$/, loader: 'style!css', exclude: /(node_modules|bower_components)/},
      {test: /.styl$/, loader: 'style!css!stylus', exclude: /(node_modules|bower_components)/}
    ]
  }
};

if (process.env.NODE_ENV === 'production'){
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;