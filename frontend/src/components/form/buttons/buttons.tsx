import React from 'react'
import style from './buttons.module.css'
import { useAppDispatch, useAppSelector } from '@/services/hooks'
import { useRouter } from 'next/navigation'
import { logoutUserRequest } from '@/services/user/userSlice'

interface IButtonsProps {
  missingGif: boolean
  mainPicture: boolean
  customValidity: string
}

export default function Buttons ({
  missingGif,
  mainPicture,
  customValidity
}: IButtonsProps) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  function logout () {
    dispatch(logoutUserRequest())
    router.push('/')
  }

  const loading = useAppSelector(
    state => state.projectManagement.loadingProject
  )

  return (
    <div className={style.container}>
      <div className={style.pseudo_container}></div>
      <div className={style.pseudo_container_button}>
        <button
          type='submit'
          className={style.button}
          disabled={mainPicture || missingGif || customValidity !== ''}
        >
          {loading ? 'Данные отправляются' : 'Отправить данные'}
        </button>

        {missingGif && (
          <p className={style.form_error}>
            Отсутствует gif или картинка gif'ки
          </p>
        )}
        {mainPicture && (
          <p className={style.form_error}>
            Отсутствует основная картинка проекта
          </p>
        )}
      </div>
      <button type='button' onClick={logout} className={style.button_exit}>
        ВЫЙТИ ИЗ КАБИНЕТА
      </button>
    </div>
  )
}
