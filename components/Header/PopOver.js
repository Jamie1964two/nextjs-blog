import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useState } from "react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PopOver(props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "px-2 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900  "
              // focus:ring-offset-4 focus:outline-none focus:ring-2 focus:ring-myblue "
            )}
          >
            {/* {props.menuList.length == 1 && (
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                {props.menuListName}
              </a>
            )} */}
            {/* {props.menuList.length > 1 && ( */}
            <>
              <span>{props.menuListName}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500 hidden lg:block"
                )}
                aria-hidden="true"
              />
            </>
            {/* )} */}
          </Popover.Button>
          {/* {props.menuList.length > 1 && ( */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
              <div className="overflow-hidden rounded-lg shadow-lg">
                {/* ring-1 ring-black ring-opacity-5"> */}
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {props.menuList.map((item) => (
                    <Popover.Button
                      as={Link}
                      href={"/" + item.href}
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      key={item.name}
                    >
                      {/* Insights
                      <Link
                        href={"/" + item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        key={item.name}
                      > */}
                      {/* <a
                        key={item.name}
                        // href={item.href}
                        className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                      > */}
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-myblue"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                      {/* </a> */}
                      {/* </Link> */}
                    </Popover.Button>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          {/* )} */}
        </>
      )}
    </Popover>
  );
}
