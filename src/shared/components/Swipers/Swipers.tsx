import "./Swipers.global.css";

import React, { FC, useCallback, useState } from "react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";

import { hot } from "react-hot-loader/root";

import { Ingredient } from "../../utils/type";
import { Swiper as SwiperInterface } from "swiper";
import { Link, useParams } from "react-router-dom";

type SwiperProps = {
  ingredient: Ingredient;
  slideRef: React.RefObject<SwiperRef>;
};

const SwiperComponent: FC<SwiperProps> = ({ ingredient, slideRef }) => {
  const { id } = useParams();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(
    null
  );
  const onThumbsSwiper = useCallback(
    (swiper) => {
      if (swiper !== null) {
        setThumbsSwiper(swiper);
      }
    },
    [setThumbsSwiper]
  );

  const images = ingredient.images;

  return (
    <>
      <div className="container">
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
            <SwiperSlide key={index}>
              <Link to={`/product/${id}/${image}`}>
                <img
                  src={images[image as keyof typeof images]}
                  alt={image}
                  className="slide_image"
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
              >
                <img
                  src={images[image as keyof typeof images]}
                  alt={image}
                  style={{ width: "100%" }}
                />
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
    </>
  );
};
export const Swipers = hot(SwiperComponent);
