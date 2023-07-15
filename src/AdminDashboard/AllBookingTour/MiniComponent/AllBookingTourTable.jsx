import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

const AllBookingTourTable = ({ data, handleStatus, handelCancelTour }) => {

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
                            className="text-green-500 hover:text-green-700 flex"
                            onClick={() => handleStatus(row?._id)}
                        >
                            <span className='text-black'>Ok</span> <TiTick className='text-xl' />
                        </button> :
                            <div>

                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handelCancelTour(row?._id)}
                                >
                                    <BsTrash className='text-[15px]' />
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

export default AllBookingTourTable;
