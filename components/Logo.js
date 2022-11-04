import React from "react";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl">
      <div className={styles.container}>
        <div className={styles.title_container}>
          <p className={styles.title}>CityChurch</p>
        </div>
        <div className={styles.gloucester_container}>
          <p className={styles.gloucester}>Choucester</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
