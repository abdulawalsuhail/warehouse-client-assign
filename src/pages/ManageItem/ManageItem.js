import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './ManageItem.css'


const ManageItem = () => {
    const [services, setServices] = useServices();
    const navigate = useNavigate()

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    const handleAddItemBtn =()=>{
        navigate('/additem')
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='fw-bold clr-change'>Manage your item</h2>
            <div className='manage-item'>
                {
                    services.map(service => <div key={service._id}>
                        <div className='manage-container'>
                            <img style={{width:'30px', borderRadius:"20px", marginRight:"8px"}} src={service.img}/>
                            <span>{service.name} </span>
                            <h5>${service.price}</h5>
                            <button className='btn-us' onClick={() => handleDelete(service._id)}>Delete</button>
                        </div>

                    </div>)
                }
            </div>
                <button className='btn-us mt-4' onClick={handleAddItemBtn}>Add Item</button>
        </div>
    );
};

export default ManageItem;