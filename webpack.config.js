module.exports = {
  entry: './src/main.js',
  output: {
  path: './dist',
  publicPath: 'dist/',
  filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  vue:{
    loaders:{
      js:'babel'
    }
  }
}