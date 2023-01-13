import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/inertia-react';

export default function Profile(props) {
    const { item } = usePage().props

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Item show</h1>}
        >
            <Head title="Item show" />

            <div className="my-5 container">
                <div className="col-12">
                    <ul>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                    </ul>
                </div>
            </div>
        </Authenticated>
    );
}
