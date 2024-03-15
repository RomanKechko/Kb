import style from "./FormFileInput.module.css";
import React, { FC } from "react";

interface IFormFileInputProps {
  title: string;
  id: string;
  name: string;
  accept: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const FormFileInput: FC<IFormFileInputProps> = ({
  title,
  id,
  name,
  accept,
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
        type="file"
        accept={accept}
        onChange={onChange}
        className={style.form__input}
      />
    </li>
  );
};

export default FormFileInput;
