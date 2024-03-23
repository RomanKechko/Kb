import { useAppDispatch } from '@/services/hooks'
import {
  delProject,
  serverResponseAgreement
} from '@/services/projectManagement/projectManagement'
import React from 'react'
import style from './modalMessage.module.css'

interface IModalMessageProps {
  sendingStatus?: boolean
  sendingError?: boolean
  deleteProject?: boolean
  setDeleteProject?: (value: boolean) => void
  id?: number
  deletionError?: boolean
}

export default function ModalMessage ({
  sendingStatus,
  sendingError,
  deleteProject,
  setDeleteProject,
  deletionError,
  id
}: IModalMessageProps) {
  const dispatch = useAppDispatch()

  function closeModal () {
    if (sendingStatus || sendingError || deletionError) {
      dispatch(serverResponseAgreement())
      setDeleteProject && setDeleteProject(false)
    } else if (deleteProject && id) {
      dispatch(delProject(id))
    }
  }

  return (
    <div className={style.container}>
      <div className={style.modal_container}>
        <p
          className={
            deleteProject
              ? `${style.modal_text_delete}`
              : `${style.modal_text}`
          }
        >
          {(sendingStatus && 'Проект загружен на сервер') ||
            (sendingError && 'Возникла ошибка при загрузке') ||
            (deleteProject &&
              !deletionError &&
              'Вы уверены, что хотите удалить проект?') ||
            (deletionError && 'Возникла ошибка при удалении')}
        </p>
        {(sendingStatus || sendingError || deletionError) && (
          <button onClick={closeModal} className={style.modal_button}>
            ок
          </button>
        )}
        {deleteProject && !deletionError && (
          <div className={style.modal_container_button}>
            <button onClick={closeModal} className={style.modal_button}>
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
    </div>
  )
}
