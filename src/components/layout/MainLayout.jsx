import React from "react";
import MainNavigation from "./MainNavigation";
import styles from "../styles/MainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </React.Fragment>
  );
};

export default MainLayout;
