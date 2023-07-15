import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import { toast } from 'react-toastify';
import AllTourReqTable from './MiniComponent/AllTourReqTable';


const AllTourRequest = () => {
    const { customerTours, email, setDeleteData } = useContext(UserContext);

    // console.log(customerTours)


    const handleDelete = async (tourId) => {
        // const data = { tourId: tourId, email: email }
        // const response = await Api.delete('/tour/delete', { data });
        // setDeleteData(response?.data)
        // response?.message && toast.success(response?.message);
    };

    return (
        <div>
            <h1 className='text-center text-2xl mb-10 mt-5'>All requested tour from User</h1>
            <AllTourReqTable data={customerTours} onDelete={handleDelete} />
        </div>
    );
};

export default AllTourRequest;