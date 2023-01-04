import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Curator = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Curator</h1>
      <div className="my-4 rounded-xl bg-white px-4 py-2">
        <div className="my-4 flex items-center justify-center gap-x-8">
          <div className="flex w-1/4 flex-col items-center gap-y-4">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="curator"
              height={500}
              width={500}
              className="h-36 w-36 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold">Jane Doe</h4>
              <p className="text-sm text-slate-600">Subject Matter Expert</p>
            </div>
          </div>
          <div className="flex w-3/4 flex-col">
            <h1 className="mb-4 text-3xl font-bold">Heading</h1>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec tincidunt luctus, nunc nisl aliquam massa, nec
              ultricies nunc nisl sit amet mauris. Sed euismod, nisl nec
              tincidunt luctus, nunc nisl aliquam massa, nec ultricies nunc nisl
            </p>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500">
              <FaLinkedinIn className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curator;
