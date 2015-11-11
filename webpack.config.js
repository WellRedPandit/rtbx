var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/scripts/UnifiedSearch.jsx'),
  output: {
    path: path.resolve(__dirname, 'target/sandbox'),
    publicPath: 'target/sandbox/',
    filename: 'UnifiedSearch.js'
  },
  externals: {
    'jquery': 'jQuery',
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.scss', '.jsx', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        query: { presets: ['es2015', 'react', 'stage-0'] }
      },
      {
        test: /(\.scss|\.css)$/,
        loaders: ['style!css!sass', 'css!sass!toolbox'],
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
