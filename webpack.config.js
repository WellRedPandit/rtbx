var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/scripts/UnifiedSearch.jsx'),
  output: {
    path: path.resolve(__dirname, 'target/sandbox'),
    publicPath: 'target/sandbox/',
    filename: 'UnifiedSearch.js'
  },
  externals: {
    'jquery': 'jQuery'
  },
  resolve: {
    extensions: ['', '.scss', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react', 'stage-0'] }
      }, {
        test: /(\.scss|\.css)$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'app')
      }, {
        test: /(\.scss|\.css)$/,
        loader: 'css!sass!toolbox',
        include: /node_modules/
      }
    ]
  }
};
