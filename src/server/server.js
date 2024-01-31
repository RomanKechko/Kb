import express from "express";
import ReactDOM from "react-dom/server";
import * as React from "react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

import { App } from "../shared/App";
import { indexTemplate } from "./indexTemplate";
import { store } from "../shared/services/store";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use("/static", express.static("./public/client"));

app.get("*", (req, res) => {
  res.send(
    indexTemplate(
      ReactDOM.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      )
    )
  );
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}/`);
});
