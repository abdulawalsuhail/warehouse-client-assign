import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();


    const onSubmit = (data, e) => {
        data.email = user?.email
        console.log(data);
        const url = `https://assigenment-11.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                e.target.reset()
                toast('Added New Item')
                console.log(result);
            })
    };


    return (
        <div className='w-50 mx-auto border border-secondary rounded p-4 my-4'>
            <h2 className='fw-bold clr-change'>Please add your item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Item quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Name Of Supplier' {...register("seller")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn-us' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;