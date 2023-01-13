import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm, Link } from '@inertiajs/inertia-react';

export default function ItemCreate(props) {
    const { data, setData, errors, post, progress } = useForm({
        name: '',
        image: null,
    });

    // function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    // }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('items.store'));

        setData("name", "");
        setData("image", null);
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h1 className="text-info text-center my-3">Create item</h1>}
        >
            <Head title="Items create" />

            <div className="my-5 container">
                <form onSubmit={handleSubmit}>
                    <label className="form-custom-control-label" htmlFor="name">Name:</label>
                    <input
                        id="name"
                        className="form-control"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}

                    <br />

                    <label className="form-custom-control-label" htmlFor="image">Image:</label>
                    <input
                        id="image"
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={e =>
                            setData('image', e.target.files[0])
                        }
                    />
                    <span className="text-red-600">{errors.image}</span>
                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}

                    <br />

                    <button className="btn btn-dark" type="submit">Save</button>
                </form>
            </div>
        </Authenticated>
    );
}
