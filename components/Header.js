import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-myblue p-6 border-b-white border-b-2 ">
        {/* fixed w-full z-10 top-0 */}
        <div className="text-white mr-6 text-xl">
          <a
            class="no-underline tracking-tight font-sans  hover:opacity-50 transition-opacity duration-300"
            href="#"
          >
            CityChurch
          </a>
        </div>

        <div class="block md:hidden">
          <button
            id="nav-toggle"
            class="flex items-center px-2 py-2 border-2 rounded text-white border-white opacity-75 hover:opacity-25 transition-opacity duration-300"
          >
            <svg
              class="fill-current h-4 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                stroke="white"
                stroke-width="1"
              />
            </svg>
          </button>
        </div>

        <div
          class="w-full flex-grow md:flex md:items-center md:w-auto hidden pt-6 md:pt-0"
          id="nav-content"
        >
          <ul class="list-reset text-sm lg:text-base md:flex justify-end flex-1 items-center text-center">
            <li class="mr-1 ">
              <a
                class="inline-block py-2 px-1 lg:px-2 text-white no-underline"
                href="#"
              >
                About us
              </a>
              <div className="bg-white p-2 absolute mt-4">Other items</div>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                What's on
              </a>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                Community life
              </a>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                New here
              </a>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                Community Action
              </a>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                Resources
              </a>
            </li>
            <li class="mr-1">
              <a
                class="inline-block text-white opacity-75 no-underline hover:opacity-50 hover:text-underline py-2 px-1 lg:px-2"
                href="#"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
