import React, { FC, useCallback, useState } from "react";
import "./Swipers.global.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperInterface } from "swiper";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IData } from "@/utils/interface";
import pdf from "../../../images/pdf.png";
import Image from "next/image";
import word from "../../images/word.png";

type SwiperProps = {
  projectData: IData;
  slideRef: React.RefObject<SwiperRef>;
};
interface ParamTypes {
  project: string;
}
const ProjectSliderComponent: FC<SwiperProps> = ({ projectData, slideRef }) => {
  const { project } = useParams<{ project: string }>() as ParamTypes;
  const images = projectData.images;
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

  const number = Object.keys(projectData.images).length;
  //100% карточки модалки идут по порялку
  const renderOrder = ["gif", "image_1", "image_2", "image_3", "pdf", "video"];
  const sortedKeys = Object.keys(images).sort((a, b) => {
    return renderOrder.indexOf(a) - renderOrder.indexOf(b);
  });
  //100% карточки модалки идут по порялку

  //Проверка существования gif и смещение слайдера на 1
  const indexSwiper: number = sortedKeys.findIndex((item) =>
    item === "gif" ? 1 : 0
  );
  const indexToSlide = indexSwiper >= 0 ? 1 : 0;
  //Проверка существования gif и смещение слайдера на 1

  return (
    <div className="container_bottom">
      <Swiper
        ref={slideRef}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[FreeMode, Navigation, /*  Autoplay, */ Thumbs]}
        className="mySwiper2"
        /*    autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }} */
      >
        {sortedKeys.map((item: string, index: number) =>
          item === "gif-image" ? (
            ""
          ) : item === "gif" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${item}`} className="link">
                <img
                  src={images[item as keyof typeof images]}
                  alt={item}
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
            </SwiperSlide>
          ) : item === "pdf" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${item}`} className="link">
                <iframe
                  src={images[item as keyof typeof images]}
                  className="swiper_iframe"
                ></iframe>
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index} className="swiperrrr">
              <Link href={`/${project}/${item}`} className="link">
                <img
                  src={images[item as keyof typeof images]}
                  alt={item}
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
          {sortedKeys.map((item: string, index: number) =>
            item === "gif" ? (
              ""
            ) : item === "gif-image" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <img
                  src={images[item as keyof typeof images]}
                  alt={item}
                  width={400}
                  height={400}
                />
              </SwiperSlide>
            ) : item === "pdf" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current &&
                  slideRef.current.swiper.slideTo(index - indexToSlide)
                }
                className="swiperrrr"
              >
                <Image
                  src={pdf}
                  alt={item}
                  width={400}
                  height={400}
                  style={{ width: "60%", height: "auto" }}
                />
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current &&
                  slideRef.current.swiper.slideTo(index - indexToSlide)
                }
                className="swiperrrr"
              >
                <img
                  src={images[item as keyof typeof images]}
                  alt={item}
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