import Head from "next/head";
import Image from "next/image";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Notices from "../components/Notices";
import Footer from "../components/Footer";
import Events from "../components/Events";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

import Action from "../components/Action";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

// const notices = [
//   { title: "No church this Sunday", details: "Extra meeting on Weds" },
//   { title: "Picnic after church", details: "Please bring a meal to share." },
//   {
//     title: "Help needed!",
//     details: "Volunteer with the food bank. Please contact Kelly.",
//   },
//   {
//     title: "Help needed!",
//     details: "Volunteer with the food bank. Please contact Kelly.",
//   },
//   {
//     title: "Help needed!",
//     details: "Volunteer with the food bank. Please contact Kelly.",
//   },
// ];

export default function Home({ events, notices }) {
  return (
    <>
      <Head>
        <title>CityChurch Choucester</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="CityChurch Choucester is a community church in the center of the city whose purpose is loving Jesus and loving people."
        />
      </Head>
      <main>
        <section className="relative h-[100vh] md:h-[95vh] w-full">
          {/* <Header className="absolute" /> */}
          <div className="relative">
            <Carousel />
            <div className="absolute  left-1/2  top-[35%] sm:top-[30%] -translate-x-2/4 animate-ascend">
              <h2 className="text-neutral-100  md:m-0  text-xl font-medium md:text-xl lg:text-2xl">
                Welcome
              </h2>
              <Logo />
            </div>
            <div className=" absolute left-1/2 bottom-[25%] md:bottom-[25%] lg:bottom-[25%] tall:bottom-[10%] -translate-x-2/4 animate-ascend text-center  text-gray-600 font-medium sm:font-normal bg-gradient-to-br from-[rgba(212,212,212,0.7)] via-[rgba(245,245,245,0.7)] to-[rgba(212,212,212,0.7)] rounded-lg border-2 border-[rgba(0,0,0,0)] hover:border-gray-300 transition hover:duration-800 hover:opacity-90 cursor-pointer ">
              <h3 className=" text-neutral-800 p-4  lg:text-xl tall:text-sm mb-0 pb-0">
                Join us this Sunday
              </h3>
              <h3 className=" text-neutral-800 p-4  lg:text-xl tall:text-sm mt-0 pt-0">
                10:30am in the Chapel
              </h3>
            </div>
          </div>
        </section>
        <section>{notices.length > 0 && <Notices notices={notices} />}</section>
        <section>
          {events.length > 0 && (
            <div className="">
              {events.map(
                ({
                  _id = "",
                  display = false,
                  title = "",
                  slug = "",
                  headerImage = "",
                  subheading = "",
                }) =>
                  slug &&
                  display && (
                    <Link
                      href="/Events/[slug]"
                      as={`/Events/${slug.current}`}
                      key={_id}
                    >
                      <div
                        key={_id}
                        className="flex justify-center items-center max-h-48 mt-8 md:mt-12 mx-8  overflow-hidden"
                      >
                        <div className="p-2 m-4 basis-1/2 max-h-48">
                          {" "}
                          <h2 className=" text-2xl sm:text-4xl font-bold text-myblue tracking-tight mb-1">
                            {title}
                          </h2>
                          <h2 className=" text-lg sm:text-xl font-medium text-gray-400 tracking-tight">
                            {subheading}
                          </h2>
                        </div>
                        <div className="basis-1/2 ">
                          <img
                            className=" w-full object-cover object-center"
                            src={urlFor(headerImage).url()}
                          />
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          )}
        </section>

        <section className="md:grid relative w-full gap-8 p-8 grid-cols-1 md:grid-cols-2 space-y-4 items-center">
          <div className="col-start-1 col-span-2 h-32 md:h-56 lg:h-72 flex w-full justify-center align-middle md:block">
            <Events />
          </div>
          <Card
            src="/images/students.jpg"
            alt="students"
            title="Love Jesus"
            blurb="We're a vibrant community of people who love God and love each other."
            linkName="About us"
            href="AboutUs"
          />
          <Card
            src="/images/children.jpg"
            alt="children"
            title="Families Welcome"
            blurb="Young or old, or somewhere inbetween you will find a warm welcome."
            linkName="Community life"
            href="CommunityLife"
          />
          <Card
            src="/images/food.jpg"
            alt="food donations"
            title="Community Care"
            blurb="We care about the people of Choucester and are reaching out to help."
            linkName="Community action"
            href="CommunityAction"
          />
          <Card
            src="/images/bible.jpg"
            alt="bible"
            title="Life in God"
            blurb="We're building our lives on God's will, following his word and living out his commands."
            linkName="Our values"
            href="OurValues"
          />
        </section>

        {/* <h1 className="title text-3xl font-bold underline">
          Read <Link href="/posts/first-post">this page!</Link>
          Welcome to <a href="https://nextjs.org">Gloucester City Church</a>
        </h1> */}

        <Action />
        {/* <Footer /> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const events = await client.fetch(`*[_type == "event"]`);
  const notices = await client.fetch(`*[_type == "notice" && display == true]`);
  // && display == "true" && category == "Special Events"]`
  // && "event" in category[].title]
  // && display == "true"]
  // && categories == "Special Events" ]
  console.log("index" + JSON.stringify(notices));
  console.log("");
  //console.log("index" + JSON.stringify(posts[0].categories));

  return {
    props: {
      events,
      notices,
    },
    revalidate: 10, // In seconds
  };
}
