import React, { FC, useCallback, useState } from "react";

import "./Swipers.global.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  FreeMode,
  Thumbs,
  Pagination,
} from "swiper/modules";

import { Ingredient } from "../../utils/type";
import { Swiper as SwiperInterface } from "swiper";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type SwiperProps = {
  ingredient: Ingredient;
  slideRef: React.RefObject<SwiperRef>;
};
interface ParamTypes {
  project: string;
}
const ProjectSliderComponent: FC<SwiperProps> = ({ ingredient, slideRef }) => {
  const { project } = useParams<{ project: string }>() as ParamTypes;
  const images = ingredient.images;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(
    null
  );
  const onThumbsSwiper = useCallback(
    (swiper: SwiperInterface) => {
      if (swiper !== null) {
        setThumbsSwiper(swiper);
      }
    },
    [setThumbsSwiper]
  );
  return (
    <div className="container_bottom">
      <Swiper
        ref={slideRef}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[FreeMode, Navigation, Autoplay, Thumbs]}
        className="mySwiper2"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {Object.keys(images).map((image: string, index: number) => (
          <SwiperSlide key={index} className="swiperrrr">
            <Link href={`/${project}/${image}`} className="link">
              <Image
                src={images[image as keyof typeof images]}
                alt={image}
                style={{ width: "100%", height: "auto" }}
                width={400}
                height={400}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={onThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <>
          {Object.keys(images).map((image: string, index: number) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() =>
                slideRef.current && slideRef.current.swiper.slideTo(index)
              }
              className="swiperrrr"
            >
              <Image
                src={images[image as keyof typeof images]}
                alt={image}
                style={{ width: "100%", height: "auto" }}
                width={400}
                height={400}
              />
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};
export default ProjectSliderComponent;
