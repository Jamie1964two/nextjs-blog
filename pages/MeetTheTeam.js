import React from "react";
import Image from "next/image";
import cathedral from "../public/images/gloucester_cathedral.jpg";
import john from "../public/images/john.png";
import kelly from "../public/images/kelly.png";

const MeetTheTeam = () => {
  return (
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
          Meet the team.
        </h1>

        <div className="md:flex items-end">
          <div
            className="md:basis-1/2 lg:basis-1/3 relative  
          w-full md:w-1/2 h-[40vh] my-4 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={john}
              alt="John and Sarah"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                position: "absolute",
              }}
              // className="animate-fadein1"
            />
          </div>
          <div className="md:basis-1/2 lg:basis-2/3  md:p-4">
            <h1 className="mr-2 mb-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
              John and Sarah Moreland
            </h1>
            <p className="sm:text-lg">
              John is the senior Pastor and leads the Eldership Team, carrying
              the main responsibility for the vision and direction of the
              church. He is married to Sarah and together have three young boys.
              John enjoys reading theology books and maintaining his garden
              shed. Sarah loves cooking for her visiting in-laws.
            </p>
          </div>
        </div>
        <div className="md:flex items-end">
          <div
            className="md:basis-1/2 lg:basis-1/3 relative  
          w-full md:w-1/2 h-[40vh] my-4 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={kelly}
              alt="Kelly & Michelle Gibson"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                position: "absolute",
              }}
              // className="animate-fadein1"
            />
          </div>
          <div className="md:basis-1/2 lg:basis-2/3  md:p-4">
            <h1 className="mr-2 mb-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
              Kelly & Michelle Gibson
            </h1>
            <p className="sm:text-lg">
              Kelly is an elder of the church and is married to Michelle. They
              have been part of City Church since the church was first started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
