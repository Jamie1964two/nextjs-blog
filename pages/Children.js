import React from "react";
import Image from "next/image";
import Head from "next/head";
import children from "../public/images/children.jpg";
import littleFish from "../public/images/littleFish.png";
import ignite from "../public/images/ignite.png";
import energize from "../public/images/energize.png";
import { gsap } from "gsap/dist/gsap";
import { useRef, useLayoutEffect } from "react";

const Children = () => {
  const childrenRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 2,
        repeat: -1, // number of repeats (-1 for infinite)
        repeatDelay: 5,
      });

      tl.current
        .from(".fish", {
          x: 200, //900
          duration: 0.8,
          opacity: 0,
        })
        .from(
          ".ignite",
          {
            x: 200, //900
            duration: 0.8,
            opacity: 0,
          },
          "-=20%"
        )
        .from(
          ".energize",
          {
            x: 200, //900
            duration: 0.8,
            opacity: 0,
          },
          "-=20%"
        )
        .to(
          ".all",
          {
            duration: 1.5,
            opacity: 0,
          },
          "10"
        );
    }, childrenRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Children | CityChurch Choucester</title>
        <meta
          name="description"
          content="CityChurch Choucester's vibrant children and youth work."
        />
      </Head>
      <div ref={childrenRef} className="mb-24">
        <div className="relative  md:w-full h-[50vh]">
          <Image
            src={children}
            alt="children"
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
            Our Children.
          </h1>
          <div className="flex">
            <div className="basis-1/2 md:basis-2/3">
              <h1 className="mr-2 mb-2 sm:mb-4 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
                Vision.
              </h1>
              <p className="mb-6 sm:text-lg">
                At City Church our Children’s activities are built around a
                simple concept: Jesus is the hero. Our vision is to work
                alongside parents to lay a foundation in our children’s lives to
                see them become fully devoted to God and get excited about what
                God has planned for their lives. We hope to engage children in a
                church they want to be a part of and feel they belong to.
              </p>
              <h1 className="mr-2 mb-2 sm:mb-4 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
                New?
              </h1>
              <p className="mb-6 sm:text-lg">
                If it is your first Sunday, speak to a person wearing a welcome
                badge when you arrive. They will direct you to where you can
                register your children. You will be told where your children's
                group meet. The children stay in the main meeting for the first
                20 minutes of worship, a message will appear on the screens to
                let you know when to take them to their groups.
              </p>
            </div>
            <div className="basis-1/2 md:basis-1/3 ">
              <div className="relative mx-auto space-y-16 mt-12 md:space-y-8 w-2/3 overflow-hidden">
                <Image
                  src={littleFish}
                  alt="Little-Fish Group logo"
                  // fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    position: "relative",
                  }}
                  className="fish all"
                />

                <Image
                  src={ignite}
                  alt="Ignite Group logo"
                  // fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    position: "relative",
                  }}
                  className="ignite all"
                />

                <Image
                  src={energize}
                  alt="Energize Group logo"
                  // fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    position: "relative",
                  }}
                  className="energize all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Children;
