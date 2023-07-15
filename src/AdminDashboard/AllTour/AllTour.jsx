import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import TourTable from './MiniComponent/TourTable';
import { toast } from 'react-toastify';


const AllTour = () => {

    // fetch data from backend
    const { tours, email, setDeleteData } = useContext(UserContext);

    const handleDelete = async (tourId) => {
        const data = { tourId: tourId, email: email }
        const response = await Api.delete('/tour/delete', { data });
        setDeleteData(response?.data)
        response?.message && toast.success(response?.message);


    };

    return (
        <div>
            <h1>Tour List</h1>
            <TourTable data={tours} onDelete={handleDelete} />
        </div>
    );
};

export default AllTour;
