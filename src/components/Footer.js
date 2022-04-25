import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Footer(){
return(
    <footer className='footer-container'>
        
        <FontAwesomeIcon icon={faGithub}className="github-icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon= {faLinkedin} className="footer-linkedin-icon"></FontAwesomeIcon>
    </footer>
)
}