import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form, Input, Select, DatePicker, InputNumber, Row, Col } from 'antd';
import { toast } from 'react-toastify';
import { UserContext } from '../../../../UserContext/userContext';
import { useNavigate } from "react-router-dom"
import Api from '../../../../utility/api';


const CreateTourButton = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const { userData } = useContext(UserContext);
    const email = userData?.email
    const navigate = useNavigate();
    const { TextArea } = Input;

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const onSubmit = async (data) => {


        try {
            data = { ...data, email: email }
            // Make a POST request to the API to save the tour plan data
            const response = await Api.post('/tour/create/customer-tour', { email, tourPlan: data });
            // console.log(response); // You can replace this with your desired action

            if (response?.data) {
                reset();
                hideModal();
            }
            // Display success notification
            toast.success(response?.message);
        } catch (error) {
            // Display error notification
            toast.error('Failed to create tour plan');
        }
    };

    return (
        <div className="mx-auto container">
            <div className="text-end mt-5">
                <Button onClick={() => {
                    userData?.email
                        ? showModal()
                        : navigate("/login");
                }}>Create Tour Plan</Button>
            </div>

            <Modal
                title="Create Tour Plan"
                visible={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                <Form onFinish={onSubmit}>
                    <Form.Item
                        label="Where do you want to go?"
                        name="destination"
                        rules={[{ required: true, message: 'Destination is required' }]}
                    >
                        <Input />
                    </Form.Item>


                    <Row gutter={16}>
                        <Col span={14}>
                            <Form.Item
                                label="Mobile Number"
                                name="mobileNumber"
                                rules={[{ required: true, message: 'Mobile number is required' }]}
                            >
                                <Input />
                            </Form.Item>

                        </Col>
                        <Col span={10}>
                            <Form.Item
                                label="Max Member"
                                name="maxGroupSize"
                            >
                                <InputNumber />
                            </Form.Item>

                        </Col>

                    </Row>
                    <Row gutter={16}>
                        <Col span={14}>
                            <Form.Item
                                label="Start Location"
                                name="startLocation"
                            >
                                <Input />
                            </Form.Item>

                        </Col>

                        <Col span={10}>
                            <Form.Item
                                label="Total Budget"
                                name="price"
                            >
                                <InputNumber />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={14}>
                            <Form.Item
                                label="Images"
                                name="images"
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                label="Duration"
                                name="duration"
                            >
                                <InputNumber />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Start Dates"
                        name="startDates"
                    >
                        <DatePicker.RangePicker />
                    </Form.Item>
                    <Form.Item
                        label="Additional Details"
                        name="additionalDetails"
                        rules={[{ required: true, message: 'Additional details are required' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Row>
                        <Col span={24}>
                            <Form.Item>
                                <Button htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>



            </Modal>
        </div>
    );
};

export default CreateTourButton;
