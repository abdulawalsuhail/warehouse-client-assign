import React from 'react';
import Videos from '../../images/screen-like video-section/video.png'
import './ServiceNew.css'

const ServiceNew = () => {
    return (
        <div className=' serviceNew-container'>
            <div>
                <img style={{ width: '750px',}} src={Videos} alt='' />
            </div>
            <div className='right-container pt-5'>
                <h1>Flexible Pricing Policy
                    & Decades Of Experience!</h1>
                <p className='pt-5'>
                    We believe that the services, offered by our company, should satisfy the high expectations of our customers. We are dedicated in creating added value for our customers by implementing modern technology in our work. That is why the desire of constant improvement is the driving force behind our transportation business.
                </p>
                <br />
                <p>
                    Providing the best transport and shipping services currently available allover the world. Our skilled personnel, utilising the latest communications, new tracking and processing software, combined with decades of experience!
                </p>
            </div>
        </div>
    );
};

export default ServiceNew;