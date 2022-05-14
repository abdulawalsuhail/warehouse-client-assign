import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            
            <div className='container my-5 about-container'>
                <div className='w-100'>
                    <h2 className='fw-bold'>About us</h2>
                    <div>
                        <p>Bread Factory is a Bread-producing company which items can be test as unique, non-conformist and amazing – never boring and always full of imagination and inspiration.</p>
                    </div>
                    <div>
                        <p> Bread Factory succeeds for years in tracking down style icons, developing trends and innovations in unique design, and eating them to fulfil the dreams of Fresh.</p>
                    </div>
                    <div>
                        <p> With the courage to innovate, Bread Factory creates trends and unique Food collections being affordable and desirable for all people. As an international supplier and generator of change Bread Factory continues creating new food unique designs and test objects.</p>
                    </div>
                </div>
                <div className='w-100 more-info'>
                    <div>
                        <p className='fw-bold'>Exclusive food design</p>
                        <p>Mixture of imagination, experience and professionalism is the secret of our design!</p>
                    </div>
                    <div>
                        <p className='fw-bold'>Professional Team</p>
                        <p>We are proud of our amicable, professional and always developing team!</p>
                    </div>
                    <div>
                        <p className='fw-bold'>Reasonable Prices</p>
                        <p>We produce food to fulfill needs of all people and offer it at affordable and fair prices</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;