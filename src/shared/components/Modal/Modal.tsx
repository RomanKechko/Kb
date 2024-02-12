import React, { FC, useEffect, useState } from "react";

import { data } from "../../data";
import { createPortal } from "react-dom";
import { hot } from "react-hot-loader/root";
import style from "./Modal.css";
import { ModalOverlay } from "../ModalOverlay";
import cross from "../../images/cross.png";

import { useNavigate, useParams } from "react-router-dom";

interface ParamTypes {
  id: string;
  modalId: string;

}

const ModalComponent: FC = () => {
  const navigate = useNavigate();
  const { id, modalId } = useParams<{
    id: string;
    modalId: string;
  }>() as ParamTypes;

  const ingredientId = data.findIndex((item) => item._id === id);

  const [images, setImages] = useState({});
  const [src, setSrc] = useState("");

  useEffect(() => {
    const ingredient = data[ingredientId];
    setImages(ingredient.images);
    setSrc(ingredient.images[modalId as keyof typeof ingredient.images]);
  }, [id, modalId]);

  function onClose() {
    navigate(`/product/${id}`, { state: { modalId: modalId } });
  }

  function onClick() {
    const imagesKeys = Object.keys(images);
    let nextIndex = -1;
    nextIndex = (imagesKeys.indexOf(modalId) + 1) % imagesKeys.length;
    navigate(`/product/${id}/${imagesKeys[nextIndex]}`);
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

  if (typeof document === "undefined") {
    return (
      <>
        <div className={`${style.modal}`}>
          <button onClick={onClose} className={style.modal__cross}>
            <img src={cross} alt="cross" className={style.cross__image} />
          </button>
          <img
            src={src}
            alt={modalId}
            className="modal__image"
            onClick={onClick}
          />
        </div>
        <ModalOverlay closeModal={onClose} />
      </>
    );
  }

  const modalDOM = document.getElementById("modal");

  return createPortal(
    <>
      <div className={`${style.modal}`}>
        <button onClick={onClose} className={style.modal__cross}>
          <img src={cross} alt="cross" className={style.cross__image} />
        </button>
        <img
          src={src}
          alt={modalId}
          className="modal__image"
          onClick={onClick}
        />
      </div>
      <ModalOverlay closeModal={onClose} />
    </>,
    modalDOM!
  );
};

export const Modal = hot(ModalComponent);
