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
import { useAppSelector } from "@/services/hooks";
import { IData, IDataImage } from "@/utils/interface";

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
  const data: IData[] = useAppSelector(
    (state) => state.projects?.projectsData as IData[]
  );
  const projectId = data.findIndex((item) => item._id === project);

  const [images, setImages] = useState(data[projectId].images as IDataImage);

  const [src, setSrc] = useState(images[modalId as keyof typeof images]);

  useEffect(() => {
    const projectData = data[projectId];
    setImages(projectData.images);
    setSrc(projectData.images[modalId as keyof typeof projectData.images]);
  }, [project, modalId]);

  function onClose() {
    router.push(`/${project}?modalId=${modalId}`);
  }

  function next() {
    const fileKeys = Object.keys(images);
    let nextIndex = (fileKeys.indexOf(modalId) + 1) % fileKeys.length;
    router.push(`/${project}/${fileKeys[nextIndex]}`);
  }

  function previous() {
    const fileKeys = Object.keys(images);
    let nextIndex =
      fileKeys.indexOf(modalId) - 1 < 0
        ? fileKeys.length - 1
        : fileKeys.indexOf(modalId) - 1;
    router.push(`/${project}/${fileKeys[nextIndex]}`);
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
      <div className={style.modal}>
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
          {modalId === "pdf" || modalId === "video" ? (
            <iframe src={src!} className={style.iframe}></iframe>
          ) : modalId === "word" ? (
            ""
          ) : modalId === "gif" ? (
            <img
              src={src!}
              alt={modalId}
              className={style.modal__image}
              width={800}
              height={800}
            />
          ) : (
            <img
              src={src!}
              alt={modalId}
              className={style.modal__image}
              width={800}
              height={800}
            />
          )}
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
