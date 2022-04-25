import React from 'react'
import profileImage from '../images/profileimage.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import{faLinkedin} from '@fortawesome/free-brands-svg-icons'
export default function Contact(){

  
    return(
      <div className='contacts-container'>
        <img src={profileImage} className='profile-image' alt="profile potret"></img>
            <header className='header-container'>
                <h3>David O Ciarnain</h3>
                <p>Java developer student</p>
                <div >
                  <a href='mailto:david951@live.se'> 
                   <button className='email-button'>
                       <FontAwesomeIcon icon ={faEnvelope} className='email-icon'></FontAwesomeIcon> Email 
                    </button>
                  </a>
                  <a href='https://www.linkedin.com/in/david-%C3%B3-ciarnain-b252bb217/'>
                    <button className='linkedin-button'>
                         <FontAwesomeIcon icon = {faLinkedin} className="linkedin-icon"> </FontAwesomeIcon>linkedin
                    </button>
                 </a>
                </div>
            </header>
        </div>
    )
}