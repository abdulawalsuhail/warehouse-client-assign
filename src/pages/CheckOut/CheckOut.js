import React from 'react';


const Checkout = () => {
    return (
        <div className='w-50 mx-auto border border-secondary rounded p-4 my-4'>
            <h2 className='fw-bold clr-change'>Please Checkout your booking</h2>
            <form className='d-flex flex-column'>
                <input className='mb-2' type='text' placeholder='Your Name' required/>
                <input className='mb-2' type='email' placeholder='Your Email'  readOnly/>
                <input className='mb-2' type='number' placeholder='Your Number'  required/>
                <input className='mb-2' type='text' placeholder='Your Address'  required/>
                
                <input className='btn-us' type="submit" value="Delivery Product" />
            </form>
        </div>
    );
};

export default Checkout;