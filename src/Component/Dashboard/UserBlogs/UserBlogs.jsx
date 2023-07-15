import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import AllBlogsTable from '../../../AdminDashboard/AllBlogs/MiniComponent/AllBlogsTable';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../UserContext/userContext';
import Api from '../../../utility/api';
import { Button, Modal, Form, Input } from 'antd';
import UserDashBlogEdit from './MIniComponent/UserDashBlogEdit';
import Loading from '../../Shared/Loading/Loading';


const UserBlogs = () => {
    const [myPostBlog, setMyPostBlog] = useState([])
    const [selectBlogData, setSelectBlogData] = useState([])
    const [modalVisible, setModalVisible] = React.useState(false);
    const [blogRefresh, setBlogRefresh] = useState(false);
    const [loading, setLoading] = useState(false);


    const { email, setRefresh } = useContext(UserContext);


    // to get all blogs data
    useEffect(() => {
        async function fetchData() {
            const response = await Api.get(`/blog/all/${email}`);
            setRefresh(response?.data);
            setMyPostBlog(response.data);
        }
        fetchData();
    }, [email, setRefresh, blogRefresh])

    const handleDelete = async (blogId) => {
        setLoading(true)

        const response = await Api.delete(`/blog/delete/${blogId}`);
        response?.message && toast.success(response?.message);
        response?.message && setBlogRefresh(!blogRefresh)
        response?.message && setLoading(false)

    };

    const handleEdit = async (id) => {
        setModalVisible(true)
        const singleBlog = myPostBlog.filter(a => a._id === id);
        setSelectBlogData(singleBlog[0]);
    };
    const userDashboard = true;

    if (loading) {
        return <Loading />
    }

    return (
        <div>

            <AllBlogsTable data={myPostBlog} onDelete={handleDelete} handleEdit={handleEdit} userDashboard={userDashboard} />

            <UserDashBlogEdit
                selectBlogData={selectBlogData}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setBlogRefresh={setBlogRefresh}
                blogRefresh={blogRefresh}
                setLoading={setLoading} />
        </div>
    );
};

export default UserBlogs;