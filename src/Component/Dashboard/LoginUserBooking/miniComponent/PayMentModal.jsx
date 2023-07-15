import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Form, Input, Select, DatePicker, InputNumber, Row, Col } from 'antd';
import { UserContext } from '../../../../UserContext/userContext';
import { useNavigate } from "react-router-dom"
import { MdPayment } from 'react-icons/md';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LEvtuGnioYrjXfprsLUZwFqf56ge5oqqhaW0Buii58kZSVqksLTqg9ri5DfK9IJpm4cLWz2ws7wtP0g1Km7tWOu00TwtbZUEn');

const PayMentModal = ({ bookingInfo }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { userData } = useContext(UserContext);
    const email = userData?.email
    const navigate = useNavigate();

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };


    return (
        <div className="mx-auto container">
            <div className="text-end">
                <div
                    className='flex justify-center items-center text-blue-500 hover:text-blue-700 ' onClick={() => {
                        email
                            ? showModal()
                            : navigate("/login");
                    }}><span className='px-1'>Pay</span> <MdPayment className='text-xl' />
                </div>
            </div>

            <Modal
                // title="Make Payment"
                visible={modalVisible}
                onCancel={hideModal}
                footer={null}
            >
                <div className='py-5'>

                    <div className='text-xl'>

                        <h1>Payment for {bookingInfo[0]?.tour_title}</h1>
                        <h1>Pay <span className='text-blue-500'>
                            {bookingInfo[0]?.price} ৳</span> for this tour</h1>
                        <h1 className='pt-4'>Card information </h1>
                    </div>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm bookingInfo={bookingInfo[0]} />
                        </Elements>

                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default PayMentModal;
