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
import pdf from "@/images/png.png";
import videoBadge from "@/images/videoBadge.png";

import DocumentComponent from "../DocumentComponent/DocumentComponent";
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

  const number = Object.keys(ingredient.images).length;
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
        {Object.keys(images).map((image: string, index: number) =>
          image === "pdf" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${image}`} className="link">
                <iframe
                  src={images[image as keyof typeof images]!}
                  className="swiper_iframe"
                ></iframe>
              </Link>
            </SwiperSlide>
          ) : image === "gif" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${image}`} className="link">
                <Image
                  src={images[image as keyof typeof images]!}
                  alt={image}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </SwiperSlide>
          ) : image === "video" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${image}`} className="link">
                <iframe
                  src={images[image as keyof typeof images]!}
                  allow="fullscreen"
                  className="swiper_iframe"
                ></iframe>
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index} className="swiperrrr">
              <Link href={`/${project}/${image}`} className="link">
                <Image
                  src={images[image as keyof typeof images]!}
                  alt={image}
                  className="slider-image"
                  width={400}
                  height={400}
                />
              </Link>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <Swiper
        onSwiper={onThumbsSwiper}
        spaceBetween={10}
        slidesPerView={number}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper1"
      >
        <>
          {Object.keys(images).map((image: string, index: number) =>
            image === "pdf" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <Image
                  src={pdf}
                  alt={image}
                  width={400}
                  height={400}
                  style={{ width: "43%", height: "auto" }}
                />
              </SwiperSlide>
            ) : image === "gif" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <Image
                  src={images[image as keyof typeof images]!}
                  alt={image}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ) : image === "video" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <iframe
                  src={images[image as keyof typeof images]!}
                  allow="fullscreen"
                  className="swiper_iframe"
                  width="480"
                  height="480"
                ></iframe>
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <Image
                  src={images[image as keyof typeof images]!}
                  alt={image}
                  width={400}
                  height={400}
                />
              </SwiperSlide>
            )
          )}
        </>
      </Swiper>
    </div>
  );
};
export default ProjectSliderComponent;
