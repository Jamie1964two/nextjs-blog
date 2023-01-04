import React from "react";
import { gsap } from "gsap/dist/gsap";
import { useRef, useLayoutEffect } from "react";
import Link from "next/link";

const LogoMini = () => {
  const miniLogoRef = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 0.2,
        repeat: -1, // number of repeats (-1 for infinite)
        repeatDelay: 10,
      });

      tl.current
        .from(".div1", {
          x: 50,
          duration: 0.8,
          opacity: 0.1,
          ease: "power4.out",
        })
        .from(
          ".div2",
          {
            x: 50,
            duration: 0.5,
            opacity: 0.1,
            ease: "power4.out",
          },
          "-=80%"
        )
        .from(
          ".div3",
          {
            x: 50,
            duration: 0.5,
            opacity: 0.1,
            ease: "power4.out",
          },
          "-=20%"
        );
    }, miniLogoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex justify-start  lg:flex-1 hover:opacity-70 ">
      {/* <Link href="/" className="focus:outline-none"> */}
      <div
        ref={miniLogoRef}
        className="bg-gradient-to-br from-[#5b98b9] via-[hsl(201,55%,64%)] to-[#83adc3] rounded-tl-3xl rounded-br-3xl border-2 border-white text-white text-xl font-sans px-4 py-2 hover:opacity-50 font-medium"
      >
        <div className="div1 inline-block">C</div>
        <div className="div2 inline-block">C</div>
        <div className="div3 inline-block">G</div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default LogoMini;
