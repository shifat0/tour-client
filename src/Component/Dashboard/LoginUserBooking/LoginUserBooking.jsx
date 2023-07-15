import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../../UserContext/userContext';
import Api from '../../../utility/api';
import UserBookingTourTable from './miniComponent/UserBookingTourTable';

import AllBookingTourTable from './miniComponent/UserBookingTourTable';

const LoginUserBooking = () => {

    const { userData } = useContext(UserContext);
    const [myBooking, setMyBooking] = useState([])

    // to get all tour booking data
    useEffect(() => {
        async function fetchData() {
            const response = await Api.get(`/tour-booking/booking/${userData.email}`);
            setMyBooking(response?.data);
        }
        fetchData();
    }, []);


 
    const handelCancelTour = async (tourId) => {
        const data = { status: "pending" }
        console.log(tourId)

    };


    return (
        <div>
            <h2 className='text-center text-2xl mb-2'>All Booking</h2>
            <UserBookingTourTable data={myBooking}  handelCancelTour={handelCancelTour} />
        </div>
    );
};

export default LoginUserBooking;