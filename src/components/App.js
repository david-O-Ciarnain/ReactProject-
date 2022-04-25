import React from "react"
import Footer from './Footer.js'
import About from "./About.js"
import Interests from "./Interests.js"
import Contact from "./Contact.js"

export default function App(){
    return ( 
        <div className="app-container">
        <Contact />
        <About />
        <Interests /> 
        <Footer /> 
        </div>
    )
}