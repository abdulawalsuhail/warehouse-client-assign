import React from 'react';
import './Competative.css'
import Post1 from '../../../images/post/post-1.png'
import { Link } from 'react-router-dom';

const Competative = () => {
    return (
        <div className='d-flex  g-4 m-5'>
            <div className='m-5'>
                <h5 className='clr-change'>Supply Chain Technology & Customized Solutions.</h5>
                <h1>Competitive Advantages For Largest Companies!</h1>
                <p>Providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.</p>
                <p><span>*</span> Transparent Pricing, Environmental Sensitivity</p>
                <p><span>*</span> 24/7 Hours Support, Professional and Qualified</p>
                <p><span>*</span> Real Time Tracking, Fast & Efficient Delivery</p>
                <p><span>*</span> Warehouse Storage, Personalised solutions</p>

                <>
                    <button className='btn-us my-4'>More About Us</button>
                    <a className=' btn-hover'>Find Your Solution</a>
                </>
            </div>
            <div>
                <img src={Post1} alt='' />
            </div>
        </div>
    );
};

export default Competative;