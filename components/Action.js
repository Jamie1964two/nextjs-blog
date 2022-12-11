import { useLayoutEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Action() {
  const refBox = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".picture",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start
          //scrub: 1,
          toggleActions: "play complete none reset",
        },
      });

      tl.current
        .to(".text1", {
          x: "110vw", //900
          duration: 1,
          opacity: 1,
        })
        .to(
          ".text2",
          {
            x: "-105vw",
            duration: 1,
            opacity: 1,
          },
          "-=50%"
        )
        .to(
          ".text3",
          {
            // x: -900,
            duration: 1,
            opacity: 1,
          },
          "+=50%"
        )
        .to(
          ".text3",
          {
            // x: -900,
            duration: 0.2,
            "background-color": "rgba(255,255,255,0.3)",
          },
          "+=20%"
        )
        .to(
          ".text3",
          {
            // x: -900,
            duration: 0.2,
            "background-color": "rgba(255,255,255,0.1)",
          }
          //"-=10%"
        );
    }, refBox);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={refBox} className="RefBox">
      <div className="picture m-0 overflow-clip rounded-l-sm relative shadow-md">
        <div className="relative h-[100vh]">
          <Image
            src="/images/students.jpg"
            alt="Choucester Church"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
            // className="animate-fadein1"
          />
          <div className="text1 font-sans font-semibold absolute top-[34vh] tall:top-[15vh] md:top-[20vh]  -left-full bg-white mix-blend-screen text-black py-4 px-4 md:px-8 lg:px-12 text-4xl sm:text-6xl md:text-8xl lg:text-8xl opacity-0 rounded-lg">
            We'd love
          </div>
          <div className="text2 font-sans font-semibold absolute top-[45vh] md:top-[40vh] lg:top-[45vh] tall:top-[45vh] -right-full bg-white mix-blend-screen text-black py-4 px-4 md:px-8 lg:px-12 text-4xl sm:text-6xl md:text-8xl lg:text-8xl opacity-0 rounded-lg">
            to meet you!
          </div>
          <Link href="/Sunday">
            <div className="text3 text-center font-sans font-medium absolute top-[65vh] tall:top-[80vh] md:top-[80vh]  border-2 border-white mix-blend-screen text-white py-2 px-2 md:px-4 text-lg sm:text-xl opacity-0 rounded-xl left-1/2 -translate-x-1/2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] duration-200">
              Join us this Sunday
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// const comp = useRef(); // create a ref for the root level element (for scoping)

// useLayoutEffect(() => {

//   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
//   let ctx = gsap.context(() => {

//     // all our animations can use selector text like ".box"
//     // and it's properly scoped to our component
//     gsap.to(".box", {...});
//     ScrollTrigger.create({ trigger: "#my-id", ...});

//   }, comp); // <- IMPORTANT! Scopes selector text

//   return () => ctx.revert(); // cleanup

// }, []); // <- empty dependency Array so it doesn't re-run on every render
