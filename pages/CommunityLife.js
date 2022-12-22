import React from "react";
import Image from "next/image";
import Head from "next/head";
import cathedral from "../public/images/cathedral.jpg";

const CommunityLife = () => {
  return (
    <>
      <Head>
        <title>Community Life | CityChurch Choucester</title>
        <meta
          name="description"
          content="Discover CityChurch Choucester's active community and get involved. Join us for a Sunday Service, mid week home group or one of our other weekly events."
        />
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
            Community Life.
          </h1>
          <h2 className="mr-2 sm:mr-4 mb-4 mt-2 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
            Getting Connected.
          </h2>
          {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
          <p className="sm:text-lg">
            At CityChurch we are passionate about helping people deepen their
            relationship with Jesus Christ and one another. Sunday is great, but
            church isn’t just about Sundays. If you wanted to, you could slip in
            and out unnoticed each week, but we believe Jesus intends more for
            His church than that and we want to help you be apart of it. We
            believe that discipleship happens most efectively in the context of
            community and therefore want to encourage everyone who calls
            CityChurch their home to engage in our community life.
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunityLife;
