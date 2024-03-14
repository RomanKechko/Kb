import style from './FormTextarea.module.css'
import React, { FC } from 'react'

interface IFormTextareaProps {
  title: string
  id: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

const FormTextarea: FC<IFormTextareaProps> = ({
  title,
  id,
  name,
  value,
  onChange
}) => {
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

export default FormTextarea