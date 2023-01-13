import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, usePage, Link } from '@inertiajs/inertia-react';

export default function ItemEdit(props) {
    const { item } = usePage().props;

    const { data, setData, put, errors } = useForm({
        name: item.name || ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("items.update", item.id));
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Edit item</h1>}
        >
            <Head title="Items edit" />

            <div className="my-5 container">
                <form onSubmit={handleSubmit}>
                    <label className="form-custom-control-label" htmlFor="name">Name:</label>
                    <input
                        id="name"
                        className="form-control"
                        name="name"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}

                    <br />

                    <button className="btn btn-dark" type="submit">Update</button>
                </form>
            </div>
        </Authenticated>
    );
}
