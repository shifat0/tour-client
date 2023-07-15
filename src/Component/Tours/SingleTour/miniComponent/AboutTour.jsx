import React from "react";
import { FcApproval } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import BookingTour from "./BookingTour";
import RatingForm from "./RatingForm";
const AboutTour = ({ tour }) => {

  return (
    <div>
      <div
        className="pt-12  bbg-gray-800  btext-gray-100 
            container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5
            "
      >
        {/* tour details */}
        <div
          className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded
                w-full  xl:col-span-3 italic"
        >
          <div className="flex">
            {/* about tour */}
            <div className="text-start  leading-8 ">
              <p className="inline-block text-2xl font-semibold sm:text-xl text-primary">
                Explore Tours
              </p>
              <p className="text-justify mr-3">
                {tour?.description}
              </p>
            </div>
            <img
              src={tour?.imageCover}
              alt=""
              className="opacity-100 w-1/2 p-3 float-right text-end h-60 sm:h-96"
            />
          </div>
        </div>
        {/* tour booking
         */}
        <div className="w-full rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
          <div className="shadow-lg py-12 mb-10 px-5">
            <h1 className="text-3xl font-extrabold  btext-gray-50">
              Booking for {tour?.title}
            </h1>
            <p className="my-8">
              <span className="font-medium  btext-gray-50">
                You ar booking for {tour?.title}
              </span>
              To conferm the tour booking please see the user profile for your tour status.
            </p>
            {/* form tour booking */}
            <BookingTour
              id={tour?._id}
              title={tour?.title}
              price={tour?.price}
            />
          </div>

          {/* rating */}
          <RatingForm />

        </div>
      </div>
      {/* fqa section */}
      {/* <div className="w-3/4 flex flex-col justify-center pb-5 ">
        <h2 className="text-2xl font-semibold sm:text-4xl py-3">Tour Plan</h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 1st
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4  btext-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 3rd
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4  btext-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Day 2nd
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4  btext-gray-400">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{" "}
            </p>
          </details>
        </div>
      </div> */}
    </div>
  );
};

export default AboutTour;
