const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          },
          {
            loader: `sass-loader`
          }
        ]
      },
    ]
  },
  devtool: `source-map`,
};