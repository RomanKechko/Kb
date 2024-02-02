import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "./app.global.css";
import { MainPage } from "./pages/MainPage";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import { Project } from "./components/Project";

const AppComponent: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
        <Route path="/product/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const App = hot(AppComponent);
