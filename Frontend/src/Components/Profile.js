import React, { Component } from 'react';
import Aarav from "../Images/aarav.jpg";
import './ComponentsCSS/Profile.css'

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
        </>
    )
}

export default Profile