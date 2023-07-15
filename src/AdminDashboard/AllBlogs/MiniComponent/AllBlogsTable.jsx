import React from 'react';
import DataTable from 'react-data-table-component';
import { BsTrash } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { TiEdit, TiTick } from 'react-icons/ti';

const AllBlogsTable = ({ data, onDelete, handleApprove, handleEdit, userDashboard }) => {

    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Content',
            selector: 'content',
            cell: (row) => (
                <div>
                    {
                        <p >{row.content?.split(' ')?.slice(0, 15)?.join(' ')}...</p>
                    }
                </div>
            ),
            sortable: true,
        },
        {
            name: 'coverImage',
            selector: 'coverImage',
            cell: (row) => (
                <img className='h-10 w-10 ' src={row.coverImage} alt="" />
            )
        },
        {
            name: 'status',
            selector: 'status',
            sortable: true,
        },


        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    {
                        row.status === "published" ? <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => onDelete(row?._id)}
                        >
                            <BsTrash className='text-[15px]' />
                        </button> :
                            <div>
                                {
                                    userDashboard ? <button
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                        onClick={() => handleEdit(row?._id)}
                                    >
                                        <TiEdit className='text-xl' />
                                    </button> : <button
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                        onClick={() => handleApprove(row?._id)}
                                    >
                                        <TiTick className='text-xl' />
                                    </button>
                                }


                                <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => onDelete(row?._id)}
                                >
                                    <BsTrash className='text-[15px]' />
                                </button>
                            </div>
                    }
                </div >
            ),
        },
    ];




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

export default AllBlogsTable;
