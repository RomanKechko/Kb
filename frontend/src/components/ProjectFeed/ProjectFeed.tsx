"use client";
import { Ingredient } from "@/utils/type";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProjectFeed.global.css";
import { Pagination } from "swiper/modules";
import { data } from "@/data";
import Image from "next/image";

const ProjectFeedComponent: FC = () => {
  return (
    <div className="conteiner_top">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
        {data.map((item: Ingredient, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src={item.images.image!}
              alt={item.name}
              style={{ width: "100%", height: "auto" }}
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
