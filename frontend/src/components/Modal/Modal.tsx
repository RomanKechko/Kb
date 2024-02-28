"use client";
import React, { FC, useEffect, useState } from "react";

import { data } from "@/data";
import style from "./Modal.module.css";
import cross from "../../images/cross.png";
import ModalOverlayComponent from "../ModalOverlay/ModalOverlay";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  /*   const ingredientId = data.findIndex((item) => item._id === project);
  const [images, setImages] = useState(data[ingredientId].images);
  const [src, setSrc] = useState(images[modalId as keyof typeof images]);

  useEffect(() => {
    const ingredient = data[ingredientId];
    setImages(ingredient.images);
    setSrc(ingredient.images[modalId as keyof typeof ingredient.images]);
  }, [project, modalId]);
  function onClose() {
    router.push(`/${project}?modalId=${modalId}`);
  }

  function onClick() {
    const imagesKeys = Object.keys(images);
    let nextIndex = (imagesKeys.indexOf(modalId) + 1) % imagesKeys.length;
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
  }, []); */

  return (
    <>
      <div className={`${style.modal}`}>
        {/*     <button onClick={onClose} className={style.modal__cross}>
          <Image src={cross} alt="cross" className={style.cross__image} />
        </button>
        <Image
          src={src!}
          alt={modalId}
          className={style.modal__image}
          onClick={onClick}
          width={800}
          height={800}
        /> */}
      </div>
      {/*    <ModalOverlayComponent closeModal={onClose} /> */}
    </>
  );
};

export default ModalComponent;
