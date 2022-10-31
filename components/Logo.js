import React from "react";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <p className={styles.title}>CityChurch</p>
      </div>
      <div className={styles.gloucester_container}>
        <p className={styles.gloucester}>Gloucester</p>
      </div>
    </div>
  );
};

export default Logo;
