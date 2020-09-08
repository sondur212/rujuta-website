const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const entry = process.env.ZK_WEBPACK_ENTRY;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(pdf|png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'node_modules/pdfjs-dist/build/pdf.worker.js' }],
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      assets: path.join(__dirname, '/assets'),
    },
  },
};

/*

            options: {
              limit: 8192,
              name: 'img/[name]-[hash].[ext]',
            },*/
