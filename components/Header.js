import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import PopOver from "./Header/PopOver";
import LogoMini from "./LogoMini";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  CursorArrowRaysIcon,
  GifIcon,
  HandThumbUpIcon,
  HeartIcon,
  LifebuoyIcon,
  MegaphoneIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserPlusIcon,
  XMarkIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ListBulletIcon,
  UserCircleIcon,
  UserIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const aboutUs = [
  {
    name: "About Us",
    description: "Find out who we are and why.",
    href: "AboutUs",
    icon: UserCircleIcon,
  },
  {
    name: "Our Values",
    description: "A little about the values we seek to live by.",
    href: "OurValues",
    icon: ShieldCheckIcon,
  },
  {
    name: "Statement of Faith",
    description: "Read the set of core beliefs we hold on to.",
    href: "StatementOfFaith",
    icon: ListBulletIcon,
  },
  {
    name: "Meet the Team",
    description: "Find out who's who at City Church.",
    href: "MeetTheTeam",
    icon: UserIcon,
  },
];

const communityLife = [
  {
    name: "Community Life",
    description: "God loves community and so do we.",
    href: "CommunityLife",
    icon: UserGroupIcon,
  },
  {
    name: "What's On",
    description: "Take a look at our church calendar.",
    href: "Calendar",
    icon: CalendarDaysIcon,
  },
  {
    name: "Students",
    description: "Get involved with our thriving students' group.",
    href: "Students",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Children",
    description: "Kids are a very welcome part of CityChurch.",
    href: "Children",
    icon: SparklesIcon,
  },
  {
    name: "Serving",
    description: "Showing love by serving one another.",
    href: "Serving",
    icon: HandThumbUpIcon,
  },
];
const newHere = [
  {
    name: "New Here",
    description: "We'd love to answer any questions you have.",
    href: "NewHere",
    icon: HeartIcon,
  },
  {
    name: "Your First Sunday Visit",
    description: "What to expect if you join us for a Sunday service.",
    href: "Sunday",
    icon: ChatBubbleBottomCenterIcon,
  },
];
const communityAction = [
  {
    name: "Community Action",
    description: "Our heart to serve our local community",
    href: "CommunityAction",
    icon: HeartIcon,
  },
  {
    name: "Noah's Ark",
    description: "Our wonderful children's free weekly event.",
    href: "NoahsArk",
    icon: SparklesIcon,
  },
  {
    name: "Food Bank",
    description: "Loving our community in need.",
    href: "FoodBank",
    icon: GiftIcon,
  },
  {
    name: "Choucester City Mission",
    description: "Reaching out to the streets",
    href: "CityMission",
    icon: ShieldCheckIcon,
  },
  {
    name: "Street Pastors",
    description: "Ministering to Choucester's Night Life",
    href: "StreetPastors",
    icon: ShieldCheckIcon,
  },
  // {
  //   name: "Supporting Local Action",
  //   description: "Discover how you can get involved locally.",
  //   href: "#Community",
  //   icon: ShieldCheckIcon,
  // },
];
const resources = [
  {
    name: "Resources",
    description: "Check out our free materials to help you grow in faith",
    href: "#",
    icon: MegaphoneIcon,
  },
];
const contactUs = [
  {
    name: "Contact Us",
    description: "We'd love to hear from you",
    href: "#",
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export default function Header() {
  return (
    <Popover className="absolute w-full md:bg-white md:opacity-90 px-4 sm:px-6 z-10 2xl:max-w-7xl 2xl:mx-auto">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6"> */}

      <div className="flex items-center justify-between py-4 sm:py-6">
        <div className="hidden sm:flex">
          <LogoMini />
        </div>
        {/* menu button */}
        <div className="md:-my-2  md:hidden md:w-0">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-myblue  hover:opacity-50 ">
            {/* focus:outline-none  */}
            {/* focus:ring-2 focus:ring-inset focus:ring-myblue"> */}
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="hidden  md:flex md:justify-center align-middle items-center"
        >
          <PopOver menuList={aboutUs} menuListName="About Us" />
          <PopOver menuList={communityLife} menuListName="Community Life" />
          <PopOver menuList={newHere} menuListName="New Here" />
          <PopOver menuList={communityAction} menuListName="Community Action" />
          <PopOver menuList={resources} menuListName="Resources" />
        </Popover.Group>
        <div className="hidden md:items-center md:justify-end md:flex md:flex-0  hover:opacity-50">
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    {/* focus:outline-none focus:ring-2 focus:ring-inset focus:ring-myblue"> */}
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
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
