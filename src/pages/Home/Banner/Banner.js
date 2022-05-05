import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    
    return (
        <div >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Office Meeting hours</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Client Meeting Time</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhcmVob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Personal <span className='text-success'> Project Time</span></h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
 export default Banner;