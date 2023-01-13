import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({auth, header, children}) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse container" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" href={route('items.index')}>Items</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown" style={{width: '148px'}}>
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{auth.user.name}</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" href={route('profile')}>Profile</Link>
                                    <Link className="dropdown-item" href={route('logout')} method="post" as="button" type="button">Log Out</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {header && (<header>{header}</header>)}

            <main>{children}</main>
        </div>
    );
}
