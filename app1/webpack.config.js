const HtmlWebpackPlugin = require('html-webpack-plugin');
const { FederatedTypesPlugin } = require('@module-federation/typescript');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new FederatedTypesPlugin({
      federationConfig: {
        name: 'app1',
        remotes: {
          app2: 'app2@http://localhost:3002/remoteEntry.js',
          app3: 'app2@http://localhost:3003/remoteEntry.js'
        },
        shared: ['react', 'react-dom'],
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
