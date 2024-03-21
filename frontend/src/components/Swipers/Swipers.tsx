"use client";

import ProjectFeedComponent from "./ProjectFeed/ProjectFeed";
import { FC } from "react";
import { Ingredient } from "@/utils/type";
import { SwiperRef } from "swiper/react";
import ProjectSliderComponent from "./ProjectSlider/ProjectSlider";
import style from "./Swipers.module.css";
import { IData } from "@/utils/interface";
type SwiperProps = {
  projectData: IData;
  slideRef: React.RefObject<SwiperRef>;
};

const SwiperComponent: FC<SwiperProps> = ({ projectData, slideRef }) => {
  return (
    <>
      <div className={style.block}>
        <ProjectFeedComponent />
        <ProjectSliderComponent projectData={projectData} slideRef={slideRef} />
      </div>
    </>
  );
};
export default SwiperComponent;
