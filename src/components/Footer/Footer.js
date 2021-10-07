import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaMixcloud } from 'react-icons/fa'

const Footer = () => {
    return (
        <div id="social-media-icons">
            <p>Djsoltrix.com</p>
            <FaYoutube size="30" color="white"/>
            <FaInstagram size="30" color="white"/>
            <FaFacebook size="30" color="white"/>
            <FaMixcloud size="30" color="white"/>
        </div>
    )
}

export default Footer
