const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const NODE_ENV = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: NODE_ENV ? NODE_ENV : "development",
  entry: [
    path.resolve(__dirname, "../src/client/index.tsx"),
    isDev &&
      "webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr&reload=true",
  ].filter(Boolean),
  plugins: [isDev && new HotModuleReplacementPlugin()].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      isDev && {
        test: /\.js$/,
        include: /node_modules\/react-dom/,
        use: ["react-hot-loader/webpack"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
        generator: {
          filename: "[name].[hash][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              /*      name: "[name].[hash][ext]", */
              publicPath: "static/images/",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[hash][ext]",
        },
      },
    ].filter(Boolean),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  output: {
    path: path.resolve(__dirname, "../public/client"),
    filename: "client.js",
    publicPath: "/static/",
    clean: true,
  },
  optimization: {
    minimize: !isDev,
  },
};
