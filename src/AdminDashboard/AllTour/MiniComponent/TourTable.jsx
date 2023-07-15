import React from 'react';
import DataTable from 'react-data-table-component';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

const TourTable = ({ data, onDelete }) => {

    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Description',
            cell: (row) => (
                <div>
                    {
                        <p >{row.description?.split(' ')?.slice(0, 5)?.join(' ')}...</p>
                    }
                </div>
            ),


        },
        {
            name: 'Duration',
            selector: 'duration',
            sortable: true,
        },
        {
            name: 'Start Dates',
            cell: (row) => (
                <div>
                    {row?.startDates?.map((date) => (
                        <p key={date}>{date.substring(0, 10)}</p>
                    ))}
                </div>
            ),
        },
        {
            name: 'Price',
            selector: 'price',
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    <button
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => handleEdit(row?._id)}
                    >
                        <BsPencilSquare />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => onDelete(row?._id)}
                    >
                        <BsTrash />
                    </button>
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

export default TourTable;
