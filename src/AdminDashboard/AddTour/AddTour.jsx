import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import Api from '../../utility/api';
import { UserContext } from '../../UserContext/userContext';

const AddTour = () => {
    const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm();
    const { email, isLoading, isError } = useContext(UserContext);
    console.log(email)

    const onSubmit = async (data) => {
        console.log(data)
        try {
            // Make a POST request to the API to save the tour data
            const response = await Api.post('/tour/create', { email: email, "tourBody": data });
            console.log(response); // You can replace this with your desired action

            if (response.data) {
                reset();
            }
            reset();
            // Display success notification
            toast.success(response?.message);
        } catch (error) {
            // Display error notification
            toast.error('Failed to add tour');
        }
    };

    return (
        <div className="flex justify-center items-center">
            <form
                className="bg-white shadow-md rounded px-5 py-5 w-full"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl mb-6">Add Tour</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter title"
                            {...register('title', { required: 'Title is required' })}
                        />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="description"
                            id="description"
                            placeholder="Enter description"
                            {...register('description', { required: 'Description is required' })}
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Enter price"
                            {...register('price', { required: 'Price is required' })}
                        />
                        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                            Duration
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="duration"
                            id="duration"
                            placeholder="Enter duration"
                            {...register('duration', { required: 'Duration is required' })}
                        />
                        {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxGroupSize">
                            Max Group Size
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="maxGroupSize"
                            id="maxGroupSize"
                            placeholder="Enter max group size"
                            {...register('maxGroupSize', { required: 'Max group size is required' })}
                        />
                        {errors.maxGroupSize && <p className="text-red-500 text-xs mt-1">{errors.maxGroupSize.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ratingsAverage">
                            Ratings Average
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            name="ratingsAverage"
                            id="ratingsAverage"
                            placeholder="Enter ratings average"
                            {...register('ratingsAverage')}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageCover">
                            Image Cover
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="imageCover"
                            id="imageCover"
                            placeholder="Enter image cover URL"
                            {...register('imageCover')}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                            Images
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="images"
                            id="images"
                            placeholder="Enter comma-separated image URLs"
                            {...register('images')}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDates">
                            Start Dates
                        </label>
                        <DatePicker
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="startDates"
                            id="startDates"
                            placeholderText="Select start dates"
                            selected={watch('startDates')}
                            onChange={(date) => setValue('startDates', date)}
                            dateFormat="dd/MM/yyyy"
                            isMultiDay
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startLocation">
                            Start Location
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="startLocation"
                            id="startLocation"
                            placeholder="Enter start location"
                            {...register('startLocation', { required: 'Start location is required' })}
                        />
                        {errors.startLocation && <p className="text-red-500 text-xs mt-1">{errors.startLocation.message}</p>}
                    </div>
                </div>
                <div className="flex items-center justify-end pt-5">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Tour
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTour;
