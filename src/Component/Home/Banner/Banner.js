import React from "react";
import "./Banner.css";
import img1 from "../../../asset/Img/saintmartin.jpg";
import img2 from "../../../asset/Img/sajek.jpg";
import img3 from "../../../asset/Img/bandarban.jpg";
import img4 from "../../../asset/Img/image.jpg";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import { Link } from "react-router-dom";

const Banner = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div>
      <div
        className={`${
          scrollPosition === 0 ? "lg:top-[-78px] " : ""
        } relative carousel w-full h-[90vh]`}
      >
        <div id="slide1" className={` carousel-item relative w-full `}>
          <img src={img1} className="w-full " />
          <div className="header__text-box">
            <h1 className="heading__primary">
              <span className="heading__primary--main">Outdoors</span>
              <span className="heading__primary--sub">
                is where life happens
              </span>
            </h1>
            <Link
              to="/all-tours"
              className="my-btn my-btn--white my-btn--animated"
            >
              <span>Discover our tours</span>
            </Link>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="header__text-box">
            <h1 className="heading__primary">
              <span className="heading__primary--main">Outdoors</span>
              <span className="heading__primary--sub">
                is where life happens
              </span>
            </h1>
            <Link
              to="/all-tours"
              className="my-btn my-btn--white my-btn--animated"
            >
              <span>Discover our tours</span>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="header__text-box">
            <h1 className="heading__primary">
              <span className="heading__primary--main">Outdoors</span>
              <span className="heading__primary--sub">
                is where life happens
              </span>
            </h1>
            <Link
              to="/all-tours"
              className="my-btn my-btn--white my-btn--animated"
            >
              <span>Discover our tours</span>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="header__text-box">
            <h1 className="heading__primary">
              <span className="heading__primary--main">Outdoors</span>
              <span className="heading__primary--sub">
                is where life happens
              </span>
            </h1>
            <Link
              to="/all-tours"
              className="my-btn my-btn--white my-btn--animated"
            >
              <span>Discover our tours</span>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
