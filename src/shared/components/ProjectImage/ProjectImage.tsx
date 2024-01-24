import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import style from "./ProjectImage.css";
import { Controls } from "../Controls";

type Image = null | number;
export function ProjectImageComponent({ ingredient }: any) {
  const [currentImage, setCurrentImage] = useState<Image>(null);
  const [autoSlide, setAutoSlide] = useState(true); // Добавлено состояние для автоматического перелистывания

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = ingredient.length;
  const countTracker = (count: number) => setCurrentImage(count);

  useEffect(() => {
    // Запуск автоматического перелистывания при монтировании компонента
    startAutoSlide();

    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    // Обработка изменения состояния текущего слайда
    if (autoSlide && currentImage !== null) {
      startAutoSlide();
    }
  }, [currentImage, autoSlide]);

  const startAutoSlide = () => {
    // Запуск автоматического перелистывания с интервалом в 2000 миллисекунд
    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setAutoSlide(false); // Отключение автоматического перелистывания при взаимодействии пользователя
      handleIncrement();
    }, 2000);
  };

  const handleIncrement = () => {
    setAutoSlide(false);
    setCurrentImage((prevCount) =>
      prevCount === null || prevCount === ingredient.length - 1
        ? 0
        : prevCount + 1
    );
  };

  return (
    <div className={style.container__image}>
      {currentImage !== null && (
        <img
          className={style.image}
          src={ingredient[currentImage]}
          alt="кот"
          onMouseEnter={() => setAutoSlide(false)} // Отключение автоматического перелистывания при наведении курсора
          onMouseLeave={() => setAutoSlide(true)} // Включение автоматического перелистывания при уходе курсора
        />
      )}
      <Controls
        Count={countTracker}
        totalImages={totalImages}
        currentImage={currentImage}
        data={ingredient}
      />
    </div>
  );
}

export const ProjectImage = hot(ProjectImageComponent);
/*   const data = [
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
  ); */
