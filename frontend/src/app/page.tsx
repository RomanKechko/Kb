import styles from "./page.module.css";
import MainLeftComponent from "@/components/MainLeft/MainLeft";
import MainRightComponent from "@/components/MainRight/MainRight";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainLeftComponent />
        <MainRightComponent />
      </main>
    </>
  );
}
