import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

const QuestionAnswers = [
  {
    question: "What are the prerequisites for this course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore necessitatibus voluptate, voluptatum mollitia. Id mollitia quas molestias soluta.",
  },
  {
    question: "What are the prerequisites for this course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore necessitatibus voluptate, voluptatum mollitia. Id mollitia quas molestias soluta.",
  },
  {
    question: "What are the prerequisites for this course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore necessitatibus voluptate, voluptatum mollitia. Id mollitia quas molestias soluta.",
  },
  {
    question: "What are the prerequisites for this course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore necessitatibus voluptate, voluptatum mollitia. Id mollitia quas molestias soluta.",
  },
  {
    question: "What are the prerequisites for this course?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero labore necessitatibus voluptate, voluptatum mollitia. Id mollitia quas molestias soluta.",
  },
];

const Accordion2 = () => {
  return (
    <>
      {QuestionAnswers.map((qa, index) => (
        <Disclosure key={index}>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-4 flex w-full justify-between rounded-lg bg-white px-4 py-4 text-left text-sm font-medium text-black hover:text-slate-900 focus:outline-none">
                <span>{qa.question}</span>
                <ChevronRightIcon
                  className={`${
                    open ? "rotate-90 transform" : ""
                  } h-5 w-5 text-slate-500`}
                />
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

export default Accordion2;
