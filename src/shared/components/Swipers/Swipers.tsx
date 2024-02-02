import "./Swipers.global.css";
import React, { FC, useCallback, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";

import { hot } from "react-hot-loader/root";

import { Modal } from "../Modal";
import { Ingredient } from "../../utils/type";
import { Swiper as SwiperInterface } from "swiper";

type SwiperProps = {
  ingredient?: Ingredient | undefined;
  slideRef: React.RefObject<SwiperRef>;
  setIsModalOpen: (isOpen: boolean) => void;
  isModalOpen: boolean;
};

const SwiperComponent: FC<SwiperProps> = ({
  ingredient,
  slideRef,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInterface | null>(
    null
  );
  const [selectedImage, setSelectedImage] = useState<string | null | undefined>(
    null
  );

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);

    if (slideRef.current) {
      slideRef.current.swiper.autoplay.start();
    }
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);

    if (slideRef.current) {
      slideRef.current.swiper.autoplay.stop();
    }
  };
  const onThumbsSwiper = useCallback(
    (swiper) => {
      if (swiper !== null) {
        setThumbsSwiper(swiper);
      }
    },
    [setThumbsSwiper]
  );

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
          <SwiperSlide>
            <img
              src={ingredient && ingredient.image}
              alt="slider 1"
              className="slide_image"
              onClick={() => openModal(ingredient!.image)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ingredient && ingredient.image_mobile}
              alt="slider 2"
              className="slide_image"
              onClick={() => openModal(ingredient!.image_mobile)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ingredient && ingredient.image_large}
              alt="slider 3"
              className="slide_image"
              onClick={() => openModal(ingredient!.image_large)}
            />
          </SwiperSlide>
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
            <SwiperSlide>
              <img
                src={ingredient && ingredient.image}
                alt="slider 1"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ingredient && ingredient.image_mobile}
                alt="slider 2"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ingredient && ingredient.image_large}
                alt="slider 3"
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          </>
        </Swiper>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal} isModalOpen={isModalOpen}>
          <img
            src={selectedImage!}
            alt="modal image"
            className="modal__image"
          />
        </Modal>
      )}
    </>
  );
};
export const Swipers = hot(SwiperComponent);
