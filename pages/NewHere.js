import React from "react";
import Image from "next/image";
import Head from "next/head";
import serve from "../public/images/serve.jpg";
import wheat from "../public/images/wheat.jpg";
import ContactButton from "../components/ContactButton";

const NewHere = () => {
  return (
    <>
      <Head>
        <title>New Here | CityChurch Choucester</title>
        <meta
          name="description"
          content="Answers to all your questions about what to expect at our Sunday meetings."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={serve}
            alt="hands in a circle"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              position: "absolute",
            }}
          />
        </div>
        {/* <div className="absolute bottom-4 right-4 w-[5vw]">
        <Logo />
      </div> */}
        <div className="m-4 sm:m-8 mt-6 sm:mt-12">
          <h1 className="mb-4 sm:mb-6 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
            New Here?
          </h1>
          {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
          <p className="mb-4 sm:text-lg">
            Welcome to CityChurch, a dynamic Christian church with a vision to
            make a difference in Choucester (UK), the wider region and the
            nations.
          </p>
          <p className="mb-4 sm:text-lg">
            We meet on Sundays at 10.30 am at The Chapel on Seymour Road, GL1
            5PT (see map) and would love you to join us. Our services are an
            informal gathering featuring a time of worship and then a talk.
            Afterwards, enjoy a coffee and biscuit(s) with us.
          </p>
          <p className="mb-4 sm:text-lg">
            There are a number of other are other ways to connect with us
            throughout the week. We meet in small groups in homes and venues
            across the city on a number of weekday. Or come along to Coffee and
            Communion or Noah's Ark Play and Stay if you have small children.
          </p>
          <p className="mb-2 sm:text-lg">
            To find out more, please get in touch.
          </p>
          <ContactButton />
          <div className="relative mt-8 w-full h-[50vh] lg:h-[70vh] flex justify-center">
            <Image
              src={wheat}
              alt="field of wheat"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <div className="absolute z-10 w-full top-[50%] text-center ">
              <p className="text-white font-semibold text-4xl md:text-6xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Making Jesus Known
              </p>
            </div>
            <div className="absolute z-10 top-[75%] md:top-[73%] text-center">
              <p className="text-white font-semibold text-xl md:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Jesus' priority gets all our attention
              </p>
            </div>
            <div className="absolute z-10 top-[83%] text-center">
              <p className="text-white font-semibold text-xl md:text-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Living unashamed and joyful
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHere;
