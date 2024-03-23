import style from './formTextarea.module.css'
import React from 'react'

interface IFormTextareaProps {
  title: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  customValidity: string;
}

export default function FormTextarea ({
  title,
  id,
  name,
  value,
  onChange,
  customValidity
}: IFormTextareaProps) {
  return (
    <li className={style.form__item}>
      <label htmlFor={id} className={style.form_label}>
        {title}:
      </label>
      {customValidity && name === customValidity && (
        <p className={style.form_error}>Поле должно быть заполнено</p>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={style.form__input}
        autoComplete='off'
      />
    </li>
  )
};
