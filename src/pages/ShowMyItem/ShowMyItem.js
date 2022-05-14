import React from 'react';

const ShowMyItem = ({ item, handleDelete }) => {
    const { _id, name, price, img } = item
    return (
        <div>
            <div className='manage-container'>
                <img style={{ width: '30px', borderRadius: "20px", marginRight: "8px" }} src={img} />
                <span>{name} </span>
                <h5>${price}</h5>
                <button className='btn-us' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ShowMyItem;