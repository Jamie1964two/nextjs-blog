import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const refEvents = useRef();
  const tl = useRef();

  const [eventsArrayCounter, setEventsArrayCounter] = useState(0);

  const eventsArray = [
    {
      img: "church.svg",
      text1: "Sunday Service",
      text2: "10:30am",
      href: "/Sunday",
    },
    {
      img: "ark.svg",
      text1: "Noah's Ark Stay & Play",
      text2: "Friday 10:00am",
      href: "/NoahsArk",
    },
    {
      img: "coffee.svg",
      text1: "Coffee & Company",
      text2: "Tuesday 10:30am",
      href: "/Calendar",
    },
  ];

  const updateEvents = () => {
    setEventsArrayCounter((prev) => {
      // console.log("prev:" + prev);
      //console.log("eventsArray.Length:" + eventsArray.length);
      if (prev == eventsArray.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
    //console.log("updated" + eventsArrayCounter);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 0.5,
        repeat: -1, // number of repeats (-1 for infinite)
        repeatDelay: 0,
        scrollTrigger: {
          trigger: ".refEvents",
          // pin: true, // pin the trigger element while active
          start: "top center", // when the top of the trigger hits the top of the viewport
          //end: "+=1000", // end after scrolling 500px beyond the start
          //scrub: 1,
        },
      });

      tl.current
        .from(".image1", {
          y: 200, //900
          duration: 0.7,
          opacity: 0,
        })
        .from(
          ".infoText",
          {
            y: 200, //900
            duration: 0.7,
            opacity: 0,
          },
          "-=10%"
        )
        .to(
          ".image1",
          {
            y: -200, //900
            duration: 0.7,
            opacity: 0,
          },
          "5"
        )
        .to(
          ".infoText",
          {
            y: -200, //900
            duration: 0.7,
            opacity: 0,
            onComplete: () => {
              updateEvents();
            },
          },
          "-=100%"
        );
    }, refEvents);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={refEvents}
      className="refEvents flex flex-row justify-center w-full sm:justify-between items-center overflow-hidden  "
    >
      <div className="hidden sm:block px-8 py-12 sm:basis-1/6 md:basis-1/3 w-full">
        <h3 className="text-myblue text-4xl md:text-6xl lg:text-8xl font-bold">
          WHAT'S
        </h3>
        <h3 className="text-myblue text-2xl md:text-4xl lg:text-6xl font-bold">
          ON
        </h3>
      </div>
      <div className="image1 relative w-[80px] md:mr-12 md:p-12 md:pt-12 sm:basis-1/3 flex justify-center overflow-hidden">
        <div className="m-2 w-[50px] md:w-[130px]  grow-0 shrink-0">
          <Image
            src={"/images/" + eventsArray[eventsArrayCounter].img}
            alt="Church"
            height="180"
            width="180"
            //sizes="100vw"
            // style={{
            //   objectFit: "contain",
            //   position: "absolute",
            // }}
            // className="animate-fadein1"
          />
        </div>
      </div>
      <div className="infoText md:p-6 sm:basis-1/2 md:basis-1/3 md:mx-auto text-center">
        <p className="text-gray-700 md:text-xl lg:text-2xl font-medium">
          {eventsArray[eventsArrayCounter].text1}
        </p>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          {eventsArray[eventsArrayCounter].text2}
        </p>
        <div className="mt-4">
          <Link
            href={eventsArray[eventsArrayCounter].href}
            className="text-gray-500 text-xs sm:text-sm md:text-base bg-gray-100 hover:bg-white font-medium rounded-lg border-2 border-grey-500 px-2 py-1"
          >
            Find out more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
