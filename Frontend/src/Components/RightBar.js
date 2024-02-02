import React, { Component } from 'react';
import Profilephoto from '../Images/profile.jpg';
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
        <style>
          {`
          .rightbar {
    top: 0;
    height: 100%;
    margin: 43px 0px 0px 0px;
}

.Profile-photo img {
    width: 44px;
    border-radius: 50%;
}

.main-user {
    display: flex;
    margin: 10px 0px;
}

.user-info {
    margin: 2px 10px 0px 10px;
    width: fit-content;
}

.acc_name {
    font-weight: 500;
    font-size: 14px;
}

.user_desc {
    font-size: 14px;
    color: rgb(130, 130, 130);
}

.follow_info {
    font-size: 12px;
    color: rgb(130, 130, 130);
    max-width: min-content;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.switch_btn {
    font-size: 13px;
    text-decoration: none;
    color: rgba(57, 149, 255, 0.917);
    font-weight: 600;
    margin: 10px 0px 0px 115px;
    padding: 0;
}

.suggest1 .switch_btn{
    margin: 10px 8px;
}

.suggest2 .switch_btn{
    margin: 10px 2px;
}

.suggest3 .switch_btn{
    margin: 10px 60px;
}

.suggest4 .switch_btn{
    margin: 10px 113px;
}

.suggest5 .switch_btn{
    margin: 10px 15px;
}

.normal_state1 {
    font-size: 14px;
    font-weight: 500;
    color: rgb(130, 130, 130);
    margin-top: 20px;
}

.normal_state1 a {
    font-size: 13px;
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin: 0px 0px 0px 123px;
}

.suggests {
    margin: 12px 0px 0px 0px;
}
          `}
        </style>
      </div>
    )
  }
}

export default RightBar