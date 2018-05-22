const path = require('path')
const nodeExternals = require('webpack-node-externals')

const config = {
  context: __dirname,
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: './src'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.json'],
    plugins: []
  }
}

module.exports = config
