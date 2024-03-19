import style from "./FormInput.module.css";
import React, { FC } from "react";

interface IFormInputProps {
  title: string;
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  customValidity: string;
}

const FormInput: FC<IFormInputProps> = ({
  title,
  id,
  name,
  value,
  onChange,
  customValidity,
}) => {
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
        autoComplete="off"
      />
    </li>
  );
};

export default FormInput;
