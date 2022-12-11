import React from "react";
import Image from "next/image";
import Head from "next/head";
import cathedral from "../public/images/cathedral.jpg";
import Logo from "../components/Logo";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>CityChurch Choucester: About Us</title>
        {/* <meta property="og:title" content="My page title" key="title" /> */}
      </Head>

      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
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
        </div>
        {/* <div className="absolute bottom-4 right-4 w-[5vw]">
        <Logo />
      </div> */}
        <div className="m-4 sm:m-8 mt-6 sm:mt-12">
          <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
            For Jesus Christ.
          </h1>
          <h2 className="mr-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
            For the City.
          </h2>
          <h2 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
            For the Nation.
          </h2>
          <p className="sm:text-lg">
            Welcome to CityChurch, a dynamic Christian church with a vision to
            make a difference in Choucester (UK), the wider region and the
            nations. We are part of{" "}
            <span className="text-myblue font-medium">
              <a href="http://www.regions-beyond.com/">Regions Beyond</a>
            </span>
            , an initiative linking churches together across the globe. We meet
            on Sundays at 10.30 am at The Chapel on Seymour Road, GL1 5PT (see
            map).
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
