import React, { FC } from "react";
import style from "./Buttons.module.css";
import { useAppSelector } from "@/services/hooks";

interface IButtons {
  logout: () => void;
  missingGif: boolean;
  mainPicture: boolean;
  customValidity: string;
}

const Buttons: FC<IButtons> = ({
  logout,
  missingGif,
  mainPicture,
  customValidity,
}) => {
  const loading = useAppSelector(
    (state) => state.projectManagement.loadingProgect
  );
  console.log(loading);
  return (
    <div className={style.container}>
      <div className={style.pseudo_container}></div>
      <div className={style.pseudo_container_button}>
        <button
          type="submit"
          className={style.button}
          disabled={
            mainPicture || missingGif || customValidity !== "" ? true : false
          }
        >
          {loading ? "Данные отправляются" : "Отправить данные"}
        </button>

        {missingGif && (
          <p className={style.form_error}>
            Отсутствует gif или картинка gif'ки
          </p>
        )}
        {mainPicture && (
          <p className={style.form_error}>
            Отсутствует основная картинка проекта
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
