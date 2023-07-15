import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext/userContext';

const UserProfile = () => {
    const { userData } = useContext(UserContext);

    const user = {
        name: userData.firstName,
        username: userData.lastName,
        email: userData.email,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        location: 'New York, USA',
        interests: ['Photography', 'Travel', 'Music'],
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center">
                <img
                    className="w-20 h-20 rounded-full"
                    alt="profile"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <div className='px-3'>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-600">@{user.username}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <p className="text-gray-600">Email: {user.email}</p>
            </div>

        </div>
    );
};

export default UserProfile;
