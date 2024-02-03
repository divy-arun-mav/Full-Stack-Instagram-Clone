import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const logoutuser = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        navigate('/signin')
    }
    return (
        <div>
            <h2>Are you sure you want to logout ?</h2>
            <button className='btn' onClick={logoutuser}>Signout</button>
        </div>
    )
}

export default Logout