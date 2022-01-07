import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ toggleIsLoading }) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={toggleIsLoading}></div>
      <div className={styles.loader}>
        <p>Loading...</p>
      </div>
    </React.Fragment>
  );
};

export default Loading;
