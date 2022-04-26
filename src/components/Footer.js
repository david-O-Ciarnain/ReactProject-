import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Footer(){
return(
    <footer className='footer-container'>
        
      <a href='https://github.com/david-O-Ciarnain' ><FontAwesomeIcon icon={faGithub} size="" className="github-icon"></FontAwesomeIcon></a> 
      <a href='https://www.linkedin.com/in/david-%C3%B3-ciarnain-b252bb217/'>  <FontAwesomeIcon icon= {faLinkedin} className="footer-linkedin-icon"></FontAwesomeIcon></a>
    </footer>
)
}