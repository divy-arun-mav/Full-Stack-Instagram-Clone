import React, { Component } from 'react';
import Aarav from "../Images/aarav.jpg";

const Profile = () => {
    return (
        <>
            <div className='profile'>
                <div className='about_user'>
                    <img className='profile_photo' src={Aarav} />
                    <div className='accountname'>
                        <h2>reelmaster_aarav_bhanushali</h2>
                        <p>Aarav Bhanushali</p>
                    </div>
                </div>
                <div className='abt_person'>
                    <div className='data-person'>
                        <h4>300</h4>
                        <p>posts</p>
                    </div>
                    <div className='data-person'>
                        <h4>300</h4>
                        <p>followers</p>
                    </div>
                    <div className='data-person'>
                        <h4>300</h4>
                        <p>following</p>
                    </div>
                </div>
                <img className='post_photo' src='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x600.jpg' />
                <img className='post_photo' src='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x600.jpg' />
                <img className='post_photo' src='https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x600.jpg' />

                <button className='message'>
                    Message
                </button>

                <button className='following'>
                    Following
                </button>
            </div>
            <style>
                {`
                .profile{
    width: fit-content;
    position: absolute;
    top: 40px;
    left: 150px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgb(0, 0, 0);
}

.about_user{
    display: flex;
}

.accountname{
    display: block;
}

.accountname h2{
    font-size: 15px;
}

.abt_person{
    display: flex;
}

.data-person{
    flex-direction: row;
}

.message , .following {
    position: relative;
    top: 0;  
}

.message:hover{
    background-color: blue;
}
                `}
            </style>
        </>
    )
}

export default Profile