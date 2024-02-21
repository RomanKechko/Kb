import { FC } from "react";
import style from "./MainRight.module.css";
import ProductComponent from "../Product/Product";

const MainRightComponent: FC = () => {
  return (
    <section className={style.conteiner}>
      <h2 className={style.title}>Библиотека проектов</h2>
      <ul className={style.lists}>
        <ProductComponent />
      </ul>
    </section>
  );
};

export default MainRightComponent;
