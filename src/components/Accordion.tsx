import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { BsBook, BsClock } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import { AiOutlineFileText, AiOutlineQuestionCircle } from "react-icons/ai";

const List = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex list-inside flex-col">
        <div className="my-2 flex items-center justify-between border-b-2 border-gray-200 pb-2 text-xl">
          <div className="flex items-center">
            <span className="mr-4 text-blue-700">
              <BiPlayCircle />
            </span>
            JavsScript + HTML + CSS fundamentals are absolutely required
          </div>
          <div className="rounded-xl bg-blue-100 px-2 text-sm text-blue-800">
            2h 30m
          </div>
        </div>
        <div className="my-2 flex items-center justify-between border-b-2 border-gray-200 pb-2 text-xl">
          <div className="flex items-center">
            <span className="mr-4 text-blue-700">
              <AiOutlineFileText />
            </span>
            You DONT need to be a JavaScript expert to succeed in this course
          </div>
          <div className="rounded-xl bg-blue-100 px-2 text-sm text-blue-800">
            2h 30m
          </div>
        </div>
        <div className="my-2 flex items-center justify-between border-b-2 border-gray-200 pb-2 text-xl">
          <div className="flex items-center">
            <span className="mr-4 text-blue-700">
              <AiOutlineQuestionCircle />
            </span>
            ES6+ JavaScript knowledge is beneficial but not a must-have
          </div>
          <div className="rounded-xl bg-blue-100 px-2 text-sm text-blue-800">
            2h 30m
          </div>
        </div>
        <div className="my-2 flex items-center justify-between border-b-2 border-gray-200 pb-2 text-xl">
          <div className="flex items-center">
            <span className="mr-4 text-blue-700">
              <AiOutlineQuestionCircle />
            </span>
            NO prior React or any other JS framework experience is required
          </div>
          <div className="rounded-xl bg-blue-100 px-2 text-sm text-blue-800">
            2h 30m
          </div>
        </div>
      </div>
    </div>
  );
};

const Modules = [
  {
    question: "Module",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <List />,
  },
  {
    question: "Module",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <List />,
  },
  {
    question: "Module",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <List />,
  },
  {
    question: "Module",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <List />,
  },
  {
    question: "Module",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <List />,
  },
];

const Accordion2 = () => {
  return (
    <>
      {Modules.map((qa, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-black hover:text-slate-900 focus:outline-none">
                <span className="flex items-center">
                  {qa.icon}
                  {qa.question + " " + (index + 1)}
                </span>
                <div className="flex items-center">
                  {qa.righticon}
                  <span className="mr-4 text-blue-700">{qa.righttext}</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-slate-500`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel
                  static
                  className="bg-white px-4 pt-4 pb-2 text-sm text-slate-800"
                >
                  {qa.answer}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

const Courses = [
  {
    question: "Course",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <Accordion2 />,
  },
  {
    question: "Course",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <Accordion2 />,
  },
  {
    question: "Course",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <Accordion2 />,
  },
  {
    question: "Course",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <Accordion2 />,
  },
  {
    question: "Course",
    icon: <BsBook className="mr-4 text-2xl text-blue-500" />,
    righttext: "2h 30m",
    righticon: <BsClock className="mr-4 text-xl" />,
    answer: <Accordion2 />,
  },
];

const Accordion = () => {
  return (
    <>
      {Courses.map((qa, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-black hover:text-slate-900 focus:outline-none">
                <span className="flex items-center">
                  {qa.icon}
                  {qa.question + " " + (index + 1)}
                </span>
                <div className="flex items-center">
                  {qa.righticon}
                  <span className="mr-4 text-blue-700">{qa.righttext}</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-5 w-5 text-slate-500`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Disclosure.Panel
                  static
                  className="px-4 pt-4 pb-2 text-sm text-slate-800"
                >
                  {qa.answer}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

export default Accordion;
