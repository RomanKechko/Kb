'use client'

import React from 'react'
import style from './projectAddition.module.css'
import Form from '@/components/form/form'

export default function ProjectAddition () {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Внести новый проект</h1>
      <Form/>
    </div>
  )
};
