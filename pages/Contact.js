import React from "react";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import cathedral from "../public/images/cathedral.jpg";
import { gsap } from "gsap/dist/gsap";
import { useRef, useLayoutEffect } from "react";

const Contact = () => {
  const contactRef = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let anim = gsap.fromTo(
        ".popUp",
        {
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});
  const [missingInfoMessage, setMissingInfoMessage] = useState("");

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [showSentMessagePopUp, setShowSentMessagePopUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          //subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setShowSentMessagePopUp(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setShowSentMessagePopUp(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  const close = () => setShowSentMessagePopUp(false);

  const handleValidation = () => {
    let tempErrors = {};
    let tempMessage = "";
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
      tempMessage = "name";
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
      tempMessage = tempMessage.length > 0 ? tempMessage + ", email" : "email";
    }

    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
      tempMessage =
        tempMessage.length > 0 ? tempMessage + ", message" : "message";
    }

    setErrors({ ...tempErrors });
    setMissingInfoMessage(tempMessage);
    console.log("errors", errors);
    return isValid;
  };

  return (
    <>
      <Head>
        <title>Contact Us | CityChurch Choucester</title>
        <meta
          name="description"
          content="View our location map and get in touch through our contact form."
        />
      </Head>
      <div className="mb-24" ref={contactRef}>
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
            Contact Us.
          </h1>
          {/* <h2 className="mr-2 sm:mr-4 text-gray-500 inline-block text-2xl sm:text-4xl font-medium">
          For the City.
        </h2>
        <h2 className="mb-4 text-gray-700 inline-block text-2xl sm:text-4xl font-medium">
          For the Nation.
        </h2> */}
          {/* <p className="sm:text-lg">
          Welcome to CityChurch, a dynamic Christian church with a vision to
          make a difference in Choucester (UK), the wider region and the
          nations. We are part of{" "}
          <span className="text-myblue font-medium">
            <a href="http://www.regions-beyond.com/">Regions Beyond</a>
          </span>
          , an initiative linking churches together across the globe. We meet on
          Sundays at 10.30 am at The Chapel on Seymour Road, GL1 5PT (see map).
        </p> */}
        </div>
        <section className="text-gray-600 body-font relative min-h-96">
          <div className="min-h-96  h-96 md:h-full md:absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.1222734224232!2d-2.2514060365518294!3d51.852025806259995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48710678dfe85385%3A0xa984dad8bfa8d1f6!2sCity%20Church%20Gloucester!5e0!3m2!1sen!2suk!4v1670590432110!5m2!1sen!2suk"
              // style=""
            ></iframe>
          </div>
          <div className="container md:px-5 px-2 py-4 md:py-24 mx-auto flex">
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            >
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                We'd love to hear from you.
              </h2>
              {/* <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}

              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="test"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-myblue-dark focus:ring-2 focus:ring-myblue-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-myblue-dark focus:ring-2 focus:ring-myblue-light text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="w-full bg-white rounded border border-gray-300 focus:border-myblue-dark focus:ring-2 focus:ring-myblue-light h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-myblue border-0 py-2 px-6 focus:outline-none hover:bg-myblue-dark rounded text-lg">
                {buttonText}
              </button>
              {missingInfoMessage.length == 0 ? (
                <p></p>
              ) : (
                <p className="text-red-600 font-medium">
                  Please complete {missingInfoMessage} fields
                </p>
              )}
              {/* <p className="text-xs text-gray-500 mt-3">
              Thanks
            </p> */}
              {showSentMessagePopUp && (
                <div className="popUp w-full h-full bg-white absolute top-0 left-0">
                  <div className="p-2 absolute w-[75%] top-1/2 -translate-x-[50%] left-1/2 -translate-y-[50%] bg-white rounded-lg text-center ">
                    <div
                      onClick={close}
                      className="rounded-md p-2 m-2 border-2 border-gray-200  hover:bg-myblue-light absolute right-2 top-2 cursor-pointer text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    {showSuccessMessage && (
                      <div className="mt-20 mb-12">
                        <p className="">Thank you for your message.</p>
                        <p className="mt-2 ">
                          One of our team will get back to you shortly if
                          requested.
                        </p>
                      </div>
                    )}
                    {showFailureMessage && (
                      <div className="mt-20 mb-12">
                        <p className="">Uh oh! Something went wrong.</p>
                        <p className="mt-2 ">Please try again!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
