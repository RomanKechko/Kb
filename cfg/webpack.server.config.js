const path = require("fix-esm").require("path");
const nodeExternals = require("fix-esm").require("webpack-node-externals");

const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const NODE_ENV = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  target: "node",
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: path.resolve(__dirname, "../src/server/server.js"),
  externals: [
    nodeExternals({
      allowlist: [/swiper/],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true,
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: "css-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash][ext]",
              publicPath: auto,
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: "ignore-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "../public/server"),
    filename: "server.js",
    clean: true,
  },
  optimization: {
    minimize: !isDev,
  },
};
