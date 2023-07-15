import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //     fetch('https://manufacturer-website-server-production.up.railway.app/review')
  //         .then(res => res.json())
  //         .then(data => setReviews(data));
  // }, [reviews])
  return (
    <div>
      <div className="my-10  py-[40px] overflow-hidden">
        <div className="group">
          <h2 className="text-center text-4xl font-semibold text-black mb-6 uppercase ">
            Customer reviews{" "}
          </h2>
          <div className="border-b-2 w-28 mx-auto text-center transition-all duration-300 border-[#12dd2a] group-hover:scale-x-[15]"></div>
        </div>

        <div className="flex text-white float-right px-5">
          <a
            href="#set1"
            title="previous"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  text-black mx-2"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </a>
          <a
            href="#set2"
            title="next"
            type="button"
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  text-black mx-2"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>

        <div className="carousel w-full">
          <div
            id="set1"
            className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 "
          >
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />{" "}
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />{" "}
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />{" "}
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />
          </div>
          <div
            id="set2"
            className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 "
          >
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />
            <ReviewCard
              title="Amazing experience!"
              body="I had an incredible time on my trip with this tour company. The sights were breathtaking and the guides were knowledgeable and friendly. I would highly recommend this company to anyone looking for an unforgettable adventure."
              author="John Smith"
              date="April 17, 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
