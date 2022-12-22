import React from "react";
import Image from "next/image";
import Head from "next/head";
import cathedral from "../public/images/cathedral.jpg";

const OurValues = () => {
  return (
    <>
      <Head>
        <title>Our Values | CityChurch Choucester</title>
        <meta
          name="description"
          content="Read about the core values that guide CityChurch Choucester."
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
            Our Values.
          </h1>
          {/* <h1 className="mr-4 text-gray-500 inline-block text-4xl font-medium">
          For the City.
        </h1>*/}
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Jesus' priority gets all our attention
            {/* 'JESUS’ PRIORITY GETS ALL OUR ATTENTION */}
          </h1>
          <p className="sm:text-lg">
            Jesus' instructions are really very simple: make disciples who make
            disciples. If we get that right, everything else follows. All that
            we do unapologetically serves that goal.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Living unashamed and joyful
            {/* LIVING UNASHAMED AND JOYFUL */}
          </h1>
          <p className="sm:text-lg">
            We love what Jesus has accomplished for us and can’t wait to tell
            others the good news that there is freedom for all who call on His
            name. This is an expression of the joy we have because of our
            salvation and our relationship with Jesus, and not a duty to
            perform.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Unashamed about the presence of God
            {/* UNASHAMED ABOUT THE PRESENCE OF GOD */}
          </h1>
          <p className="sm:text-lg">
            We place high importance on being a community that eagerly
            encounters God through the Baptism of the Holy Spirit and regular
            encounters with Him, study of the Bible, prayer and worship.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Seeking to be supernaturally natural
            {/* SEEKING TO BE SUPERNATURALLY NATURAL */}
          </h1>
          <p className="sm:text-lg">
            Jesus’ kingdom is one of power and the miraculous. When it comes to
            seeing the sick healed, the broken restored and addicts set free, we
            believe the pursuit of God’s kingdom power is absolute. There is
            much more of God’s kingdom we have yet to see.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Inclusion and equality are non-negotiable
            {/* INCLUSION AND EQUALITY ARE NON-NEGOTIABLE */}
          </h1>
          <p className="sm:text-lg">
            We are a church that lives by, practices, communicates, and upholds
            the grace of God in all situations and on all occasions. The phrase
            no condemnation is not just a theological statement but a living
            reality in all we do without exception.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Here for one another's success
            {/* HERE FOR ONE ANOTHER’S SUCCESS */}
          </h1>
          <p className="sm:text-lg">
            Our passion Our passion is to see people fulfil their potential. We
            will look to release people to be all that God has made them to be.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            We are one
          </h1>
          <p className="sm:text-lg">
            Our pursuit of reflecting God’s heart for diversity is
            non-negotiable. We will intentionally celebrate our diversity of
            backgrounds, ages, races and social status and gender
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Above and beyond the call of duty
            {/* ABOVE AND BEYOND THE CALL OF DUTY */}
          </h1>
          <p className="sm:text-lg">
            Our passion The adventure God has called us into requires huge
            resources of people, time and money. We will intentionally create
            opportunities to grow in being open-hearted, open-handed and
            generous with our money.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Running with friends
            {/* RUNNING WITH FRIENDS */}
          </h1>
          <p className="sm:text-lg">
            We learned from our fore-fathers that you can do more together than
            you can apart. We partner with friends from across the UK and around
            the globe in the Regions Beyond family in order to achieve more.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Holding things lightly
            {/* HOLDING THINGS LIGHTLY */}
          </h1>
          <p className="sm:text-lg">
            Because we are passionate about going after those who are far away
            from God, we will continually look to create space for growth and
            prepare ourselves in readiness for what God is doing.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            Out of our comfort zone
            {/* OUT OF OUR COMFORT ZONE */}
          </h1>
          <p className="sm:text-lg">
            We seek to live beyond our own comfort for the purpose of reaching
            others regardless of economic status, age, gender, or ethnicity so
            they too will benefit through God’s grace in Jesus Christ.
          </p>
          <h1 className="mt-4 sm:mt-8 mb-2 text-gray-700 inline-block text-xl sm:text-2xl font-semibold">
            We want to help you get on board
            {/* WE WANT TO HELP YOU GET ON BOARD */}
          </h1>
          <p className="sm:text-lg">
            We value our connection to one another but tend to talk more about
            joining us on our adventure. We encourage everyone to a commitment
            to the journey with us into all that God has planned for our good
            and His glory.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurValues;
