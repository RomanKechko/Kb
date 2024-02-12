import React, { useState, useEffect, useRef, FC } from "react";

import { useParams, useNavigate, useLocation } from "react-router-dom";
import style from "./Project.css";
import { data } from "../../data";
import { hot } from "react-hot-loader/root";

import left from "../../images/left.png";
import right from "../../images/right.png";
import { Swipers } from "../Swipers";
import { SwiperRef } from "swiper/react";

interface ParamTypes {
  id: string;
}

const ProjectComponent: FC = () => {
  const { id } = useParams<{ id: string }>() as ParamTypes;
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(
    data.findIndex((item) => item._id === id)
  );

  const articleRef = useRef<HTMLElement>(null);
  const slideRef = useRef<SwiperRef>(null);
  const ingredient = data[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setCurrentIndex(data.findIndex((item) => item._id === id));
    if (slideRef.current) {
      const slider = slideRef.current;
      if (location.state?.modalId) {
        slider.swiper.slideTo(
          Object.keys(ingredient.images).findIndex(
            (item) => item === location.state.modalId
          ),
          0
        );
      } else {
        slider.swiper.slideTo(0, 0);
      }
    }
  });

  function next() {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    navigate(`/product/${data[nextIndex]._id}`);
  }
  function previous() {
    const nextIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    navigate(`/product/${data[nextIndex]._id}`);
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(`/`);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  });

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

        <Swipers ingredient={ingredient} slideRef={slideRef} />

        <button onClick={next} className={style.button}>
          <img src={right} alt="стрелка вправо" className={style.direction} />
        </button>
      </section>
    </>
  );
};

export const Project = hot(ProjectComponent);
