import React from 'react';
import { MdArticle, MdDashboard, MdDeveloperMode } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const UserDashboard = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const drawerAnimation = useSpring({
        transform: !isOpen ? 'scaleX(1)' : 'scaleX(1)',
    });

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const active = "text-[#3878DF] font-semibold  rounded-[5px] p-2 text-[17px] flex items-center";
    const deActive = "text-[#fff] font-semibold flex items-center text-[17px] p-2 text-black";


    return (
        <div className="flex flex-col md:flex-row h-screen pt-[5rem]">
            <div
                className={` ${isOpen ? "md:w-64" : "md:w-24"} w-full  bg-gradient-to-r from-rose-100 to-blue-100 transition-all duration-300`}
                onMouseEnter={toggleDrawer}
                onMouseLeave={toggleDrawer}
            >
                <ul className="flex flex-col  pt-8 ps-5">
                    <li>

                        <NavLink
                            to="/user-dashboard"
                            className={({ isActive }) => (isActive ? active : deActive)}
                        >
                            <MdDashboard size="2rem" />
                            <span className={`${isOpen ? "" : "md:hidden"} px-2`}>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="tour-booking"
                            className={({ isActive }) => (isActive ? active : deActive)}
                        >
                            <MdDeveloperMode size="2rem" />
                            <span className={`${isOpen ? "" : "md:hidden"} px-2`}>My Booking</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="user-blogs"
                            className={({ isActive }) => (isActive ? active : deActive)}
                        >

                            <MdArticle size="2rem" />
                            <span className={`${isOpen ? "" : "md:hidden"} px-2`}>My Blogs</span>
                        </NavLink>
                    </li>


                </ul>
            </div>
            <animated.div className="w-full md:flex-1 bg-gray-100 pt-8" style={drawerAnimation}>
                <div className="p-4">
                    <Outlet />
                </div>
            </animated.div>
        </div>
    );
};

export default UserDashboard;
