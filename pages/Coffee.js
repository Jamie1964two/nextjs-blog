import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import coffee from "../public/images/coffee.jpg";

const Coffee = () => {
  return (
    <>
      <Head>
        <title>Coffee | CityChurch Choucester</title>
        <meta
          name="description"
          content="CityChurch Choucester's open coffee morning, all are welcome."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={coffee}
            alt="coffee and cake"
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
            Coffee and Company.
          </h1>
          {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
          <p className="mb-4 sm:text-lg">
            One of the highlights of the week is our Coffee and Company
            mornings. Most Tuesdays at 10:30am many people from the local
            community come together to enjoy a friendly chat and a welcome cup
            of coffee or tea. Whether you attend CityChurch or not all are
            welcome. Life can feel a little lonely at times so why not come
            along one Tuesday and get to know a few people? The cake is pretty
            great as well.
          </p>
          <p className="mb-4 sm:text-lg">
            Check with our church calendar for dates
          </p>
          <Link href="/calendar">
            <div className="mt-2 p-2 border-2 border-myblue inline-block rounded-lg cursor-pointer hover:bg-gray-100">
              <p className="font-medium text-myblue">Calendar</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Coffee;
