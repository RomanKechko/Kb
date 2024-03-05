import { FC } from "react";
import style from "./MainLeft.module.css";

const MainLeftComponent: FC = () => {
  return (
    <>
      <section className={style.section}>
        <h1 className={style.title}>Выполняем работы по ТЗ</h1>
        <button className={style.button}>Скачать бланк договора</button>
        <p className={style.text}>
          В нашем коллективе работают 2 Главных Конструктора и 2 Ведущих
          Конструктора. Основная специализация всех сотрудников – это
          машиностроение и металлоконструкции. С выполненными за последние годы
          проектами можно ознакомиться в Библиотеке проектов.
        </p>
      </section>
    </>
  );
};

export default MainLeftComponent;
