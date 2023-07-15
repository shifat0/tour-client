import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RatingForm = () => {
    const { register, handleSubmit } = useForm();
    const [rating, setRating] = useState(0);

    const onSubmit = (data) => {
        // Handle form submission
        console.log({ ...data, rating });
        // const response = await Api.post('/rating/create', { ...data, rating });
        // console.log(response); // You can replace this with your desired action
    };

    const handleRate = (rate) => {
        setRating(rate);
    };

    return (
        <div className="flex flex-col max-w-xl py-8 px-4 shadow-md rounded-xl">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">
                    Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                                onClick={() => handleRate(star)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill={star <= rating ? 'currentColor' : 'gray'}
                                    className="w-10 h-10 text-yellow-500"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col w-full">
                    <textarea
                        rows="3"
                        placeholder="Message..."
                        className="p-4 rounded-md resize-none"
                        {...register('message', { required: 'Please enter a message.' })}
                    ></textarea>
                    <button
                        type="submit"
                        className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400"
                    >
                        Leave feedback
                    </button>
                </form>
            </div>

        </div>
    );
};

export default RatingForm;
