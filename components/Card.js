import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Card = (props) => {
  return (
    <div className="m-0 overflow-clip rounded-l-sm relative shadow-md">
      <div className="relative h-[30vh]">
        <Image
          src={props.src} //"/images/students.jpg"
          alt={props.alt} //"Choucester Church"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          // className="animate-fadein1"
        />
      </div>
      <div className="h-[100%] absolute top-0 right-0 w-[40%] bg-white opacity-95"></div>
      <div className="mt-2 font-sans absolute bottom-4 right-4 text-right w-1/3 p-2 space-y-2 flex flex-col justify-end items-end">
        <h4 className="font-semibold font-sans tracking-wide text-lg text-neutral-600">
          {props.title} {/* Love Jesus */}
        </h4>

        <p className="text-neutral-600 tracking-tight text-right text-sm">
          {props.blurb}
          {/* We're a community of people who love God and each other. */}
        </p>
        <ArrowRightIcon
          className="h-6 w-6 flex-shrink-0 text-myblue font-bold"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Card;
