"use client";
import React, { FC, useEffect, useState } from "react";

import { data } from "@/data";
import style from "./Modal.module.css";
import cross from "../../images/cross-white.png";
import ModalOverlayComponent from "../ModalOverlay/ModalOverlay";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import left from "../../images/left.png";
import right from "../../images/right.png";

interface ParamTypes {
  project: string;
  modalId: string;
}

const ModalComponent: FC = () => {
  const router = useRouter();
  const { project, modalId } = useParams<{
    project: string;
    modalId: string;
  }>() as ParamTypes;
  const ingredientId = data.findIndex((item) => item._id === project);
  const [images, setImages] = useState(data[ingredientId].images);
  const [src, setSrc] = useState(images[modalId as keyof typeof images]);
  console.log(images);
  useEffect(() => {
    const ingredient = data[ingredientId];
    setImages(ingredient.images);
    setSrc(ingredient.images[modalId as keyof typeof ingredient.images]);
  }, [project, modalId]);

  function onClose() {
    router.push(`/${project}?modalId=${modalId}`);
  }

  function next() {
    const imagesKeys = Object.keys(images);
    console.log(imagesKeys);
    let nextIndex = (imagesKeys.indexOf(modalId) + 1) % imagesKeys.length;
    router.push(`/${project}/${imagesKeys[nextIndex]}`);
  }
  function previous() {
    const imagesKeys = Object.keys(images);

    let nextIndex =
      imagesKeys.indexOf(modalId) - 1 < 0
        ? imagesKeys.length - 1
        : imagesKeys.indexOf(modalId) - 1;
    router.push(`/${project}/${imagesKeys[nextIndex]}`);
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && onClose();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <div className={`${style.modal}`}>
        <button onClick={onClose} className={style.modal__cross}>
          <Image src={cross} alt="cross" className={style.cross__image} />
        </button>
        <div className={style.container}>
          <button className={style.button} onClick={previous}>
            <Image
              src={left}
              alt="стрелка вправо"
              className={style.direction}
            />
          </button>
          {modalId === "pdf" ? (
            <iframe src={src!} className={style.iframe}></iframe>
          ) : modalId === "gif" ? (
            <Image
              src={src!}
              alt={modalId}
              className={style.modal__image}
              width={800}
              height={800}
            />
          ) : modalId === "video" ? (
            <iframe
              src={src!}
              allowFullScreen
              className={style.iframe}
            ></iframe>
          ) : (
            <Image
              src={src!}
              alt={modalId}
              className={style.modal__image}
              width={800}
              height={800}
            />
          )}{" "}
          <button className={style.button} onClick={next}>
            <Image
              src={right}
              alt="стрелка вправо"
              className={style.direction}
            />
          </button>
        </div>
      </div>

      <ModalOverlayComponent closeModal={onClose} />
    </>
  );
};

export default ModalComponent;
