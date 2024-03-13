'use client'

import React, { FC } from 'react'
import style from './ProjectAddition.module.css'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/services/hooks'
import { logoutUserRequest } from '@/services/user/userSlice'
import Form from '@/components/Form/Form'

const ProjectAddition: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  function logout () {
    dispatch(logoutUserRequest())
    router.push('/')
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Внести новый проект</h1>
        <Form/>
      </div>
      <button type="button" onClick={logout} className={style.button_exit}>
        ВЫЙТИ ИЗ КАБИНЕТА
      </button>
    </>
  )
}
export default ProjectAddition
