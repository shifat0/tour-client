import React, { useContext, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdDashboard,
  MdDeveloperMode,
  MdOutlineConnectWithoutContact,
  MdTour,
} from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext/userContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import "./Navbar.css";

const Navigation = () => {
  const { userData, setUserData } = useContext(UserContext);
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  const [navSwitch, setNavSwitch] = useState(false);

  const closedNavbarAll = () => {
    setNavSwitch(false);
  };

  const scrollPosition = useScrollPosition();

  const active =
    "text-[#3878DF] font-semibold rounded text-white text-white rounded-[5px] p-2 text-[17px] flex items-center";
  const deActive =
    "text-[#fff] font-semibold flex items-center text-[17px] p-2";

  return (
    <nav
      className={`fixed container mx-auto z-50 duration-300 py-3 ${showNavbar && scrollPosition === 0
        ? "md:bg-transparent "
        : "bg-gradient-to-r from-rose-500 to-blue-500"
        }`}
    >
      <div className="relative z-50 ">
        <div className="flex justify-between items-center relative">
          <div className="logo flex items-center text-xl font-bold py-3 ml-3">
            <div
              onClick={() => setNavSwitch(!navSwitch)}
              className="mr-2 text-2xl md:hidden ease-out duration-200 "
            >
              {!navSwitch ? (
                <GiHamburgerMenu />
              ) : (
                <BsPlusLg className="rotate-45" />
              )}
            </div>
            <Link to="/">
              <span className="ml-10  text-white">
                Tour <span className=" text-[#38BDF8] ">E JAi Dure</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div
              className={`routes absolute md:static left-0 z-[99]  w-full md:w-auto ease-out duration-300 shadow-lg md:shadow-none ${navSwitch ? "navOpen" : "navClosed"
                }`}
            >
              <ul className="md:flex border-x-2 border-b-2 md:border-0 border-gray-200 pl-3 md:pl-0 py-5 md:py-0 w-full md:w-auto">
                <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? active : deActive)}
                  >
                    <AiFillHome className="md:hidden  mr-2 " />
                    Home
                  </NavLink>
                </li>
                <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                  <NavLink
                    to="/all-tours"
                    className={({ isActive }) => (isActive ? active : deActive)}
                  >
                    <MdTour className="md:hidden  mr-2 " />
                    Tours
                  </NavLink>
                </li>
                <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? active : deActive)}
                  >
                    <MdDeveloperMode className="md:hidden  mr-2 " />
                    Blog
                  </NavLink>
                </li>
                <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? active : deActive)}
                  >
                    <MdOutlineConnectWithoutContact className="md:hidden mr-2" />
                    Contact
                  </NavLink>
                </li>
                {userData?.email && userData?.role === "admin" ? (
                  <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0">
                    <NavLink
                      to="/admin"
                      className={({ isActive }) =>
                        isActive ? active : deActive
                      }
                    >
                      <MdOutlineConnectWithoutContact className="md:hidden mr-2" />
                      Admin Panel
                    </NavLink>
                  </li>
                ) : (
                  userData?.email ? (
                    <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0">
                      <NavLink
                        to="/user-dashboard"
                        className={({ isActive }) =>
                          isActive ? active : deActive
                        }
                      >
                        <MdDashboard className="md:hidden mr-2" />
                        Dashboard
                      </NavLink>
                    </li>) : ''
                )}

                {userData?.email && (
                  <li
                    onClick={() => {
                      closedNavbarAll();
                      setUserData({});
                      localStorage.removeItem("userData");
                    }}
                    className="mr-5 mb-4 md:mb-0"
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? active : deActive
                      }
                    >
                      <MdOutlineConnectWithoutContact className="md:hidden mr-2" />
                      Log out
                    </NavLink>
                  </li>
                )}
                {userData?.email ? (
                  <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                    <img
                      className="w-10 h-10 rounded-full"
                      alt="profile"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    />
                  </li>
                ) : (
                  <li onClick={closedNavbarAll} className="mr-5 mb-4 md:mb-0  ">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? active : deActive
                      }
                    >
                      <MdOutlineConnectWithoutContact className="md:hidden mr-2" />
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navigation;
