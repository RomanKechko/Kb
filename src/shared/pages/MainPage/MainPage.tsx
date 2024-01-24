import React from "react";
import { hot } from "react-hot-loader/root";
import style from "./MainPage.css";
import { MainLeft } from "../../components/MainLeft";
import { MainRight } from "../../components/MainRight";

function MainPageComponent() {
  return (
    <main className={style.main}>
      <MainLeft />
      <MainRight />
    </main>
  );
}

export const MainPage = hot(MainPageComponent);
