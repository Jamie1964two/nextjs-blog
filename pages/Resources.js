import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import microphone from "../public/images/microphone.jpg";

const Resources = () => {
  return (
    <>
      <Head>
        <title>Resources | CityChurch Choucester</title>
        <meta
          name="description"
          content="Access some of CityChurch Choucester's past services."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={microphone}
            alt="microphone"
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
            Resources.
          </h1>
          {/* <h2 className="mr-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          For the City.
        </h2>
        <h2 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h2> */}
          <p className="sm:text-lg">
            Take a look at some of our past services over on our{" "}
            <Link href="https://www.youtube.com/channel/UCpxDN2eDFruIWlVrRLiySwg">
              <span className="text-red-600 font-semibold">YouTube</span>
            </Link>
            {" channel."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Resources;
