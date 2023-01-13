import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(props.usr)
    });

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Users</h1>}
        >
            <Head title="Users" />

            <div className="my-5 container">
                <div className="col-12">
                    <ul>
                        { users.map((user) => <li key={user.id}>{user.name}</li>) }
                    </ul>
                </div>
            </div>
        </Authenticated>
    );
}
