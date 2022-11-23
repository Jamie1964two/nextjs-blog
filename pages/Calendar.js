import React from "react";
import Image from "next/image";
import calendar from "../public/images/calendar.jpg";

const Calendar = () => {
  return (
    <div className="mb-24">
      <div className="relative  md:w-full h-[50vh]">
        <Image
          src={calendar}
          alt="calendar"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          // className="animate-fadein1"
        />
      </div>
      {/* <div className="absolute bottom-4 right-4 w-[5vw]">
        <Logo />
      </div> */}
      <div className="m-4 sm:m-8 mt-6 sm:mt-12">
        <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
          Church Calendar.
        </h1>

        <iframe
          loading="lazy"
          frameborder="0"
          height="800"
          scrolling="yes"
          src="https://citygloucester.churchsuite.co.uk/embed/calendar?preview=true"
          className="border-0"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
