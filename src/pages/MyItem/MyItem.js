import axios from 'axios'
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ShowMyItem from '../ShowMyItem/ShowMyItem';

const MyItem = () => {
    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://assigenment-11.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    const navigate = useNavigate()

    useEffect(() => {
        const email = user.email

        const getItem = async () => {
            const url = `https://assigenment-11.herokuapp.com/myItems?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                })
                setMyItems(data)

            } catch (error) {
                console.log(error.message)
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getItem()
    }, [user])
    return (

        <div className='w-50 mx-auto'>
            <h2 className='fw-bold clr-change'>Manage My item</h2>
            <div className='manage-item'>
                {
                    myItems.map(item => <ShowMyItem
                        key={item._id}
                        item={item}
                        handleDelete={handleDelete}
                    />)
                }
            </div>
        </div>
    );
};

export default MyItem;