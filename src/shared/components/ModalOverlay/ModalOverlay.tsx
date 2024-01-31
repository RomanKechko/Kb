import React, { FC } from "react";
import style from "./ModalOverlay.css";
import { hot } from "react-hot-loader/root";

interface ModalOverlayProps {
  closeModal: () => void;
}

const ModalOverlayComponent: FC<ModalOverlayProps> = ({ closeModal }) => {
  return <div onClick={closeModal} className={style.overlay}></div>;
};

export const ModalOverlay = hot(ModalOverlayComponent);
