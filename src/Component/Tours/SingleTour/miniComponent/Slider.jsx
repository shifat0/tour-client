import React from 'react';
import sImg from '../../../../asset/Img/image.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
    const allPlan = [
        { id: '1', img: { sImg }, package: "Thailand" },
        { id: '2', img: { sImg }, package: "Thailand" },
        { id: '3', img: { sImg }, package: "Thailand" },
        { id: '4', img: { sImg }, package: "Thailand" },
        { id: '5', img: { sImg }, package: "Thailand" },
        { id: '6', img: { sImg }, package: "Thailand" },
        { id: '7', img: { sImg }, package: "Thailand" },
    ]
    return (
        <Swiper
            // install Swiper modules
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                allPlan?.map((a) => {
                    return <SwiperSlide><div className="w-96 my-5 py-2 shadow-md dark:bg-gray-900 dark:text-gray-100">

                        <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group   bg-[url('https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863__340.jpg')]  " >
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b  via-transparent  hover:from-gray-700  to-gray-700from-gray-900  to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                {/* <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline  text-gray-100  bg-violet-400">3 Tours</a> */}
                                <div className="flex flex-col justify-start text-center  text-gray-100">
                                    <span className="text-3xl font-semibold leading-none tracking-wide">04</span>
                                    <span className="leading-none uppercase">Aug</span>
                                </div>
                            </div>
                            <div className="z-10 p-5">
                                <h2 className='text-purple-400'>Travels To</h2>
                                <h1 className='text-white text-3xl font-bold '>SwitzerLand</h1>

                            </div>
                        </div>
                    </div></SwiperSlide>

                }



                )
            }
        </Swiper>
    );
};

export default Slider;