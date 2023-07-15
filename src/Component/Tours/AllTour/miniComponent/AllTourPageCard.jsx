import React, { useContext } from 'react';
import { UserContext } from '../../../../UserContext/userContext';
import { useNavigate } from "react-router-dom"

const AllTourPageCard = ({ tour }) => {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div class="w-full p-1 rounded overflow-hidden shadow-lg bg-white" >
      <img class="w-full h-52" src={tour?.imageCover} alt="Saintmartin" />
      <div class="px-4 py-4">
        <div class="font-bold text-xl mb-2 uppercase">{tour?.title}</div>
      </div>
      <div class="px-4 flex flex-wrap">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Duration: {tour?.duration}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Price: {tour?.price}</span>
      </div>
      <div class="px-4 py-2 flex flex-wrap">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Start Date: {tour?.startDates[0].split("T")[0]}</span>
      </div>
      <div class="px-4 py-2 flex flex-wrap">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Start Location:{tour?.startLocation}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-2">Max Group Size: {tour?.maxGroupSize}</span>
      </div>
      <div class="px-4 py-2 flex flex-wrap">
        <p className='px-2'>{tour?.description && (tour.description.length > 40 ? tour?.description?.slice(0, 43) + '...' : tour.description)}</p>
      </div>
      <div className="text-center mx-auto  my-2 ">
        <button className="bg-gray btn" onClick={() => {
          userData?.email
          ? navigate(`/single/${tour?._id}`)
          : navigate("/login");
        }}>
          Book Now
        </button>
      </div>
    </div>

  );
};

export default AllTourPageCard;
