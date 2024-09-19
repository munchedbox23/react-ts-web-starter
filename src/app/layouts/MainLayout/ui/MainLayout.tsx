import { Outlet } from "react-router-dom";
import { FC } from "react";
import styles from "./MainLayout.module.css";
import { Header } from "@/widgets/Header";

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
