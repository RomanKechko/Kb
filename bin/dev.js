const webpack = require("webpack");
const [webpackClientConfig, webpackServerConfig] = require("../webpack.config");
const nodemon = require("nodemon");
const path = require("path");

const clientCompiler = webpack(webpackClientConfig);

if (process.env.NODE_ENV === "development") {
  const express = require("express");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  const hmrServer = express();
  hmrServer.use(
    webpackDevMiddleware(clientCompiler, {
      publicPath: webpackClientConfig.output.publicPath,
      serverSideRender: true,
      writeToDisk: true,
      stats: "errors-only",
    })
  );

  hmrServer.use(
    webpackHotMiddleware(clientCompiler, {
      path: "/static/__webpack_hmr",
    })
  );

  hmrServer.listen(3001, () => {
    console.log("Hmr Server successfully started");
  });
} else {
  clientCompiler.watch({}, (err) => {
    if (err) {
      console.log(`compilation failed:`, err);
    }
    console.log("Compilation client was successfully");
  });
}

const compiler = webpack(webpackServerConfig);

compiler.run((err) => {
  if (err) {
    console.log(`compilation failed:`, err);
  }
  compiler.watch({}, (err) => {
    if (err) {
      console.log(`compilation failed:`, err);
    }
    console.log("Compilation server was successfully");
  });

  nodemon({
    script: path.resolve(__dirname, "../public/server/server.js"),
    watch: [
      path.resolve(__dirname, "../public/server"),
      path.resolve(__dirname, "../public/client"),
    ],
    delay: 2000,
  });
});
