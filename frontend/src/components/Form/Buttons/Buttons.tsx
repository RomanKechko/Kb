import React, { FC } from "react";
import style from "./Buttons.module.css";

interface IButtons {
  logout: () => void;
  missingFile: boolean;
  missingGif: boolean;
}

const Buttons: FC<IButtons> = ({ logout, missingFile, missingGif }) => {
  return (
    <div className={style.container}>
      <div className={style.pseudo_container}></div>
      <div className={style.pseudo_container_button}>
        <button
          type="submit"
          className={style.button}
          disabled={missingFile || missingGif ? true : false}
        >
          Отправить данные
        </button>
        {missingFile && (
          <p className={style.form_error}>
            Необходимо загрузить хотя бы один файл
          </p>
        )}
        {missingGif && (
          <p className={style.form_error}>
            Отсутствует gif или картинка gif'ки
          </p>
        )}
      </div>
      <button type="button" onClick={logout} className={style.button_exit}>
        ВЫЙТИ ИЗ КАБИНЕТА
      </button>
    </div>
  );
};

export default Buttons;
