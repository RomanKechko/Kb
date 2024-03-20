import React, { FC, useCallback, useState } from "react";
import "./Swipers.global.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperInterface } from "swiper";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IData } from "@/utils/interface";
import pdf from "../../images/pdf.png";
import Image from "next/image";
import word from "../../images/word.png";
import DocumentComponent from "../DocumentComponent/DocumentComponent";

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

  console.log(projectData);

  const onThumbsSwiper = useCallback(
    (swiper: SwiperInterface) => {
      if (swiper !== null) {
        setThumbsSwiper(swiper);
      }
    },
    [setThumbsSwiper]
  );
  console.log(slideRef.current);
  const number = Object.keys(projectData.images).length;

  // При наведении мыши на gif-картинку - перелистывает на гиф
  const gifImage = Object.keys(projectData.images).findIndex(
    (item) => item === "gif"
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
        modules={[FreeMode, Navigation, /*  Autoplay, */ Thumbs]}
        className="mySwiper2"
        /*    autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }} */
      >
        {Object.keys(images).map((item: string, index: number) =>
          item === "word" || item === "gif-image" ? (
            ""
          ) : item === "pdf" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${item}`} className="link">
                <iframe
                  src={images[item as keyof typeof images]}
                  className="swiper_iframe"
                ></iframe>
              </Link>
            </SwiperSlide>
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
          ) : item === "video" ? (
            <SwiperSlide key={index}>
              <Link href={`/${project}/${item}`} className="link">
                <iframe
                  src={images[item as keyof typeof images]}
                  allow="fullscreen"
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
          {Object.keys(images).map((item: string, index: number) =>
            item === "word" || item === "gif" ? (
              ""
            ) : item === "pdf" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
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
            ) : item === "gif-image" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(gifImage)
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
            ) : item === "video" ? (
              <SwiperSlide
                key={index}
                onMouseEnter={() =>
                  slideRef.current && slideRef.current.swiper.slideTo(index)
                }
                className="swiperrrr"
              >
                <iframe
                  src={images[item as keyof typeof images]}
                  allow="fullscreen"
                  className="swiper_iframe"
                  width="400"
                  height="400"
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
