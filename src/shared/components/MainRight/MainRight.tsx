import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import style from "./MainRight.css";
import { Product } from "../Product";

const MainRightComponent: FC = () => {
  return (
    <section className={style.conteiner}>
      <h2 className={style.title}>Библиотека проектов</h2>
      <ul className={style.lists}>
        <Product />
      </ul>
    </section>
  );
};

export const MainRight = hot(MainRightComponent);
