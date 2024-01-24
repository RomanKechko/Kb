/* import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import style from "./ProjectImage.css";

export function ProjectImageComponent({ ingredient }: any) {
  console.log(ingredient);

  const { image_large, image_mobile, image } = ingredient;
  const [data, setdata] = useState([image_large, image_mobile, image]);

  return (
    <>
      <div className={style.container__image}>
        {ingredient && <img src={image_large} alt="" className={style.image} />}
        <div>
          <img src={image_mobile} alt="" />
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
export const ProjectImage = hot(ProjectImageComponent); */

/* import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import style from "./ProjectImage.css";

export function ProjectImageComponent({ ingredient }: any) {
  const [data, setData] = useState([
    ingredient.image_large,
    ingredient.image_mobile,
    ingredient.image,
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Переход к следующей картинке
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000); // Интервал 2 секунды (настраивайте по необходимости)

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [currentIndex, data]);

  return (
    <>
      <div className={style.container__image}>
        {ingredient && (
          <img src={data[currentIndex]} alt="" className={style.image} />
        )}
        <div>
          <img src={data[(currentIndex + 1) % data.length]} alt="" />
          <img src={data[(currentIndex + 2) % data.length]} alt="" />
        </div>
      </div>
    </>
  );
}

export const ProjectImage = hot(ProjectImageComponent); */

import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import style from "./ProjectImage.css";

export function ProjectImageComponent({ ingredient }: any) {
  const data = [
    ingredient.image_large,
    ingredient.image_mobile,
    ingredient.image,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Переключение картинок каждые 3 секунды
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Интервал 3 секунды

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <div className={style.container__image}>
        {ingredient && (
          <div className={`${style.img_wrapper} ${style.image}`}>
            <img src={data[currentIndex]} alt="" />
          </div>
        )}
        <div className={`${style.img_wrapper} ${style.image}`}>
          <img src={data[(currentIndex + 1) % data.length]} alt="" />
        </div>
        <div className={`${style.img_wrapper} ${style.image}`}>
          <img src={data[(currentIndex + 2) % data.length]} alt="" />
        </div>
      </div>
    </>
  );
}

export const ProjectImage = hot(ProjectImageComponent);
