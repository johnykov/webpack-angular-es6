var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {presets: ['es2015'], plugins: ["add-module-exports"]}
      },
      {test: /.html$/, loader: 'raw', exclude: /(node_modules|bower_components)/},
      {test: /.css$/, loader: 'style!css', exclude: /(node_modules|bower_components)/},
      {test: /.styl$/, loader: 'style!css!stylus', exclude: /(node_modules|bower_components)/}
    ]
  }
};
