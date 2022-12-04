import React from "react";
import Image from "next/image";
import children from "../public/images/children.jpg";
import noahsArk from "../public/images/noahsArk.png";

const NoahsArk = () => {
  return (
    <div className="mb-24">
      <div className="relative  md:w-full h-[50vh]">
        <Image
          src={children}
          alt="Children playing"
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
        {/* <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
          Noah's Ark.
        </h1> */}

        <div className="md:flex items-start">
          <div
            className="md:basis-1/2 lg:basis-1/3 relative  
          w-full md:w-1/2 h-[40vh] my-4 rounded-lg overflow-hidden"
          >
            <Image
              src={noahsArk}
              alt="Noah's Ark Logo"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                position: "absolute",
              }}
              // className="animate-fadein1"
            />
          </div>
          <div className="md:basis-1/2 lg:basis-2/3  md:p-4 sm:text-lg space-y-4">
            <h1 className="mr-2 mb-2 sm:mr-4 text-myblue inline-block text-2xl sm:text-4xl font-medium">
              Friday's at 10am, during school term
            </h1>
            <p className="sm:text-lg">
              Noah’s Ark Stay and Play is a fun group for 0-4s and their
              parents/carers. Each week there are creative activities for the
              children including toys and games, singing, and story times. It is
              also a great context for parents/carers to relax, develop
              friendships and receive support.{" "}
            </p>
            <p>Come and join in, every Friday during school term at 10am.</p>
            <p className="font-medium">
              Get in touch if you'd like to find out more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoahsArk;
