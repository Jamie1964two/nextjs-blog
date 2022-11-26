import React from "react";
import Image from "next/image";
import cathedral from "../public/images/cathedral.jpg";
import wheat from "../public/images/wheat.jpg";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

const Sunday = () => {
  return (
    <div className="mb-24">
      <div className="relative  md:w-full h-[50vh]">
        <Image
          src={cathedral}
          alt="cathedral"
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
          Sunday Service.
        </h1>
        {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
        <p className="mb-4 sm:text-lg">
          We meet every Sunday at 10:30, The Chapel, Seymour Road, Choucester,
          GL15PT. You are very welcome to join us.
        </p>
        <p className="mb-4 sm:text-lg">
          City Church is a diverse church, gathering people of all ages and
          phases of life from many backgrounds. We are all at different places
          in our journey and we invite you to continue your journey with us at
          your own pace and at a level that’s comfortable for you. Along the
          way, feel free to ask any questions – we’re here to help. And, if
          you’ve yet to visit, we hope to see you at one of our Sunday meetings
          soon.
        </p>
        <p className="mb-4 sm:text-lg">
          We meet on Sundays at 10.30 am at The Chapel on Seymour Road, GL1 5PT
          (see map) and would love you to join us. Our services are an informal
          gathering featuring a time of worship and then a talk. Afterwards,
          enjoy a coffee and biscuit(s) with us.
        </p>
        <h2 className="mr-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          What to expect
        </h2>
        <ul className="list-disc my-4 ml-8 sm:text-lg space-y-2">
          <li className="list-disc">
            We want visitors to feel welcome and comfortable and invite you to
            stay at the end of the meeting for tea, coffee and chat.
          </li>
          <li>
            We expect to experience joyful, creative and expressive worship
            times.
          </li>
          <li>
            We give time for a talk, making the truth of the Bible relevant to
            life.
          </li>
          <li>We provide a safe and stimulating environment for children.</li>
          <li>
            The 4th Sunday of the month we have a meal together, either
            breakfast before the meeting or lunch after the meeting.
          </li>
        </ul>
        <h2 className="mr-2 mb-4 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          FAQ
        </h2>

        <div className="flex">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">What time do I need to arrive?</p>
            <p className="text-gray-500">
              We recommend you arrive 15 minutes before the meeting starts so
              you can park and find a seat.
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">How long is the service?</p>
            <p className="text-gray-500">
              Our services last approximately an hour and a half.
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">
              What will my children be doing during the meeting?
            </p>
            <p className="text-gray-500">
              We have a fantastic programme for children and young people. Visit
              our Children’s Work and Youth pages for more information.
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">What should I wear?</p>
            <p className="text-gray-500">
              You are welcome at City Church just as you are. You’ll see people
              in jeans and t-shirt, in shirt and tie, and everywhere in between!
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">Where do I sit?</p>
            <p className="text-gray-500">
              You can sit wherever you feel comfortable. If you have difficulty
              locating a seat or need assistance, the Welcome Team is there to
              help you.
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <QuestionMarkCircleIcon
            className="h-6 w-6 flex-shrink-0 text-myblue"
            aria-hidden="true"
          />
          <div className="ml-2 sm:text-lg">
            <p className="mb-2">What time do I need to arrive?</p>
            <p className="text-gray-500">
              We recommend you arrive 15 minutes before the meeting starts so
              you can park and find a seat.
            </p>
          </div>
        </div>

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
  );
};

export default Sunday;
