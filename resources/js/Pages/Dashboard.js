import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Dashboard</h1>}
        >
            <Head title="Dashboard" />

            <div className="my-5 container">
                123
            </div>
        </Authenticated>
    );
}
