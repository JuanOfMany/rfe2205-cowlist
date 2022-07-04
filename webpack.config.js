const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/server/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js'
  }
}