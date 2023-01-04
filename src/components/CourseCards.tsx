import React from "react";
import { FaRegHeart } from "react-icons/fa";

const CourseCards = () => {
  const Arry = [1, 2, 3, 4];
  return (
    <div className="flex flex-wrap">
      {Arry.map((item) => (
        <>
          <div className="p-4 lg:w-1/2">
            <div className="flex h-full flex-col rounded-lg bg-white p-4">
              <div className="mb-3 flex items-center">
                <h2 className="title-font text-lg font-semibold text-black">
                  Introduction to hadoop
                </h2>
                <span className="flex-grow" />
                <span className="inline-flex items-center justify-center bg-yellow-400 px-2 py-1 text-xs font-medium leading-none text-black">
                  Course
                </span>
              </div>
              <div className="flex-grow">
                <p className="text-base leading-relaxed">
                  Apache Hadoop is a collection of open-source software
                  utilities that facilitate using a network of many computers to
                  solve problems involving massive amounts of data and
                  computation.
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="inline-flex items-center justify-center border border-yellow-500 bg-yellow-100 px-2 py-1 text-xs font-medium leading-none text-yellow-700">
                  Course
                </div>
                <span className="flex-grow" />
                <span className="text-black">
                  ₹ 500
                  <span className="ml-2 text-gray-400 line-through">
                    ₹ 1000
                  </span>
                </span>
              </div>
              <div className="mt-1 flex items-center">
                <div className="inline-flex items-center justify-center">
                  <FaRegHeart />
                </div>
                <span className="flex-grow" />
                <span className="text-black">
                  <button className="inline-flex items-center justify-center border border-blue-500 bg-blue-500 px-4 py-2 text-xs font-medium leading-none text-white">
                    Start Learning <span className="ml-2">{">"}</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CourseCards;
