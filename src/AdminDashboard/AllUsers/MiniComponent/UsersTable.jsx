import React from 'react';
import DataTable from 'react-data-table-component';

const UsersTable = ({ data }) => {
    const columns = [
        {
            name: 'E-mail',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'First Name',
            selector: 'firstName',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'lastName',
            sortable: true,
        },
        {
            name: 'Role',
            selector: 'role',
            sortable: true,
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

export default UsersTable;
