import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import AllBookingTourTable from './MiniComponent/AllBookingTourTable';

const AllBookingTour = () => {

    const { allBooking, setRefresh, email } = useContext(UserContext);


    const handleStatus = async (tourId) => {
        const data = { status: "confirm" }

        // const data = { tourId: tourId }
        const response = await Api.update('/tour-booking/update', { email, tourId, data });
        setRefresh(response?.data)
        response?.message && toast.success(response?.message);


    };
    const handelCancelTour = async (tourId) => {
        const data = { status: "pending" }

        // const data = { tourId: tourId }
        const response = await Api.update('/tour-booking/update', { email, tourId, data });
        setRefresh(response?.data)
        response?.message && toast.success(response?.message);


    };


    return (
        <div>
            <h2 className='text-center text-2xl mb-2'>All Booking</h2>
            <AllBookingTourTable data={allBooking} handleStatus={handleStatus} handelCancelTour={handelCancelTour} />
        </div>
    );
};

export default AllBookingTour;