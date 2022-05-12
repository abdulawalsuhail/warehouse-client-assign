import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const { register } = useForm();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${serviceId}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    return (
        <div>
            <div className='container'>
                <h2 className='clr-change fw-bold mt-5 mb-3 text-center'>You are about to product</h2>
                <div className='manage-container p-5'>
                    <img style={{ width: '30px', borderRadius: "20px", marginRight: "8px" }} src={service.img} />
                    <div>
                        {/* <h5>{service.name}</h5>
                        <h5>${service.price}</h5> */}
                        <div className='d-flex justify-content-between align-item-center'>
                            <h5>{service.name}</h5>
                            <h5 className='clr-change'>${service.price}</h5>
                            <p><small><span className='fw-bold clr-change'>Seller</span>: {service.seller}</small></p>
                            <p><small><span className='fw-bold clr-change'>Product Stock</span>: {service.stoke}</small></p>
                        </div>
                        <input className='mb-2' placeholder='Your Quantity' type="number" {...register("stoke")} />
                        <button className='btn-us m-3'>Add</button>
                        <button className='btn-us'>Delivered</button>
                    </div>
                </div>
                {/* <Link to="/checkout">

                    <button className='btn-us'>Checkout</button>
                </Link> */}
            </div>
        </div>
    );
};

export default ServiceDetail;