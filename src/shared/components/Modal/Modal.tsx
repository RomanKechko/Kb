import React, { FC, ReactNode, useEffect } from "react";

import { createPortal } from "react-dom";
import { hot } from "react-hot-loader/root";
import style from "./Modal.css";

interface ModalProps {
  children?: ReactNode;
  closeModal: () => void;
}

const ModalComponent: FC<ModalProps> = ({ closeModal, children }) => {
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
      <div className={style.modal}>
        <button onClick={closeModal}>ЗАКРЫТО</button>
        {children}
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export const Modal = hot(ModalComponent);
