import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/quantity/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId, service])

    // quantity operation
    const handleDelivered = e => {
        e.preventDefault()
        let quantity = service?.quantity
        quantity = parseInt(quantity) - 1
        console.log(quantity)
        if (quantity < 0) {
            return alert("Quantity can not be less then zero")
        }

        const url = `http://localhost:5000/quantity/${serviceId}`
        console.log(url)
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                setService({ ...data, quantity: quantity })
                toast('Successfully Delivered')
            })
    }
    const handleUpdateQuantity = (e) => {
        e.preventDefault()
        let quantity = service?.quantity
        const addQuantity = parseInt(e.target.quantity.value)
        console.log(addQuantity)
        if (addQuantity < 0) {
            quantity = parseInt(quantity) + addQuantity
            // console.log(quantity)
            const updateInventory = { quantity }
            const url = `http://localhost:5000/item/${serviceId}`
            console.log(url)
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ updateInventory })
            })
                .then(res => res.json())
                .then(data => {
                    toast('Quantity updated')
                    e.target.reset()
                })
        } else {
            alert('Please insert positive number of quantity')
            e.target.reset()
            return
        }


    }

    return (
        <div>
            <div className='container'>
                <h2 className='clr-change fw-bold mt-5 mb-3 text-center'>You are about to product</h2>
                <div className='manage-container p-5'>
                    <img style={{ width: '50px', borderRadius: "20px", marginRight: "8px" }} src={service.img} />
                    <div>
                        {/* <h5>{service.name}</h5>
                        <h5>${service.price}</h5> */}
                        <div className='d-flex justify-content-between align-item-center'>
                            <h5>{service.name}</h5>
                            <h5 className='clr-change'>${service.price}</h5>
                            <p><small><span className='fw-bold clr-change'>Seller</span>: {service.seller}</small></p>
                            <p><small><span className='fw-bold clr-change'>Product Stock</span>: {service.stoke}</small></p>
                        </div>
                        <form onSubmit={handleUpdateQuantity} className=''>
                            <input type='number' name='quantity' placeholder='Your quantity' />
                            <button type='submit' className='btn-us m-3'>Add</button>
                        </form>
                        <button className='btn-us' onClick={handleDelivered}>Delivered</button>
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