import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import "swiper/css/scrollbar";
// import HoverCardSm from "./HoverCardSm";

const SinglePTourSliderageSlider = () => {
    const allPlan = [
        { id: "1", package: "Thailand" },
        { id: "2", package: "Thailand" },
        { id: "3", package: "Thailand" },
        { id: "4", package: "Thailand" },
        { id: "5", package: "Thailand" },
        { id: "6", package: "Thailand" },
        { id: "7", package: "Thailand" },
    ];
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={6}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                400: {
                    slidesPerView: 2,
                },
                639: {
                    slidesPerView: 2,
                },
                865: {
                    slidesPerView: 4
                },
                1000: {
                    slidesPerView: 5
                },
                1500: {
                    slidesPerView: 6
                },
                1700: {
                    slidesPerView: 7
                }
            }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            {allPlan?.map((a, key) => {
                return (
                    <SwiperSlide key={key}
                    >
                        {({ isActive }) => (
                            <div
                                className={`py-8 px-2 swiper-item ${isActive ? "active " : "not active"}`}
                            >
                                <HoverCardSm
                                    tittle={"এন্থরিয়াম"}
                                    mainImage={img1}
                                    price={1000}
                                    discount={8}
                                    hidden
                                ></HoverCardSm>
                            </div>
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TourSlider;
