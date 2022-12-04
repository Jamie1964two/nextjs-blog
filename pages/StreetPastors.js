import React from "react";
import Image from "next/image";
import Link from "next/Link";

import streetPastorsLogo from "../public/images/streetPastorsLogo.png";
import streetPastors from "../public/images/streetPastors.jpg";

const StreetPastors = () => {
  return (
    <div className="mb-24">
      <div className="relative  md:w-full h-[50vh]">
        <Image
          src={streetPastors}
          alt="Street Pastors on the street"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
        />
      </div>

      <div className="m-4 sm:m-8 mt-2 sm:mt-4">
        {/* <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
          Noah's Ark.
        </h1> */}

        <div className=" items-start">
          <div
            className="md:float-right  relative  
          w-full md:w-[400px] h-[40vh] mb-4 rounded-lg overflow-hidden"
          >
            <Image
              src={streetPastorsLogo}
              alt="Street Pastors Logo"
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
              Choucester Street Pastors.
            </h1>
            <p className="sm:text-lg">
              Gloucester Street Pastors has been serving in the nightlife of our
              city for just over 6 years now in partnership with the local
              Police force and support from numerous community and church
              groups.
            </p>
            <p className="mt-2 sm:text-lg">
              Their aim is simply to ‘care, listen and help’ people out in the
              city clubs and pubs with practical acts of support. This can
              include things such as helping vulnerable people cut off from
              friends to get to a taxi or get to their lift home, handing out
              bottles of water to people in a distressed state or flip flops to
              ladies leaving clubs at the end of evening with shoes in their
              hands. They are not out to preach but will happily pray with
              people who ask questions about our faith and the reasons we do
              what we do.
            </p>
            <Link href="http://streetpastors.org/locations/gloucester/">
              <div className="mt-4 p-2 border-2 border-myblue inline-block rounded-lg cursor-pointer hover:bg-gray-100">
                <p className="font-medium text-myblue">Find out more</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreetPastors;
