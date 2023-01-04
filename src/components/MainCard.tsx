import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";

const MainCard = () => {
  return (
    <>
      <div className="h-full bg-white p-4">
        <div className="flex h-full flex-col rounded-lg p-4">
          <div className="mb-3 flex items-center">
            <h2 className="title-font text-3xl font-bold text-black">
              Introduction to hadoop
            </h2>
            <span className="flex-grow" />
            <div className="mx-2 inline-flex items-center justify-center">
              <FaRegHeart className="text-xl" />
            </div>
            <div className="inline-flex items-center justify-center">
              <MdShare className="text-xl" />
            </div>
          </div>
          <div>
            <p className="text-base leading-relaxed">
              Apache Hadoop is a collection of open-source software utilities
              that facilitate using a network of many computers to solve
              problems involving massive amounts of data and computation.
            </p>
          </div>
          <div className="mt-3 flex-grow">
            <div className="flex max-w-lg flex-col gap-y-4">
              <div className="flex items-center justify-between gap-8">
                <div className="inline-flex items-center justify-center gap-x-3">
                  <GrGroup className="text-3xl" />
                  <div className="flex flex-col">
                    <span className="font-bold">Certified By:</span>
                    <span>Classroom Instructor Team</span>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-x-3">
                  <BiWorld className="text-3xl" />
                  <div className="flex flex-col">
                    <span className="font-bold">Languages:</span>
                    <span>English, Spanish, German</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between gap-8">
                <div className="inline-flex items-center justify-center gap-x-3">
                  <BsStopwatch className="text-3xl" />
                  <div className="flex flex-col">
                    <span className="font-bold">Last updated:</span>
                    <span>One Month Ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-1 flex items-center">
            <span className="flex-grow" />
            <div className="flex flex-col text-black">
              <div>
                <span className="text-2xl font-bold">Price</span>
                <span className="ml-2 text-2xl font-bold text-orange-600">
                  ₹ 799
                </span>
                <span className="ml-2 text-sm line-through">₹ 999</span>
                <span className="text ml-2 text-blue-500">20% off</span>
              </div>
              <div className="mt-4 flex gap-x-4">
                <button className="inline-flex items-center justify-center rounded-lg border border-black px-4 py-2 font-medium leading-none text-black">
                  Add to Cart
                  <ShoppingCartIcon className="mr-2 h-4 w-4" />
                </button>
                <button className="bg-blue inline-flex items-center justify-center rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 font-medium leading-none text-white">
                  Buy Now
                  <ShoppingBagIcon className="mr-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
