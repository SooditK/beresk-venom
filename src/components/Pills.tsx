import React from "react";

const Pills = () => {
  return (
    <div className="my-4">
      <div className="-m-1 flex flex-wrap">
        <div className="p-1">
          <span className="mr-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white shadow-xl">
            About
          </span>
        </div>
        <div className="p-1">
          <span className="mr-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-gray-700">
            Content
          </span>
        </div>
        <div className="p-1">
          <span className="mr-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-gray-700">
            Recommended Course
          </span>
        </div>
        <div className="p-1">
          <span className="mr-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-gray-700">
            FAQ
          </span>
        </div>
        <div className="p-1">
          <span className="mr-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-gray-700">
            Curator
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pills;
