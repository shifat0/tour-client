import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/userContext';
import Api from '../../utility/api';
import AllBlogsTable from './MiniComponent/AllBlogsTable';
import { toast } from 'react-toastify';


const AllBlogs = () => {
    const { blogs, setRefresh } = useContext(UserContext);

    const handleDelete = async (blogId) => {
        // const data = { tourId: tourId, email: email }
        const response = await Api.delete(`/blog/delete/${blogId}`);
        setRefresh(response?.data)
        response?.message && toast.success(response?.message);


    };
    const handleApprove = async (blogId) => {
        const blog = { status: 'published' }
        const response = await Api.update(`/blog/update/${blogId}`, { blog });
        setRefresh(response?.data)
        response?.message && toast.success(response?.message);
    };
    return (
        <div>
            <h2 className='text-center text-3xl my-5 font-semibold'>    All blogs</h2>

            <AllBlogsTable data={blogs} onDelete={handleDelete} handleApprove={handleApprove} />
        </div>
    );
};

export default AllBlogs;