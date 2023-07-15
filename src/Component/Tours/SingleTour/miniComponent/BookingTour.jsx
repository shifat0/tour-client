import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { UserContext } from '../../../../UserContext/userContext';
import Api from '../../../../utility/api';

const BookingTour = ({ id, title, price }) => {
    const { register, handleSubmit, formState: { errors, }, reset } = useForm();

    const { userData } = useContext(UserContext);

    const onSubmit = async (data) => {
        // Handle form submission
        const data1 = { ...data, tour_id: id, tour_title: title, price: price };


        const response = await Api.post('/tour-booking/booking', { payload: data1 });
        // console.log(response); 
        if (response?.status) {
            reset();
            toast.success(response?.message)
        }
        else if (!response?.status) {
            reset();
            toast.error(response?.message)
        }


    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="self-stretch space-y-3">
            <div>
                <label htmlFor="name" className="text-sm sr-only">
                    Your name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full rounded-md p-4 focus:ring-violet-400 ${errors.name ? 'border-red-500' : ''}`}
                    {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
                <label htmlFor="email" className="text-sm sr-only">
                    Email address
                </label>
                <input
                    id="email"
                    type="text"
                    defaultValue={userData?.email}
                    placeholder="Email address"
                    className={`w-full rounded-md p-4 focus:ring-violet-400 ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email?.type === 'required' && <span className="text-red-500">This field is required</span>}
                {errors.email?.type === 'pattern' && <span className="text-red-500">Invalid email address</span>}
            </div>
            <div>
                <label htmlFor="mobile" className="text-sm sr-only">
                    Mobile number
                </label>
                <input
                    id="mobile"
                    type="text"
                    placeholder="Mobile number"
                    className={`w-full rounded-md p-4 focus:ring-violet-400 ${errors.mobile ? 'border-red-500' : ''}`}
                    {...register('mobile', { required: true, pattern: /^[0-9]{11}$/ })}
                />
                {errors.mobile?.type === 'required' && <span className="text-red-500">This field is required</span>}
                {errors.mobile?.type === 'pattern' && <span className="text-red-500">Invalid mobile number</span>}
            </div>
            <button
                type="submit"
                className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900"
            >
                Add Booking
            </button>
        </form>
    );
};

export default BookingTour;
