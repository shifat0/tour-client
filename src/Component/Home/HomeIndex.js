import React from "react";
import Navigation from "../Navigation/Navigation";
import Banner from "./Banner/Banner";
import CustomerReview from "./CustomerReview/CustomerReview";
import ExoticPlace from "./ExoticPlace/ExoticPlace";
import "./HomeIndex.css";
import PopularTour from "./PopularTour/PopularTour";

const HomeIndex = () => {
  return (
    <div className="container mx-auto">
      <Navigation></Navigation>
      <Banner />
      {/* <ExoticPlace /> */}
      <PopularTour />
      {/* <CustomerReview /> */}
    </div>
  );
};

export default HomeIndex;
