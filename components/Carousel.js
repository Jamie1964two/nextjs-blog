import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="relative md:w-full h-[100vh]">
      {/* <div className="relative block  md:w-full  h-[100vh]">
        <Image
          src="/images/gloucester_cathedral.jpg"
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
          src="/images/gloucester_cathedral.jpg"
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
          src="/images/bible.jpg"
          alt="Choucester Church"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          className="animate-fadein2"
        />
        <Image
          src="/images/service.jpg"
          alt="Choucester Church"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          className="animate-fadein3"
        />
        <Image
          src="/images/communion.jpg"
          alt="Choucester Church"
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
