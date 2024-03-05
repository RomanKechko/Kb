"use client";
import { FC } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import image from "../../images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/services/hooks";

const HeaderComponent: FC = () => {
  const pathname = usePathname();
  const Auth = useAppSelector((state) => state.user.isAuth);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.conteiner}>
          <div className={styles.title}>
            <Image
              priority={true}
              src={image}
              alt="КБГлобал"
              width={306}
              height={71}
              className={styles.logo}
            />
          </div>

          <div className={styles.link__row}>
            <span className={styles.trait}></span>
            <Link
              href="/"
              className={pathname === "/" ? styles.active_link : styles.link}
            >
              Портфолио
            </Link>
            <Link
              href="/price"
              className={
                pathname === "/price" ? styles.active_link : styles.link
              }
            >
              <p> Прайс</p>
            </Link>{" "}
            <span className={styles.trait}></span>
            {Auth && (
              <>
                <span className={styles.trait}></span>
                <Link
                  href="/project-addition"
                  className={
                    pathname === "/project-addition"
                      ? styles.active_link
                      : styles.link
                  }
                >
                  Кабинет
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
