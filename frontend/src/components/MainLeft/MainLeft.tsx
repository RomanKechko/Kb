import { FC } from "react";
import style from "./MainLeft.module.css";

const MainLeftComponent: FC = () => {
  return (
    <>
      <section className={style.section}>
        <h1 className={style.title}>Разработка конструторской документации </h1>
        <p className={style.text}>
          Занимаемся разработкой уже 5 лет <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          officia recusandae ex deleniti excepturi quidem vero eligendi
          laboriosam laborum adipisci libero accusantium corporis voluptas
          praesentium, ducimus explicabo necessitatibus assumenda fugit illo
          quam cumque dicta voluptate, modi voluptatem. Labore, maiores nam?
        </p>
        <p className={style.text}>
          В среднем срок выполнения 3 недели <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ad!
          Commodi, recusandae quam, ea qui ab quasi eum explicabo eius
          voluptatum itaque, harum provident distinctio consequatur.
        </p>
        <p className={style.contacts}>
          Контакты: <span>89133242322</span>
        </p>
      </section>
    </>
  );
};

export default MainLeftComponent;