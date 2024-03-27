import style from './formInput.module.css'
import React from 'react'

interface IFormInputProps {
  title: string
  id: string
  name: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  customValidity: string
}

export default function FormInput ({
  title,
  id,
  name,
  value,
  onChange,
  customValidity
}: IFormInputProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={style.form_label}>
        {title}:
      </label>
      {customValidity && name === customValidity && (
        <p className={style.form_error}>Поле должно быть заполнено</p>
      )}
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.form__input}
        autoComplete='off'
      />
    </li>
  )
}
