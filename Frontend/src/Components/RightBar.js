import React, { Component } from 'react';
import Profilephoto from '../Images/profile.jpg';
import './ComponentsCSS/RightBar.css';
import  Suggest1 from '../Images/suggest1.jpg';
import  Suggest2 from '../Images/suggest2.jpg';
import  Suggest3 from '../Images/suggest3.jpg';
import  Suggest4 from '../Images/suggest4.jpg';
import  Suggest5 from '../Images/suggest5.jpg'
import Footer from './Footer';

export class RightBar extends Component {
  render() {
    return (
      <div className='rightbar'>
        <div className='main-user'>
          <div className='Profile-photo'><img src={Profilephoto} /></div>
          <div className='user-info'>
            <p className='acc_name'>divy_mav</p>
            <p className='user_desc'>DIVY MAV</p>
          </div>
          <a className='switch_btn' href='#'>Switch</a>
        </div>
        <div className='suggestedcontent'>
          <p className='normal_state1'>Suggested for you <a href='#'>See All</a></p>
        </div>
        <div className='suggests'>
          <div className='suggest1'>
            <div className='main-user'>
              <div className='Profile-photo'><img src={Suggest1} /></div>
              <div className='user-info'>
                <p className='acc_name'>keepingupwithritika</p>
                <p className='follow_info'>Followed by yashviii_s + 17 mo...</p>
              </div>
              <a className='switch_btn' href='#'>Follow</a>
            </div>
          </div>

          <div className='suggest2'>
            <div className='main-user'>
              <div className='Profile-photo'><img src={Suggest2} /></div>
              <div className='user-info'>
                <p className='acc_name'>nasitvraj2004</p>
                <p className='follow_info'>Followed by star.viper3 + 23 mo...</p>
              </div>
              <a className='switch_btn' href='#'>Follow</a>
            </div>
          </div>

          <div className='suggest3'>
            <div className='main-user'>
              <div className='Profile-photo'><img src={Suggest3} /></div>
              <div className='user-info'>
                <p className='acc_name'>ashok171009</p>
                <p className='follow_info'>Followed by yukti_gori</p>
              </div>
              <a className='switch_btn' href='#'>Follow</a>
            </div>
          </div>

          <div className='suggest4'>
            <div className='main-user'>
              <div className='Profile-photo'><img src={Suggest4} /></div>
              <div className='user-info'>
                <p className='acc_name'>zarvanb33</p>
                <p className='follow_info'>Follows you</p>
              </div>
              <a className='switch_btn' href='#'>Follow</a>
            </div>
          </div>

          <div className='suggest5'>
            <div className='main-user'>
              <div className='Profile-photo'><img src={Suggest5} /></div>
              <div className='user-info'>
                <p className='acc_name'>tanush.bhansali</p>
                <p className='follow_info'>Followed by surabheehehe + 6</p>
              </div>
              <a className='switch_btn' href='#'>Follow</a>
            </div>
          </div>

        </div>
        {/*  */}

        <Footer />
      </div>
    )
  }
}

export default RightBar