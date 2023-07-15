import React, { useState } from 'react';
import { AiFillFileText, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsCheck2Square, BsTable } from 'react-icons/bs';
import { IoAddCircleSharp } from 'react-icons/io5';


const Sidebar = ({ dashboardSwitch }) => {
  // dashboard open and closed switch
  const { dbSwitch, setDbSwitch } = dashboardSwitch;
  const [arrowSwitch, setArrowSwitch] = useState(false)

  // dashboard link style
  const dashboardLinkStyle = `my-2 text-gray-400 hover:text-gray-50 hover:bg-[#3a3f51] flex items-center rounded-lg ${dbSwitch ? 'p-3 text-base ' : 'p-1 text-2xl justify-center'
    } font-semibold cursor-pointer`;

  return (
    <div className='sticky top-0 '>
      <div className="px-2 relative ">
        {/* dashboard open and closed button  */}
        <button
          onClick={() => setDbSwitch(!dbSwitch)}
          className={`  text-2xl text-gray-600 border-2 bg-white border-white rounded-full absolute top-2 right-[-1rem] duration-300 ease-out outline-none `}
        >
          {dbSwitch ? <FaAngleLeft /> : <FaAngleRight />}
        </button>

        {/* dashboard Link */}
        <ul className="pt-9">
          <Link to="/admin">
            <li className={dashboardLinkStyle}>
              <BsTable className="mr-2" />
              <span className={`${!dbSwitch && 'hidden py-2'}`}>All Tour</span>
            </li>
          </Link>
          <Link to="addTour">
            <li className={dashboardLinkStyle}>
              <IoAddCircleSharp className="mr-2" />
              <span className={`${!dbSwitch && 'hidden py-2'}`}>Add Tour</span>
            </li>
          </Link>
          <Link to="all-tour-request">
            <li className={dashboardLinkStyle}>
              <BsCheck2Square className="mr-2" />
              <span className={`${!dbSwitch && 'hidden py-2'}`}>All Tour Request</span>
            </li>
          </Link>

          <Link to="allBlog">
            <li className={dashboardLinkStyle}>
              <AiFillFileText className="mr-2" />
              <span className={`${!dbSwitch && 'hidden'}`}> All Blogs</span>
            </li>
          </Link>
          <Link to="booking-tour">
            <li className={dashboardLinkStyle}>
              <AiFillFileText className="mr-2" />
              <span className={`${!dbSwitch && 'hidden'}`}> All Booking</span>
            </li>
          </Link>

          <Link to="allUsers">
            <li className={dashboardLinkStyle}>
              <AiOutlineUser className="mr-2" />
              <span className={`${!dbSwitch && 'hidden'}`}> All Users</span>
            </li>
          </Link>

          {/* <li onClick={() => setArrowSwitch(!arrowSwitch)} className={dashboardLinkStyle}>
            <AiFillFileText className="mr-2" />
            <span className={`${!dbSwitch && 'hidden'} mx-2`}>Another</span>
            <span className={`${!dbSwitch && 'hidden'}`}>
              {
                arrowSwitch ? <FaAngleDown className="" /> : <FaAngleUp className="" />
              }
            </span>

          </li>

          <ul className={`${!arrowSwitch && ' hidden '},  w-[90%] `}>
            <Link to="">
              <li className={dashboardLinkStyle}>
                <AiFillFileText className="mr-2" />
                <span className={`${!dbSwitch && 'hidden'}  text-[16px] `} >Post Blog</span>
              </li>
            </Link>



          </ul> */}









        </ul>

      </div >

    </div >
  );
};

export default Sidebar;