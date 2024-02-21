"use client";
import { Ingredient } from "@/utils/type";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProjectFeed.global.css";
import { Pagination } from "swiper/modules";
import { data } from "@/data";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
const ProjectFeedComponent: FC = () => {
  return (
    <div className="conteiner_top">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item: Ingredient) => (
          <SwiperSlide>
            <Image
              src={item.images.image}
              alt={item.name}
              width={200}
              height={120}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProjectFeedComponent;
