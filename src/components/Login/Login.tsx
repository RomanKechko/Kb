"use client";

import { useState } from "react";
import style from "./Login.module.css";

const Login = () => {
  const [userData, setUserData] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { login, password } = userData;
    if (!login || !password) {
      return;
    }
  }

  function dataEntry(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  return (
    <div className={style.conteiner}>
      <form onSubmit={handleSubmit} className={style.from}>
        <label className={style.label}>
          Логин: <br />{" "}
          <input
            name="login"
            value={userData.login}
            onChange={dataEntry}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Пароль: <br />
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={dataEntry}
            className={style.input}
          />
        </label>
        <button type="submit" className={style.button}>
          Войти
        </button>
      </form>
    </div>
  );
};
export default Login;
