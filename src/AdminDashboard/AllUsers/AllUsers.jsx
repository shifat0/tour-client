import React, { useContext } from 'react'
import { UserContext } from '../../UserContext/userContext';
import UsersTable from './MiniComponent/UsersTable';


const AllUsers = () => {

    // fetch data from backend
    const { users } = useContext(UserContext);

    // console.log(users)


    return (
        <div>
            <h1 className='text-center text-xl my-3 font-bold'>Users Count: { users.length }</h1>
            <UsersTable data={ users } />
        </div>
    );
};

export default AllUsers