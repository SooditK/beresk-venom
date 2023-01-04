import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Objective = () => {
  return (
    <div className="my-4">
      <div className="flex flex-col gap-y-4 rounded-lg bg-white p-4">
        <h1 className="mx-3 text-3xl font-bold">Curator</h1>
        <div className="flex p-3">
          <div className="mr-4 flex text-xl">
            <FcCheckmark className="mr-3 h-16 w-auto text-xl text-green-500" />
            Follow the design as closely; emphasis with users, define pain
            points and ideate solutions, create wireframes and prototypes, and
            test with users.
          </div>
          <div className="mr-4 flex text-xl">
            <FcCheckmark className="mr-3 h-16 w-auto text-xl text-green-500" />
            Follow the design as closely; emphasis with users, define pain
            points and ideate solutions, create wireframes and prototypes, and
            test with users.
          </div>
        </div>
        <div className="flex p-3">
          <div className="mr-4 flex text-xl">
            <FcCheckmark className="mr-3 h-16 w-auto text-xl text-green-500" />
            Follow the design as closely; emphasis with users, define pain
            points and ideate solutions, create wireframes and prototypes, and
            test with users.
          </div>
          <div className="mr-4 flex text-xl">
            <FcCheckmark className="mr-3 h-16 w-auto text-xl text-green-500" />
            Follow the design as closely; emphasis with users, define pain
            points and ideate solutions, create wireframes and prototypes, and
            test with users.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objective;
