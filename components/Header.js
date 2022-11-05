import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import PopOver from "./Header/PopOver";
import LogoMini from "./LogoMini";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const aboutUs = [
  {
    name: "About Us",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Our Values",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Statement of Faith",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Meet the Team",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
  {
    name: "Students",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const communityLife = [
  {
    name: "Community Life",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "What's On",
    description: "Take a look at our church calendar",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Students",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Children",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Serving",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const newHere = [
  {
    name: "New Here",
    description: "Our heart to serve our local community",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Your First Sunday Visit",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
];
const communityAction = [
  {
    name: "Community Action",
    description: "Our heart to serve our local community",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Noah's Ark",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Food Bank",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Supporting Local Action",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];
const resources = [
  {
    name: "Resources",
    description: "Check out our free materials to help you grow in faith",
    href: "#",
    icon: ChartBarIcon,
  },
];
const contactUs = [
  {
    name: "Contact Us",
    description: "We'd love to hear from you",
    href: "#",
    icon: ChartBarIcon,
  },
];

export default function Header2() {
  return (
    <Popover className="relative bg-white px-4 sm:px-6 z-10">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6"> */}

      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <LogoMini />
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-myblue  hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myblue">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="hidden space-x-2 md:flex md:justify-center align-middle items-center"
        >
          <PopOver menuList={aboutUs} menuListName="About Us" />
          <PopOver menuList={communityLife} menuListName="Community Life" />
          <PopOver menuList={newHere} menuListName="New Here" />
          <PopOver menuList={communityAction} menuListName="Community Action" />
          <PopOver menuList={resources} menuListName="Resources" />
        </Popover.Group>
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 hover:opacity-50">
          <a
            href="#"
            className="whitespace-nowrap font-medium text-myblue rounded-br-3xl rounded-tl-3xl border-myblue border-2 border-opacity-75 text-base font-sans px-4 py-2 hover:opacity-50"
          >
            Contact Us
          </a>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden "
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <LogoMini />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myblue">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 overflow-auto overscroll-contain max-h-[80vh]">
                <nav className="flex flex-wrap">
                  {/* <nav className="grid gap-y-8"> */}
                  {[
                    ...aboutUs,
                    ...communityLife,
                    ...newHere,
                    ...communityAction,
                    ...resources,
                    ...contactUs,
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center rounded-md p-2 sm:p-4 hover:bg-gray-50 flex-[1_1_100%] sm:flex-[1_1_50%]"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-myblue"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            {/* <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Church Diary
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contact Us
                </a>
                {communityLife.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div> 
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div> 
                </div> */}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
