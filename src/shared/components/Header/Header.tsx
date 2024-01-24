import React, { FC } from "react";
import { hot } from "react-hot-loader/root";

import styles from "./Header.css";
import { NavLink, Outlet } from "react-router-dom";

function HeaderComponent() {
  const setNavStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.active_link : styles.link;
  };
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.conteiner}>
            <p className={styles.title}>КБ ГЛОБАЛ</p>
            <div className={styles.link__row}>
              <NavLink to="/" className={setNavStyle}>
                Портфолио
              </NavLink>
              <NavLink to="/portfolio" className={setNavStyle}>
                Прайс
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export const Header = hot(HeaderComponent);
