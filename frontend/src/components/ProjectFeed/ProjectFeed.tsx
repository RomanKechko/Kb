"use client";
import { Ingredient } from "@/utils/type";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./ProjectFeed.global.css";
import { Autoplay, Pagination } from "swiper/modules";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectFeedComponent: FC = () => {
  const pathname = usePathname();
  return (
    <div className="conteiner_top">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mySwiper0"
      >
        {data.map((item: Ingredient, index: number) => (
          <SwiperSlide key={index} className="div-swipper">
            <Link
              href={`/${item._id}`}
              className={pathname === `/${item._id}` ? "active_link" : "link"}
            >
              <Image
                src={item.images.image!}
                alt={item.name}
                width={200}
                height={120}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProjectFeedComponent;
