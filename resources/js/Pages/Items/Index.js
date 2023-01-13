import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
import { BsPlusLg, BsFillEyeFill, BsPencilFill, BsTrashFill } from "react-icons/bs";
import DataTable from 'react-data-table-component';

export default function Items(props) {
    const { items } = usePage().props

    // useEffect(() => {
    //     setItems(props.items);
    // });

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            width: '55px',
        },
        {
            name: 'image',
            width: '70px',
            cell: (row) => (
                <>
                    <img className="rounded rounded-circle0" src={`uploads/${row.image}`} width="50px" alt="image" />
                </>
            ),
            style: {}
        },
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
            reorder: true,
            style: {}
        },
        {
            name: <Link className="btn btn-success" href={route("items.create")} title="create"><BsPlusLg /></Link>,
            cell: (row) => (
                <>
                    <Link className="btn btn-sm btn-info" href={route("items.show", row.id)} title="show"><BsFillEyeFill /></Link>
                    &nbsp;
                    <Link className="btn btn-sm btn-primary" href={route("items.edit", row.id)} title="edit"><BsPencilFill /></Link>
                    &nbsp;
                    <button id={row.id} className="btn btn-sm btn-danger" onClick={destroy} title="delete"><BsTrashFill /></button>
                </>
            ),
            // ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            reorder: true,
            width: '125px',
            style: {}
        },
    ];

    function destroy(e) {
        if (confirm("Are you sure you want to delete this item?")) {
            Inertia.delete(route("items.destroy", e.currentTarget.id));
        }
    }

    const customStyles = {
        rows: {
            style: {
                // minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '5px', // override the cell padding for head cells
                paddingRight: '5px',
                border: '1px solid black',
                fontSize: '20px',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: 'lightBlue',
            },
        },
        cells: {
            style: {
                paddingLeft: '5px', // override the cell padding for data cells
                paddingRight: '5px',
                border: '1px solid black',
            },
        },
    };


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Items</h1>}
        >
            <Head title="Items" />

            <div className="my-5 container">
                <div className="col-6 offset-3">
                    <DataTable
                        columns={columns}
                        data={items}
                        pagination
                        customStyles={customStyles}
                    />
                </div>
            </div>
        </Authenticated>
    );
}
