const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'react-bulma',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css', '.sass']
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  url: false,
                  sourceMap: true
              }
          },

          {
              loader: "sass-loader",
              options: {
                  sourceMap: true
              }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
}