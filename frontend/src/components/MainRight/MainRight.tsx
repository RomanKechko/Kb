"use client";
import { FC } from "react";
import style from "./MainRight.module.css";
import ProductComponent from "./Product/Product";
import { useAppDispatch } from "@/services/hooks";

const MainRightComponent: FC = () => {
  return (
    <section className={style.container}>
      <ul className={style.lists}>
        <ProductComponent />
      </ul>
    </section>
  );
};

export default MainRightComponent;
