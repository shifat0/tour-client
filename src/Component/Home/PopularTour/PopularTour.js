import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../../UserContext/userContext";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import "./PopularTour.css";

const PopularTour = () => {
  const scrollPosition = useScrollPosition();
  const navigate = useNavigate();
  const { tours, email, isLoading, isError, userData } =
    useContext(UserContext);

  const [showMore, setShowMore] = useState(false);
  const firstFourTours = tours.slice(0, 4);
  const remainingTours = tours.slice(4);
  const visibleTours = showMore ? tours : firstFourTours;


  let content = null;
  if (isLoading) {
    return <p>Loading......</p>;
  }
  if (isError) {
    console.log("error data");
  }
  if (tours && !isLoading) {
    content = visibleTours?.map((tour) => {
      return (
        <div className="card   flex w-auto pb-5 px-1  lg:mb-0">
          <div className="card__slide shadow-md">
            <div className="absolute w-full  ">
              {/* <div className="card-picture card-pic-1"></div> */}
              <img
                alt="tour IMage"
                className="h-60 w-full"
                src={tour?.imageCover}
              />
              <h4 className="flex flex-wrap relative left-1/3 top-[-4rem] font-semibold ">
                <span className=" text-white px-4 text-xl py-1 bg-gradient-to-r from-cyan-400 to-blue-400">
                  {tour?.title}
                </span>
              </h4>
              <div className="w-full  mx-auto text-center">
                <ul className=" py-2 text-center">
                  <li className="text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1 ">
                    {tour?.duration} days tour
                  </li>
                  <li className="text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1">
                    Up to {tour?.maxGroupSize} people
                  </li>
                  <li className="text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1">
                    Tours start {tour?.startDates[0].split("T")[0]}
                  </li>
                  <li className="text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1">
                    Start location {tour?.startLocation}
                  </li>
                  <li className="text-center w-[50%] border-b-2 border-gray-200 mx-auto py-1">
                    sleeping facility
                  </li>
                </ul>
              </div>
            </div>

            <div className="card__slide-back  bg-gradient-to-r from-purple-500 to-pink-500">
              <div className="card-backpart">
                <p className="prize-text">Only</p>
                <p className="prize-value">$279</p>
                <button
                  className="btn btn--white"
                  onClick={() => handelTour(tour?._id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  const handleDiscoverClick = () => {
    setShowMore(true);
  };
  const handelTour = (id) => {
    if (userData?.email) {
      navigate(`/single/${id}`)
      window.scroll(0, 0)
    }
    else {
      navigate("/login");
    }

  }
  return (
    <div
      className={`${scrollPosition === 0 ? "relative top-[-80px]" : ""
        } overflow-hidden`}
    >
      <section className="section__tours">
        <div className="group my-8">
          <h2 className="text-center text-4xl font-semibold text-black mb-6 uppercase ">
            Most Popular tours
          </h2>
          <div className="border-b-2 w-28 -mt-2 mx-auto text-center transition-all duration-300 border-[#12dd2a] group-hover:scale-x-[15]"></div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-2 ">
          {content}
        </div>
        {!showMore && (
          <div className="text-center mx-auto  my-2 ">
            <button className="bg-gray btn" onClick={handleDiscoverClick}>
              Show more
            </button>
          </div>
        )}
        <div className="border-b-2 mt-5 border-grey-200"></div>
      </section>
    </div>
  );
};

export default PopularTour;
