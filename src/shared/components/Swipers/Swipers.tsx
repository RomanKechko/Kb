import "./Swipers.global.css";
import React, { FC, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";

import { hot } from "react-hot-loader/root";

import { Modal } from "../Modal";
import { Ingredient } from "../../utils/type";

type SwiperProps = {
  ingredient?: Ingredient | undefined;
  currentIndex?: number;
};

const SwiperComponent: FC<SwiperProps> = ({ ingredient, currentIndex }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<
    string | null | undefined
  >();

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
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
              style={{ width: "100%" }}
              onClick={() => openModal(ingredient!.image)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ingredient && ingredient.image_mobile}
              alt="slider 2"
              style={{ width: "100%" }}
              onClick={() => openModal(ingredient!.image_mobile)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ingredient && ingredient.image_large}
              alt="slider 3"
              style={{ width: "100%" }}
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
      {/*     {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img src={selectedImage!} alt="modal" style={{ width: "100%" }} />
        </Modal>
      )} */}
    </>
  );
};
export const Swipers = hot(SwiperComponent);
