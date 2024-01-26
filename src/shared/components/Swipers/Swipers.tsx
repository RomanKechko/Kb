import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Autoplay, FreeMode, Thumbs } from "swiper/modules";

import { hot } from "react-hot-loader/root";

import { data } from "../../data";
import { Modal } from "../Modal";

function SwiperComponent() {
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
      <div className="container ">
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
          {data.map((item, index) => (
            <>
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt="slider 1"
                  style={{ width: "100%" }}
                  onClick={() => openModal(item.image)}
                />
              </SwiperSlide>
              <SwiperSlide key={index}>
                <img
                  src={item.image_mobile}
                  alt="slider 2"
                  style={{ width: "100%" }}
                  onClick={() => openModal(item.image_mobile)}
                />
              </SwiperSlide>
              <SwiperSlide key={index}>
                <img
                  src={item.image_large}
                  alt="slider 3"
                  style={{ width: "100%" }}
                  onClick={() => openModal(item.image_large)}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <Swiper
          onSwiper={onThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <>
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt="slider 1"
                  style={{ width: "100%" }}
                />
              </SwiperSlide>
              <SwiperSlide key={index}>
                <img
                  src={item.image_mobile}
                  alt="slider 2"
                  style={{ width: "100%" }}
                />
              </SwiperSlide>
              <SwiperSlide key={index}>
                <img
                  src={item.image_large}
                  alt="slider 3"
                  style={{ width: "100%" }}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <img src={selectedImage!} alt="modal" style={{ width: "100%" }} />
          </Modal>
        )}
      </div>
    </>
  );
}
export const Swipers = hot(SwiperComponent);
