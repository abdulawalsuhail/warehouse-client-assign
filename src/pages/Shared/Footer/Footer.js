import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { Card, Col, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <div className='bg-change'>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <h2>Follow Me</h2>
                        <br />
                        < BsFacebook className='text-info' /> <span className='text-primary fw-bold'>Facebook</span>
                        <br />
                        <FiInstagram /> <span className='text-dark fw-bold'>Instagram</span>
                    </Col>
                    <Col>
                        <h2>Address</h2>
                        <p>100/b Jafrabad, Pulper,
                            Mohammadpur, Dhaka-1207</p>
                        <a className='text-info' href="https://mail.google.com/mail/u/0/#inbox"><AiFillMail /> abdullahsuhail43@gmail.com</a><br />
                        <a className='text-dark' href="tel:+8801403858029"><BsFillTelephoneFill /> 01403858029</a>
                    </Col>
                    <Col>
                        <h2>Legal</h2>
                        <p>Refund policy</p>
                        <p>Terms and Condition</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col>
                        <img className='w-50 rounded' src="https://76617cf2ab22b5b6df93.b-cdn.net/wp-content/uploads/2013/09/online-booking-payment-meth.gif" alt="" />
                    </Col>
                </Row>
            </div>
            <div className='bg-dark'>
                <p> <small className='text-white'>tassuh.com copyright &copy; {year} </small></p>
            </div>
        </footer>
    );
};

export default Footer;