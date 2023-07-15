import React, { useContext } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Api from '../../../../utility/api';

const UserDashBlogEdit = ({ selectBlogData, modalVisible, setModalVisible, blogRefresh, setBlogRefresh, setLoading }) => {
    const { register } = useForm();

    const blogId = selectBlogData._id;


    const hideModal = () => {
        setModalVisible(false);
    };
    // submit data for update the blog
    const onSubmit = async (blog) => {
        setLoading(true)
        const response = await Api.update(`/blog/update/${blogId}`, { blog });
        setBlogRefresh(!blogRefresh)
        response?.message && toast.success(response?.message) && setModalVisible(false)
        response?.message && setLoading(false)
    };

    return (
        <div>
            <Modal
                title="Update your Blog"
                visible={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                <Form onFinish={(onSubmit)} initialValues={selectBlogData}>
                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]}>
                        <Input {...register('title')} />
                    </Form.Item>
                    <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Content is required' }]}>
                        <Input.TextArea {...register('content')} />
                    </Form.Item>
                    <Form.Item label="Cover Image" name="coverImage" rules={[{ required: true, message: 'Cover Image is required' }]}>
                        <Input {...register('coverImage')} />
                    </Form.Item>
                    <Form.Item>
                        <Button className='text-black bg-grey-500' type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UserDashBlogEdit;
