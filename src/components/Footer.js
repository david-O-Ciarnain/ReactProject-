import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default function Footer(){
return(
    <div>
        <h1>footer works</h1>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        <FontAwesomeIcon icon= {faLinkedin}></FontAwesomeIcon>
    </div>
)
}