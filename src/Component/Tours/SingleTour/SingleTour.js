import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../UserContext/userContext";
import AboutTour from "./miniComponent/AboutTour";
import SingleTourBanner from "./miniComponent/SingleTourBanner";
import Slider from "./miniComponent/Slider";

const SingleTour = () => {
  const { tours } = useContext(UserContext);
  const id = useParams()?.id;
  const [singleTour, setSingleTour] = useState(null);

  useEffect(() => {
    const data = tours.find((item) => item._id === id);
    setSingleTour(data);
  }, [tours]);

  console.log("t==>", id, tours, singleTour);

  return (
    <div className=" mt-10">
      <div className=" pt-[3rem]">
        <SingleTourBanner tour={singleTour} />
        <AboutTour tour={singleTour} />
        {/* <Slider></Slider> */}
      </div>
    </div>
  );
};

export default SingleTour;
