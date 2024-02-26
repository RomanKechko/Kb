"use client";

import ProjectFeedComponent from "../ProjectFeed/ProjectFeed";
import { FC } from "react";
import { Ingredient } from "@/utils/type";
import { SwiperRef } from "swiper/react";
import ProjectSliderComponent from "../ProjectSlider/ProjectSlider";
import style from "./Swipers.module.css";
type SwiperProps = {
  ingredient: Ingredient;
  slideRef: React.RefObject<SwiperRef>;
};

const SwiperComponent: FC<SwiperProps> = ({ ingredient, slideRef }) => {
  return (
    <>
      <div className={style.block}>
        <ProjectFeedComponent />

        <ProjectSliderComponent ingredient={ingredient} slideRef={slideRef} />
      </div>
    </>
  );
};
export default SwiperComponent;
