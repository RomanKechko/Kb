import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Project.css";
import { data } from "../../data";
import { hot } from "react-hot-loader/root";

import left from "/../../images/left.png";

import right from "/../../images/right.png";
import { Swipers } from "../Swipers";

function ProjectComponent() {
  const { id } = useParams();
  const initialIndex = Number(id);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const navigate = useNavigate();

  const ingredient = data[currentIndex];

  function next() {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    navigate(`/product/${nextIndex}`);
  }
  function previous() {
    const nextIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1;

    setCurrentIndex(nextIndex);

    navigate(`/product/${nextIndex}`);
  }
  useEffect(() => {
    const handlePopState = () => {
      const newId = Number(window.location.pathname.split("/").pop());
      setCurrentIndex(newId);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setCurrentIndex]);

  return (
    <>
      <section className={style.container}>
        <article className={style.container__left}>
          <h2 className={style.title}>{ingredient.name}</h2>
          <p className={style.price}>Цена: {ingredient.price}</p>
          <p className={style.text}>Срок выполнения заказа: {ingredient.fat}</p>
          <p className={style.text}>Сложность: не сложно</p>
          <p className={style.description}>
            Детали выполнения заказа: <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, atque
            itaque. Accusantium iusto perferendis nobis magnam ipsa earum
            inventore impedit porro nostrum commodi Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Debitis quod eos placeat? Illum quod
            et nobis cum laboriosam harum voluptates..
          </p>
        </article>
        <button onClick={previous} className={style.button}>
          <img src={left} alt="sad" />
        </button>
        <Swipers ingredient={ingredient} currentIndex={currentIndex} />

        <button onClick={next} className={style.button}>
          <img src={right} alt="asd" />
        </button>
      </section>
    </>
  );
}

export const Project = hot(ProjectComponent);
