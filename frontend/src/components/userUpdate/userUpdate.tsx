'use client'

import { useAppDispatch, useAppSelector } from '@/services/hooks'
import { getProjects } from '@/services/projects/projectsSlice'
import { currentUserRequest } from '@/services/user/userSlice'
import React, { useEffect } from 'react'
import style from './userUpdate.module.css'

interface IUserUpdateProps {
  children: React.ReactNode
}

export default function UserUpdate ({ children }: IUserUpdateProps) {
  const isAuthCheck = useAppSelector(state => state.user.isAuthCheck)
  const dispatch = useAppDispatch()
  const isDataCheck = useAppSelector(state => state.projects.isDataCheck)
  const downloadError = useAppSelector(state => state.projects.downloadError)

  useEffect(() => {
    dispatch(currentUserRequest())
    dispatch(getProjects())
  }, [])

  return !isAuthCheck || !isDataCheck ? (
    <h2 className={style.title}>loading...</h2>
  ) : downloadError ? (
    <h2 className={style.title}>Проблемы с подключением к серверу</h2>
  ) : (
    children
  )
}
