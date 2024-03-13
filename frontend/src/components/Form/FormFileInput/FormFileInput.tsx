import style from './FormFileInput.module.css'
import React from 'react'

interface IFormFileInputProps {
  title: string
  id: string
  name: string
  accept: string
  stopCount?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FormFileInput ({
  title,
  id,
  name,
  accept,
  stopCount,
  onChange,
}: IFormFileInputProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={`${style.form_label} ${stopCount?style.stopCount:''}`}>
        {title}:
      </label>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        onChange={onChange}
        className={style.form__input}
      />
    </li>
  )
}