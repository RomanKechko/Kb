"use client";

import { useState } from "react";
import style from "./Login.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { sendDataUser } from "@/lib/login/loginSlice";

const Login = () => {
  const [userData, setUserData] = useState<{
    login: string;
    password: string;
  }>({
    login: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { login, password } = userData;
    if (!login || !password) {
      return;
    }
    dispatch(sendDataUser({ login, password }));
    setUserData({
      login: "",
      password: "",
    });
  }
  const data = useAppSelector((state: any) => state.login.data);
  console.log(data);
  function dataEntry(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  return (
    <>
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
      <div>
        Это:
        {data && <p>{data.login}</p>}
      </div>
    </>
  );
};
export default Login;
