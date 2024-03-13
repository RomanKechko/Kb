import style from './FormInput.module.css'
import React from 'react'

interface IFormInputProps {
  title: string
  id: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function FormInput ({
  title,
  id,
  name,
  value,
  onChange
}: IFormInputProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={style.form_label}>
        {title}:
      </label>
      <input
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