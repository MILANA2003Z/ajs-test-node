const path = require('path');

module.exports = {
  mode: 'development', // или 'production', если нужен минифицированный код
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'ajs',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this', // 👈 это важно для Node.js
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
