import React, { useContext, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react';
import Api from '../../../../utility/api';
import { toast } from 'react-toastify';
import LoadingSmall from '../../../Shared/Loading/LoadingSmall';
import { UserContext } from '../../../../UserContext/userContext';

const CheckoutForm = ({ bookingInfo }) => {
    const [cardError, setCardError] = useState('')
    const [transactionError, setTransactionError] = useState('')
    const [transaction, setTransaction] = useState('')
    const [loading, setLoading] = useState(false)
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        setLoading(true)
        Api.post('/tour-booking/create-payment-intent', { booking: bookingInfo })
            .then((res) => {
                setClientSecret(res.clientSecret)
                setLoading(false)
            })

    }, [bookingInfo]);

    // console.log(bookingInfo)

    const { setRefresh } = useContext(UserContext);

    const handleStatus = async (transactionId) => {
        const data = {
            payment: "done",
            transaction: transactionId,
        }
        // const data = { tourId: tourId }
        const response = await Api.update('/tour-booking/update', { email: bookingInfo?.email, tourId: bookingInfo?.tour_id, data });
        setRefresh(response?.data)
        // response?.message && toast.success(response?.message);
        console.log(response)
    }

    if (loading) {
        return <LoadingSmall />;

    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message || '')
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: bookingInfo?.name,
                    email: bookingInfo?.email,
                },
            },
        })
            .then(function (result) {
                if (result.paymentIntent.status === "succeeded") {
                    toast.success("Payment succeed")
                    setTransaction(result?.paymentIntent?.id)
                    setTransactionError(result.error)
                    handleStatus(result?.paymentIntent?.id)
                }

            });

    }

    return (
        <form className='mt-5 ' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='my-3 btn-sm text-white bg-blue-500 rounded disabled:bg-blue-200' disabled={!stripe || !clientSecret || transaction}>
                {loading && <LoadingSmall />} Pay
            </button>
            <p className=' text-red-500'>{cardError && cardError}</p>
            <p className=' text-red-500'>{transactionError && transactionError}</p>
            {
                transaction && <p className='text-blue-500'>Your transaction id : {transaction}</p>
            }
        </form>
    );
};

export default CheckoutForm;