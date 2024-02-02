import React, { useState, useEffect, useRef, FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./Project.css";
import { data } from "../../data";
import { hot } from "react-hot-loader/root";

import left from "../../images/left.png";
import right from "../../images/right.png";
import { Swipers } from "../Swipers";
import { SwiperRef } from "swiper/react";

const ProjectComponent: FC = () => {
  const { id } = useParams();
  const initialIndex = Number(id);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [myIndex, setMyIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const articleRef = useRef<HTMLElement>(null);
  const slideRef = useRef<SwiperRef>(null);

  const ingredient = data[currentIndex];

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.swiper.slideTo(myIndex);
    }
  }, [currentIndex]);

  const updatyStyles = (opacity: number) => {
    if (articleRef.current) {
      articleRef.current.style.opacity = opacity.toString();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      updatyStyles(0);
    } else {
      updatyStyles(1);
    }
  }, [isModalOpen]);

  function next() {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    navigate(`/product/${nextIndex}`);
    setMyIndex(0);
  }
  function previous() {
    const nextIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    navigate(`/product/${nextIndex}`);
    setMyIndex(0);
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
      <section className={style.container} ref={articleRef}>
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
          <img src={left} alt="стрелка влево" className={style.direction} />
        </button>
        <Swipers
          ingredient={ingredient}
          slideRef={slideRef}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <button onClick={next} className={style.button}>
          <img src={right} alt="стрелка вправо" className={style.direction} />
        </button>
      </section>
    </>
  );
};

export const Project = hot(ProjectComponent);
