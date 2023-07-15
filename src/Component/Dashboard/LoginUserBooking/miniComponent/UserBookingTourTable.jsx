import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { MdPayment } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import CreateTourButton from '../../../Tours/AllTour/miniComponent/CreateTourButton';
import PayMentModal from './PayMentModal';

const UserBookingTourTable = ({ data, handelCancelTour }) => {
    const [singleData, setSingleData] = useState([])

    const handelABooking = (id) => {
        const singleData = data?.filter(d => d._id === id)
        setSingleData(singleData)
    }

    const columns = [
        {
            name: 'Tour Title',
            selector: 'tour_title',
            sortable: true,
        },
        {
            name: 'Booked By',
            selector: 'name',
            sortable: true,
        },

        {
            name: 'MobileNo',
            selector: 'mobile',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Status',
            cell: (row) => (
                <button className={`${row.status === 'confirm' ? 'text-green-500' : 'text-red-300'} `}>
                    {row.status}
                </button >
            )
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    {
                        row.status === "pending" ? <button

                            onClick={() => handelABooking(row?._id)}
                        >
                            <PayMentModal bookingInfo={singleData} />
                        </button> :
                            <div>
                                <button className='flex text-green-500'>
                                    <span className=''>Paid</span> <TiTick className='text-xl' />
                                </button>
                            </div>
                    }
                </div>
            ),
        },

    ];

    const handleEdit = (id) => {
        // Handle the edit action for the given ID
        console.log(`Edit tour with ID ${id}`);
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            striped
            dense
        />
    );
};

export default UserBookingTourTable;
