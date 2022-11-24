import React from "react";
import Image from "next/image";
import cathedral from "../public/images/cathedral.jpg";
import bible from "../public/images/bible.jpg";
import service from "../public/images/service.jpg";
import communion from "../public/images/communion.jpg";

const Carousel = () => {
  return (
    <div className="relative md:w-full h-[100vh]">
      {/* <div className="relative block  md:w-full  h-[100vh]">
        <Image
          src="/images/cathedral.jpg"
          alt="Choucester Church"
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div> */}
      <div className="relative  md:w-full h-full">
        <Image
          src={cathedral}
          alt="Choucester Church"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          // className="animate-fadein1"
        />
        <Image
          src={bible}
          alt="bible"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          className="animate-fadein2"
        />
        <Image
          src={service}
          alt="a service at CCG"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          className="animate-fadein3"
        />
        <Image
          src={communion}
          alt="Communion"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          className="animate-fadein4"
        />
      </div>
      {/* <div className="relative md:w-full h-full animate-fadein3">
        <Image
          src="/images/communion.jpg"
          alt="Choucester Church"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="relative md:w-full h-full animate-fadein4">
        <div className="relative block">
          <Image
            src="/images/service.jpg"
            alt="Choucester Church"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
