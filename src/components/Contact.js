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
                <div className='header-button'>
                    <button><FontAwesomeIcon icon ={faEnvelope}></FontAwesomeIcon> Email </button>
                    <button> <FontAwesomeIcon icon = {faLinkedin}> </FontAwesomeIcon>linkedin</button>
                </div>
            </header>
        </div>
    )
}