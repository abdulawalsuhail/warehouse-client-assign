import React from 'react';
import { Card } from 'react-bootstrap';
import './GolobalDelivary.css'

const GolobalDelivary = () => {
    return (
        <div>
            <div className='text-center'>
                <h5 className='clr-change mt-5'>Real Solutions, Real Fast!</h5>
                <h2 className='fw-bold'>Global Solutions</h2>
                <p className='text-secondary'>Customized logistics solutions will help you analyze, develop and implement <br /> successful supply chain management strategies from end-to-end.</p>
            </div>
            <div className='card-container container'>
                <Card className="text-center">

                    <Card.Body>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbVxehlvng2Tgh1FIdjZBLql1mu97cMcIIQ&usqp=CAU'/>
                        <Card.Title>Air Freight</Card.Title>
                        <Card.Text>
                            We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.
                        </Card.Text>
                        <a className='btn-hover'>Read more</a>
                    </Card.Body>

                </Card>
                <Card className="text-center">

                    <Card.Body>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImdApHkb6hdKaCOmSdGI2XFnrmRyVn6R1fg&usqp=CAU'/>
                        <Card.Title className='pt-3'>Ocean Freight</Card.Title>
                        <Card.Text>
                            We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.
                        </Card.Text>
                        <a className='btn-hover'>Read more</a>
                    </Card.Body>

                </Card>
                <Card className="text-center">

                    <Card.Body>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTebN7jEzamdSCPm-IJfzTiGqRzAwYtV-Gqw&usqp=CAU'/>
                        <Card.Title className='pt-3'>Road Freight</Card.Title>
                        <Card.Text>
                            We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.
                        </Card.Text>
                        <a className='btn-hover'>Read more</a>
                    </Card.Body>

                </Card>
            </div>
        </div>
    );
};

export default GolobalDelivary;