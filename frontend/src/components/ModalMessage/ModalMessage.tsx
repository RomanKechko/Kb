import { useAppDispatch } from "@/services/hooks";
import {
  delProject,
  serverResponseAgreement,
} from "@/services/projectManagement/projectManagement";
import React, { FC } from "react";
import style from "./ModalMessage.module.css";

interface IModalMessageProps {
  sendingStatus?: boolean;
  sendingError?: boolean;
  deleteProject?: boolean;
  setDeleteProject?: (value: boolean) => void;
  id?: number;
  deletionError?: boolean;
}

const ModalMessage: FC<IModalMessageProps> = (props) => {
  const {
    sendingStatus,
    sendingError,
    deleteProject,
    setDeleteProject,
    deletionError,
  } = props;
  const dispatch = useAppDispatch();

  function closeModal(item: IModalMessageProps) {
    const {
      sendingStatus,
      sendingError,
      deleteProject,
      setDeleteProject,
      id,
      deletionError,
    } = item;
    if (sendingStatus || sendingError || deletionError) {
      dispatch(serverResponseAgreement());
      setDeleteProject && setDeleteProject(false);
    } else if (deleteProject) {
      dispatch(delProject(id as number));
    }
  }
  console.log("в модалке deleteProject", deleteProject);
  console.log("в модалке deletionError", deletionError);
  return (
    <div className={style.modal_container}>
      <p
        className={
          deleteProject ? `${style.modal_text_delete}` : `${style.modal_text}`
        }
      >
        {(sendingStatus && "Проект загружен на сервер") ||
          (sendingError && "Возникла ошибка при загрузке") ||
          (deleteProject &&
            !deletionError &&
            "Вы уверены, что хотите удалить проект?") ||
          (deletionError && "Возникла ошибка при удалении")}
      </p>
      {(sendingStatus || sendingError || deletionError) && (
        <button
          onClick={() => closeModal(props)}
          className={style.modal_button}
        >
          ок
        </button>
      )}
      {deleteProject && !deletionError && (
        <div className={style.modal_container_button}>
          <button
            onClick={() => closeModal(props)}
            className={style.modal_button}
          >
            Да
          </button>
          <button
            onClick={() => setDeleteProject && setDeleteProject(false)}
            className={style.modal_button}
          >
            Нет
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalMessage;
