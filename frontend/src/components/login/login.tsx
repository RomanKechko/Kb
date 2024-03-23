'use client'

import React, { useState } from 'react'
import style from './login.module.css'
import { useAppDispatch } from '@/services/hooks'
import { authUserRequest } from '@/services/user/userSlice'

export default function Login () {
  const [userData, setUserData] = useState<{
    username: string;
    password: string;
  }>({
    username: '',
    password: ''
  })
  const dispatch = useAppDispatch()

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const { username, password } = userData
    if (!username || !password) {
      return
    }
    dispatch(authUserRequest({ username, password }))
    setUserData({
      username: '',
      password: ''
    })
  }

  function dataEntry (e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget
    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.from}>
        <label className={style.label}>
          Логин: <br/>{' '}
          <input
            name='username'
            value={userData.username}
            onChange={dataEntry}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Пароль: <br/>
          <input
            name='password'
            type='password'
            value={userData.password}
            onChange={dataEntry}
            className={style.input}
          />
        </label>
        <button type='submit' className={style.button}>
          Войти
        </button>
      </form>
    </div>
  )
};
