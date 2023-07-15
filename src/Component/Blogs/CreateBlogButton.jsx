import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form, Input } from 'antd';
import Api from '../../utility/api';
import { UserContext } from '../../UserContext/userContext';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"



const CreateBlogButton = ({ userDashboard }) => {
  const { register, formState: { errors }, reset } = useForm();
  const [modalVisible, setModalVisible] = React.useState(false);

  const { userData, isLoading, isError } = useContext(UserContext);
  const navigate = useNavigate();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async (data) => {
    try {
      data.createdBy = userData._id;
      console.log(data)
      // Make a POST request to the API to save the tour data
      const response = await Api.post('/blog/create', { blog: data });
      console.log(response); // You can replace this with your desired action

      if (response?.data) {
        reset();
        hideModal();
      }
      // Display success notification
      toast.success(response?.message);
    } catch (error) {
      // Display error notification
      toast.error('Failed to add tour');
    }

  };

  return (
    <div className='mx-auto container'>
      <div className='text-black text-end mt-5 me-10 '>
        <Button className='' onClick={() => {
          userData?.email
            ? showModal()
            : navigate("/login");
        }}>
          Create Blog
        </Button>
      </div>

      <Modal
        title="Create Blog"
        visible={modalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <Form onFinish={onSubmit} >
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Title is required' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Content is required' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Cover Image" name="coverImage" rules={[{ required: true, message: 'Cover Image is required' }]}>
            <Input />
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

export default CreateBlogButton;
