import React, { FC } from "react";
import style from "./Buttons.module.css";

interface IButtons {
  logout: () => void;
}

const Buttons: FC<IButtons> = ({ logout }) => {
  return (
    <div className={style.container}>
      <div className={style.pseudo_container}></div>
      <button type="submit" className={style.button}>
        Отправить данные
      </button>
      <button type="button" onClick={logout} className={style.button_exit}>
        ВЫЙТИ ИЗ КАБИНЕТА
      </button>
    </div>
  );
};

export default Buttons;
