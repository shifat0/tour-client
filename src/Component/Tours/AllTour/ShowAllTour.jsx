import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext/userContext';
import AllTourPageCard from './miniComponent/AllTourPageCard';
import CreateTourButton from './miniComponent/CreateTourButton';

const ShowAllTour = () => {
    const { tours, isLoading, isError } = useContext(UserContext);

    let content = null;
    if (isLoading) {
        return <p>Loading......</p>;
    }
    if (isError) {
        console.log("error data");
    }
    if (tours && !isLoading) {
        content = tours?.map((tour, index) => {
            return (
                <AllTourPageCard tour={tour} key={index} />
            );
        });
    }
    return (
        <div className='container mx-auto pt-10 mt-10'>

            <div className="bg-gray-100">
                <h1 className="text-3xl text-center font-bold mb-4">All Tours</h1>
                <CreateTourButton />
                <div className="grid grid-cols-4 gap-2 pb-10 pt-5">
                    {content}
                </div>
            </div>

        </div>
    );
};

export default ShowAllTour;