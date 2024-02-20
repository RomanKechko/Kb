"use client";
import { FC, useEffect, useRef, useState } from "react";

import style from "./Project.module.css";
import { data } from "@/data";

import left from "../../images/left.png";
import right from "../../images/right.png";
import {
  notFound,
  useParams,
  useSearchParams,
} from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SwiperComponent from "../Swipers/Swipers";
import { SwiperRef } from "swiper/react";

interface ParamTypes {
  project: string;
}
type ProjectComponentType = {
  project?: string;
  searchParams?: string;
};
const ProjectComponent: FC<ProjectComponentType> = ({}) => {
  const { project } = useParams<{ project: string }>() as ParamTypes;
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalId = searchParams.get("modalId");
  const [currentIndex, setCurrentIndex] = useState(
    data.findIndex((item) => item._id === project)
  );
  const slideRef = useRef<SwiperRef>(null);
  const ingredient = data[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0 });

    setCurrentIndex(data.findIndex((item) => item._id === project));
    if (slideRef.current) {
      const slider = slideRef.current;
      if (modalId) {
        slider.swiper.slideTo(
          Object.keys(ingredient.images).findIndex((item) => item === modalId),
          0
        );
      } else {
        slider.swiper.slideTo(0, 0);
      }
    }
  }, []);

  function next() {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    router.push(`/${data[nextIndex]._id}`);
  }
  function previous() {
    const nextIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    router.push(`/${data[nextIndex]._id}`);
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.push(`/`);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  });

  if (!ingredient) {
    throw notFound();
    //   без этого блока страница ломается при попытки перейти на не сушествующую страницу
    //   тут мы проверяем найден ли ингридиент и если нет бросаем 404 ошибку
    //   раньше это не нужно было потомучто у тебя был иначе построен роутинг по страницам,
    //   ты изменил полностью построение ссылок и теперь ничего не работает без этой проверки))
  }

  return (
    <>
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
          consectetur adipisicing elit. Debitis quod eos placeat? Illum quod et
          nobis cum laboriosam harum voluptates..
        </p>
      </article>
      <button onClick={previous} className={style.button}>
        <Image src={left} alt="стрелка влево" className={style.direction} />
      </button>

      <SwiperComponent ingredient={ingredient} slideRef={slideRef} />

      <button onClick={next} className={style.button}>
        <Image src={right} alt="стрелка вправо" className={style.direction} />
      </button>
    </>
  );
};

export default ProjectComponent;
