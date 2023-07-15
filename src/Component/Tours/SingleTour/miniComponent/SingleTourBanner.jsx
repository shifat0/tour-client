import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleTourBanner = ({ tour }) => {
  return (
    <div className="container mx-auto border-b-2 border-grey-200 py-5">
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <h2 className="text-start text-2xl tracking-tighter font-bold flex flex-col">
          <span>{tour?.title}</span>
          <span className="text-gray-00 text-[1rem] flex  items-center">
            <SlLocationPin /> {tour?.startLocation}
          </span>
        </h2>
        <div className="space-x-8 flex  py-2 lg:py-0">
          <div class="flex justify-center items-center space-x-2">
            <div className="text-3xl text-primary">
              <GiPriceTag />
            </div>
            <div class="text-black flex flex-col justify-center align-center items-center ">
              <h4 class="text-gray-600 text-[1rem]">from</h4>
              <div class="item-value text-xl font-semibold flex items-center">
                <TbCurrencyTaka /> {tour?.price}{" "}
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center space-x-2">
            <div className="text-3xl text-primary">
              <AiOutlineFieldTime />
            </div>
            <div class="text-black flex flex-col">
              <h4 class="text-gray-600 text-[1rem]">Duration</h4>
              <div class="item-value text-xl font-semibold">
                {tour?.duration} days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTourBanner;
