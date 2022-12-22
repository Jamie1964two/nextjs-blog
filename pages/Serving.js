import React from "react";
import Image from "next/image";
import Head from "next/head";
import serve from "../public/images/serve.jpg";

const Serving = () => {
  return (
    <>
      <Head>
        <title>Serving | CityChurch Choucester</title>
        <meta
          name="description"
          content="CityChurch Choucester firmly believes in serving one another as Jesus did. Find out how you can join in."
        />
      </Head>
      <div className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={serve}
            alt="many hands forming a tree"
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
            Serving.
          </h1>
          {/* <h1 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h1> */}
          <p className="mb-4 sm:text-lg">
            “Do not merely listen to the word, and so deceive yourselves. Do
            what it says. Anyone who listens to the word but does not do what it
            says is like a man who looks at his face in a mirror and, after
            looking at himself, goes away and immediately forgets what he looks
            like. But the man who looks intently into the perfect law that gives
            freedom and continues to do this, not forgetting what he has heard,
            but doing it – he will be blessed in what he does.” James 1:22-25
          </p>
          <p className="mb-4 sm:text-lg">
            Here at CityChurch we encourage everyone to reach out and serve the
            church and their community, as an outworking of their faith – in
            particular to support some of society’s more vulnerable people.
          </p>
          <p className="mb-4 sm:text-lg">
            There are a variety of ways that you can serve. You might like to
            volunteer in the Food Bank or our Noah’s Ark project. You might be a
            musician that could serve the church through the worship band on a
            Sunday or at the events we put on through the year. You might have a
            passion to work with children and young people, or are keen to
            explore working in other cultures overseas. We would love to
            encourage your participation in each of these areas plus many more.
          </p>
          <p className="mb-4 sm:text-lg">
            If what you’ve seen so far doesn’t quite fit you, what would you
            start? What people are you passionate about? What needs can you help
            to meet? What places is God leading you to? What gap could you fill?
            What gifts and abilities could you use to serve the church or make
            God’s love known? What do you love to do? How can you share your
            experiences with others for God’s glory? Who inside or outside the
            church could you work with to achieve what God inspires you to do?
          </p>
          <p className="mb-4 sm:text-lg">Come and join us on our adventure….</p>
        </div>
      </div>
    </>
  );
};

export default Serving;
