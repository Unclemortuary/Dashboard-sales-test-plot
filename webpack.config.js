const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, argv) {
  return {
    entry: path.join(__dirname, "index.js"),
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "main.js",
      clean: true  
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      })
    ],
    devServer: {
      port: 3030,
      watchFiles: '*'
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
    resolve: {
      enforceExtension: false,
      extensions: ['.js', '.jsx', '.css', '.scss', '.html', '.json'],
    },
    optimization: {
      minimize: true
    }
  }
};