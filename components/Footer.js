import React from "react";
import LogoMini from "./LogoMini";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center bg-myblue bg-gradient-to-br from-myblue via-[#98c8e1] via-[#83adc3] to-myblue text-white border-t-8 border-white lg:text-left">
      {/* facebook */}
      <div class="flex justify-center items-center p-2 border-b-2 border-white">
        <div class="p-4 hidden font-semibold lg:block text-xl">
          <span>Connect with us:</span>
        </div>
        <div class="flex justify-center content-center align-middle p-4">
          <Link
            href="https://www.facebook.com/citychurchgloucester/"
            class="mx-2 pt-[0px] pr-2 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              ></path>
            </svg>
          </Link>
          <Link
            href="https://twitter.com/citychurchglos"
            class="mx-2 text-white"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="w-8"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </Link>
          {/* <Link href="#!" class="mx-2 text-gray-600">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              class="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
          </Link> */}
          <Link href="#!" class="mx-2 text-white">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="w-7"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </Link>
          {/* <Link href="#!" class="mx-2 text-gray-600">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </Link> */}
        </div>
      </div>
      <div class="mx-6 py-10 text-center md:text-left">
        {/* regions beyond */}
        <div class="grid grid-1 md:grid-cols-2 lg:flex gap-8">
          <div class="basis-4/12">
            <div class="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
              <div
                className="w-[100] grow-0 max-w-[100] mr-3 overflow-clip"
                aria-hidden="true"
                focusable="false"
                //class="mr-3"
                role="img"
              >
                <LogoMini />
              </div>
              <div className="">CityChurch Choucester</div>
            </div>
            <Link
              href="http://www.regions-beyond.com/"
              className="flex flex-col items-center justify-center md:items-start"
            >
              <p className="px-4 md:px-0">
                We are part of Regions Beyond, an initiative linking churches
                together across the globe
              </p>
              <div className="relative h-[10vh] w-[200px] ">
                <Image
                  src={"/images/Regions-Beyond.png"} //"/images/students.jpg"
                  alt="Regions Beyond"
                  fill
                  sizes="50vw"
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                  }}
                  // className="animate-fadein1"
                />
              </div>
            </Link>
          </div>
          {/* What's on */}
          <div class="text-center basis-2/12">
            <h6 class="text-center uppercase font-semibold mb-4  md:justify-start">
              What's On
            </h6>
            <p class="mb-4">
              <Link href="/Calendar" class="text-white">
                Calendar
              </Link>
            </p>
            <p class="mb-4">
              <Link href="/CommunityLife" class="text-white">
                Community
              </Link>
            </p>
            <p class="mb-4">
              <Link href="/Students" class="text-white">
                Students
              </Link>
            </p>
            <p>
              <Link href="/Children" class="text-white">
                Children
              </Link>
            </p>
          </div>
          {/* Community action */}
          <div class="text-center basis-2/12">
            <h6 class="text-center uppercase font-semibold mb-4  md:justify-start">
              Community Action
            </h6>
            <p class="mb-4">
              <Link href="/NoahsArk" class="text-white">
                Noah's Ark
              </Link>
            </p>
            <p class="mb-4">
              <Link href="/FoodBank" class="text-white">
                Food Bank
              </Link>
            </p>
            <p class="mb-4">
              <Link href="/CityMission" class="text-white">
                Choucester City Mission
              </Link>
            </p>
            <p>
              <Link
                href="https://citygloucester.churchsuite.com/donate/"
                class="text-white"
              >
                Donate
              </Link>
            </p>
          </div>
          {/* Contact */}
          <div class="basis-4/12 md:pl-6">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <div class="flex items-center justify-center md:justify-start mb-4">
              <div className="hidden sm:block ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="home"
                  class="w-6 mr-4 -ml-[3px]"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                  ></path>
                </svg>
              </div>
              The Chapel, Seymour Road, Choucester, GL15PT
            </div>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="w-[18px] mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              office@citychurchchoucester.org
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                class="w-[18px] mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>
      <div class="text-center p-8 border-t-2 border-white space-x-4 flex justify-between">
        <span>© 2022 Copyright: CityChurch Choucester </span>
        <span>Registered Charity: 1154813</span>
        {/* </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
