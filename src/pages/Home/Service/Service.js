import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, img, description, price, seller, stoke } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <div className='d-flex justify-content-between align-item-center '>
                <h5><span className='fw-bold clr-change'>Price</span>: ${price}</h5>
                <p><small><span className='fw-bold clr-change'>Seller</span>: {seller}</small></p>
                <p><small><span className='fw-bold clr-change'>Product Stock</span>: {stoke}</small></p>
            </div>
            <div>
                <button onClick={() => navigateToServiceDetail(_id)} className='btn-us'>Updated {name}</button>
            </div>
        </div>
    );
};

export default Service;