import style from './FormInput.module.css'
import React, { FC } from 'react'

interface IFormInputProps {
  title: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormInput: FC<IFormInputProps> = ({
  title,
  id,
  name,
  value,
  onChange,
}) => {
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

export default FormInput