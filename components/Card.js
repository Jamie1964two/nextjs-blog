import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Card = (props) => {
  return (
    <div className="m-0 overflow-clip rounded-l-sm relative shadow-md">
      <div className="relative h-[30vh] tall:h-48">
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
      <div className="h-[100%] absolute top-0 right-0 w-[45%] sm:w-[40%] md:w-[50%] bg-white opacity-95"></div>
      <div className="mt-1 sm:mt-2 font-sans absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-right w-[40%] md:w-[45%] sm:w-1/3 p-1 sm:p-2 space-y-2 flex flex-col justify-end items-end">
        <h4 className="font-semibold font-sans tracking-wide lg:text-lg text-neutral-600">
          {props.title}
        </h4>

        <p className="text-neutral-600 tracking-tight text-right text-sm">
          {props.blurb}
        </p>
        <div className="flex content-center hover:opacity-50 hover:cursor-pointer">
          <Link href={"/" + props.href}>
            <p className="text-myblue text-sm">
              {props.linkName}
              <ArrowRightIcon
                className="h-4 w-4 ml-[2px] flex-shrink-0 text-myblue font-bold inline-block"
                aria-hidden="true"
              />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
