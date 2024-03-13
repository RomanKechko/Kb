import style from './FormTextarea.module.css'
import React from 'react'

interface IFormTextareaProps {
  title: string
  id: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export default function FormTextarea ({
  title,
  id,
  name,
  value,
  onChange
}: IFormTextareaProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={style.form_label}>
        {title}:
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.form__input}
        autoComplete="off"
        required={true}
      />
    </li>
  )
}