"use client";
import styles from "./header.module.css";
import Link from "next/link";
import image from "../../images/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/services/hooks";

export default function Header () {
  const pathname = usePathname();
  const Auth = useAppSelector((state) => state.user.isAuth);

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
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
            <Link
              href="/"
              className={pathname === "/" ? styles.active_link : styles.link}
            >
              <p>Библиотека проектов</p>
            </Link>
            <Link
              href="/price"
              className={
                pathname === "/price" ? styles.active_link : styles.link
              }
            >
              <p> Прайс</p>
            </Link>{" "}
            {Auth && (
              <>
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
            <span
              className={
                pathname === "/price" || pathname === "/project-addition"
                  ? styles.trait
                  : ""
              }
            ></span>
          </div>
        </div>
      </nav>
    </header>
  );
};
