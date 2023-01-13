import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function Profile(props) {

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">User profil</h1>}
        >
            <Head title="User profil" />

            <div className="my-5 container">
                <div className="col-12">
                    <ul>
                        <li>{props.auth.user.id}</li>
                        <li>{props.auth.user.name}</li>
                        <li>{props.auth.user.email}</li>
                    </ul>
                </div>
            </div>
        </Authenticated>
    );
}
