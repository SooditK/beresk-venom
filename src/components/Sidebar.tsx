import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  HomeIcon,
  MenuAlt2Icon,
  XIcon,
} from "@heroicons/react/outline";
import { GiPathDistance } from "react-icons/gi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineSetting,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillJournalBookmarkFill, BsBriefcase } from "react-icons/bs";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GrChatOption } from "react-icons/gr";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";

import RightSide from "./RightSideList";
import Pills from "./Pills";
import TextSection from "./TextSection";
import Curator from "./Curator";
import BulletList from "./BulletList";
import Accordion from "./Accordion";
import CourseCards from "./CourseCards";
import Objective from "./Objective";
import Accordion2 from "./Accordion2";
import MainCard from "./MainCard";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  {
    name: "My Learning",
    href: "#",
    icon: BsFillJournalBookmarkFill,
    current: false,
  },
  { name: "Learning Path", href: "#", icon: GiPathDistance, current: false },
  {
    name: "Live Projects",
    href: "#",
    icon: AiOutlineFundProjectionScreen,
    current: false,
  },
  { name: "Jobs", href: "#", icon: BsBriefcase, current: false },
  { name: "Ask me Anything", href: "#", icon: GrChatOption, current: false },
  { name: "Performance", href: "#", icon: BiBarChartAlt2, current: false },
  { name: "Cart", href: "#", icon: AiOutlineShoppingCart, current: false },
  { name: "Settings", href: "#", icon: AiOutlineSetting, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "bg-gray-100" : "",
                          "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 h-6 w-6 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        <span className="text-black">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "border-l-4 border-blue-500 bg-gray-100"
                        : "hover:bg-gray-50",
                      "group flex items-center rounded-r-md px-2 py-2 text-sm font-semibold text-black"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? "" : "text-black",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-indigo-100 md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 items-center justify-between gap-x-8 px-4">
              <button
                type="button"
                className="flex h-8 items-center rounded-md bg-blue-500 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore
                <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="flex w-full items-center justify-start text-gray-400 focus-within:text-gray-600">
                    <SearchIcon
                      className="h-8 rounded-l-md bg-slate-200 p-1"
                      aria-hidden="true"
                    />
                    <input
                      id="search-field"
                      className="h-8 border-transparent bg-slate-200 py-2 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search Course"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex flex-1 flex-col gap-y-8 overflow-y-auto bg-indigo-50">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="h-96 rounded-lg">
                    <MainCard />
                  </div>
                  <div className="my-4 grid grid-cols-12 gap-4">
                    <div className="col-span-9">
                      <div className="h-96 rounded-lg border-gray-200">
                        <Pills />
                        <TextSection />
                        <Curator />
                        <BulletList />
                        <Objective />
                        <Accordion />
                        <CourseCards />
                        <Accordion2 />
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div className="h-96 rounded-lg border-gray-200">
                        <RightSide />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
