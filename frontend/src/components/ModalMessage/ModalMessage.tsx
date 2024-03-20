import { useAppDispatch } from "@/services/hooks";
import { serverResponseAgreement } from "@/services/projectManagement/projectManagement";
import React, { FC } from "react";
import style from "./ModalMessage.module.css";

interface IModalMessageProps {
  sendingStatus: boolean;
  sendingError: boolean;
}

const ModalMessage: FC<IModalMessageProps> = (props) => {
  const { sendingStatus, sendingError } = props;
  const dispatch = useAppDispatch();

  function closeModal(item: IModalMessageProps) {
    const { sendingStatus, sendingError } = item;
    if (sendingStatus || sendingError) {
      dispatch(serverResponseAgreement());
    }
  }

  return (
    <div className={style.modal_container}>
      <p className={style.modal_text}>
        {sendingStatus
          ? "Проект загружен на сервер"
          : sendingError
          ? "Возникла ошибка при загрузке"
          : ""}
      </p>
      <button onClick={() => closeModal(props)} className={style.modal_button}>
        {" "}
        ок{" "}
      </button>
    </div>
  );
};

export default ModalMessage;
