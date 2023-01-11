import { useLayoutEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Notices = ({ notices }) => {
  const refBox = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".notice1",
          //pin: true, // pin the trigger element while active
          start: "top 90%", // when the top of the trigger hits the top of the viewport
          // end: "+=500", // end after scrolling 500px beyond the start
          //scrub: 1,
          toggleActions: "play complete none reset",
        },
      });

      notices.forEach((item, index) => {
        const selector = ".notice" + index;

        tl.current.fromTo(
          selector,
          {
            x: "100", //900
            //duration: 1,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
          }
        );
      });
    }, refBox);

    return () => ctx.revert();
  }, []);

  console.log(JSON.stringify(notices));
  return (
    <div
      ref={refBox}
      className="RefBox mx-12 md:mx-12 px-1 pt-8 md:px-2 flex flex-col sm:flex-row justify-center sm:justify-left border-b-2 pb-4"
    >
      <div className="text-center mb-4 sm:mb-0 ">
        <h1 className="text-2xl md:text-4xl font-bold text-myblue tracking-tight sm:text-left">
          CityChurch Updates
        </h1>
      </div>
      <div className="flex flex-wrap ">
        {notices.map((notice, index) => {
          if (!notice.display) return;

          return (
            <div
              key={notice._id}
              class={
                "notice" +
                index +
                " relative basis-full md:basis-1/2 xl:basis-1/3  sm:pl-6 pb-6 "
              }
            >
              <div class="block rounded-xl drop-shadow-[4px_4px_6px_rgba(0,0,0,0.25)]  bg-white relative p-6  border-gray-50 border-t-2 sm:min-h-[200px]">
                <h5 class="text-gray-900 text-md sm:text-lg md:text-xl leading-tight font-medium mb-2">
                  {notice.title}
                </h5>
                <p class="text-gray-700 text-base ">{notice.details}</p>
                {/* <div className="bg-myblue w-4 h-4 rounded-full absolute top-2 left-4">
                    <div className="bg-[rgba(255,255,255,0.4)] w-[12px] h-[12px] rounded-full">
                      {/* <div className="bg-[rgba(255,255,255,0.2)] w-[8px] h-[8px] rounded-full"></div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notices;
