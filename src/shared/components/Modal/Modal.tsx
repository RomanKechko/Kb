import React, { FC, ReactNode, useEffect } from "react";

import { createPortal } from "react-dom";
import { hot } from "react-hot-loader/root";
import style from "./Modal.css";
import { ModalOverlay } from "../ModalOverlay";
import cross from "../../images/cross.png";

interface ModalProps {
  children?: ReactNode;
  closeModal: () => void;
  isModalOpen?: boolean;
}

const ModalComponent: FC<ModalProps> = ({
  closeModal,
  children,
  isModalOpen,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === "Escape" && closeModal();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return createPortal(
    <>
      <div className={`${style.modal} ${isModalOpen ? "" : style.hidden}`}>
        <button onClick={closeModal} className={style.modal__cross}>
          <img src={cross} alt="cross" className={style.cross__image} />
        </button>
        {children}
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>,
    document.getElementById("modal")!
  );
};

export const Modal = hot(ModalComponent);
