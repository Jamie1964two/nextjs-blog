import React from "react";
import Image from "next/image";
import students2 from "../public/images/students2.jpg";

const Students = () => {
  return (
    <div className="mb-24">
      <div className="relative  md:w-full h-[50vh]">
        <Image
          src={students2}
          alt="Groups of students"
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
          Students.
        </h1>
        <h2 className="mr-2 mb-4 mt-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          Get ready for a great year in God!
        </h2>
        <p className="sm:text-lg">
          Hi and welcome to Gloucester! We know that life as a student is full
          on, intense and a hugely significant time in your life. As a student
          so much is new and competing for your attention. Undoubtably you want
          to get the most out of your time at uni and hopefully that is where we
          come in! We believe that Jesus is the way, the truth and the life. He
          came to give abundant life so in order to get the most out of your
          time at uni, it needs to revolve around and be firmly anchored in
          Jesus.
        </p>

        <h2 className="mr-2 mb-4 mt-6 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          We want to help and support you as you live for Jesus during Uni.
        </h2>
        <p className="sm:text-lg">
          During September there will be opportunity for students to stick
          around after our Sunday service (10:30am) for a free meal so you can
          get to know a bit more about us and how we can best support you
          through this exiting journey that you are on as a student. If in the
          meantime you have any questions or would like to meet up with a
          friendly face for a coffee as you adjust to life as a student, just
          get in touch via our email and we will do our best to help you. We
          look forward to seeing you soon!{" "}
        </p>
      </div>
    </div>
  );
};

export default Students;
