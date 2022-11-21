import React from "react";
import styles from "./logo.module.css";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";

const Logo = () => {
  const refLogo = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        repeat: -1, // number of repeats (-1 for infinite),
        yoyo: true,
      });

      tl.current.fromTo(
        "#container",
        {
          //x: 100,
          "background-image":
            "linear-gradient(to bottom right, hsl(201, 30%, 54%), hsl(201, 55%, 74%), hsl(201, 35%, 64%), hsl(201, 49%, 24%)",
          "box-shadow": "0px 0px 0px rgba(255, 255, 255, 0.5)",
          color: "rgba(255,255,255,0.7)",
        },
        {
          // x: 200,
          "background-image":
            "linear-gradient(to bottom right, #77b1d1, #77b1d1",
          "box-shadow": "3px 3px 5px rgba(255, 255, 255, 0.6)",
          color: "rgba(255,255,255,1)",
          duration: 3,
        }
      );
    }, refLogo);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={refLogo}
      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl grow-0"
    >
      <div id="container" className={styles.container}>
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
