import React, { FC } from "react";
import style from "./ModalOverlay.module.css";

interface ModalOverlayProps {
  closeModal: () => void;
}

const ModalOverlayComponent: FC<ModalOverlayProps> = ({ closeModal }) => {
  return <div onClick={closeModal} className={style.overlay}></div>;
};

export default ModalOverlayComponent;
