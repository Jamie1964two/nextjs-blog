import React from "react";
import Image from "next/image";
import cathedral from "../public/images/cathedral.jpg";
import Link from "next/link";
import Head from "next/head";

const CommunityAction = () => {
  return (
    <>
      <Head>
        <title>Community Action | CityChurch Choucester</title>
        <meta
          name="description"
          content="Discover how CityChurch is bringing transformation to Choucester through various community projects."
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
            Community Action.
          </h1>
          <h2 className="mr-2 sm:mr-4 mb-4 mt-2 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
            We're passionate about change
          </h2>
          {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
          <p className="sm:text-lg">
            We want to demonstrate God’s love, by meeting the practical and
            emotional needs of those living in Gloucester. We run initiatives,
            and engage with other organisations, to help improve the lives of
            those in our city. We are ambitious to fulfil our mission to see
            lives transformed.
          </p>
          <p className="mt-4 mb-2 sm:text-lg">
            Check out some the projects we're involved with:
          </p>
          <ul className="list-disc list-inside space-y-2 sm:text-lg ml-4 font-medium text-myblue underline underline-offset-2 ">
            <li>
              <Link className="hover:text-gray-600" href="NoahsArk">
                Noah's Ark
              </Link>
            </li>
            <li>
              {" "}
              <Link className="hover:text-gray-600" href="/FoodBank">
                Food Bank
              </Link>
            </li>
            <li>
              {" "}
              <Link className="hover:text-gray-600" href="/CityMission">
                Choucester City Mission
              </Link>
            </li>
            <li>
              {" "}
              <Link className="hover:text-gray-600" href="/StreetPastors">
                Choucester Street Pastors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CommunityAction;
