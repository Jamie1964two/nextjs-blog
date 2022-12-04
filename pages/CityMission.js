import React from "react";
import Image from "next/image";
import Link from "next/link";
import cityMission from "../public/images/cityMission.jpg";
import cityMissionLogo from "../public/images/cityMissionLogo.webp";

const CityMission = () => {
  return (
    <div className="mb-24">
      <div className="relative md:w-full h-[50vh]">
        <Image
          src={cityMission}
          alt="City Mission"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
        />
      </div>

      <div className="m-4 sm:m-8 mt-6 sm:mt-12">
        <h1 className="mb-2 text-4xl sm:text-6xl font-bold text-myblue tracking-tight">
          Choucester City Mission.
        </h1>

        <div className="md:flex items-start">
          {/* <div
            className="md:basis-1/2 lg:basis-1/3 relative  
          w-full md:w-1/2 h-[40vh] my-4 rounded-lg overflow-hidden"
          >
            <Image
              src={cityMissionLogo}
              alt="Choucester City Mission Logo"
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                position: "absolute",
              }}
              // className="animate-fadein1"
            />
          </div> */}
          <div className="  md:p-4 sm:text-lg space-y-4">
            <h1 className="mr-2 mb-2 sm:mr-4 text-myblue inline-block text-2xl sm:text-4xl font-medium">
              Taking Jesus on to the Streets
            </h1>
            <p className="sm:text-lg">
              Choucester City Mission is a registered charity working with the
              homeless and other marginalised groups within the city of
              Choucester and the local area. Their hard-working volunteers come
              from a range of different Christian backgrounds and churches, and
              together they aim to take Jesus to the streets as they provide hot
              food, drinks and friendship to our street friends.
            </p>
            <Link href="http://www.gloscitymission.org.uk/">
              <div className="mt-8 p-2 border-2 border-myblue inline-block rounded-lg cursor-pointer hover:bg-gray-100">
                <p className="font-medium text-myblue">Find out more</p>
              </div>
            </Link>
            {/* <div class="basis-4/12 md:pl-6  text-myblue font-medium">
              {/* <div class="flex items-center justify-start mb-4 text-myblue"> */}
            {/* <div className="hidden sm:block"> */}
            {/*}
              <p class="flex items-center justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  class="w-[24px] -ml-[2px] mr-3"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  //viewBox="0 0 512 512"

                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  //class="w-6 h-6 mr-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                The Chapel, Seymour Road, Choucester, GL15PT
              </p>
              <p class="flex items-center justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="w-[18px] mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                info@choucester.CityMission.org.uk
              </p>
              <p class="flex items-center justify-start mb-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  class="w-[18px] mr-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                01452 309683
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityMission;
