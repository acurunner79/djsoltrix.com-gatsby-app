import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaMixcloud } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <>
        <div id="footer-container">
            <div>
                <p><img id="footer-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1633740784/cropped-soltrix-logo_uu5wpm.png" alt=""/></p>
            </div>
            <div id="social-media-icons">
                <a target="_blank"><FaYoutube className="footer-icon" size="30" color="white"/></a>
                <FaInstagram className="footer-icon" size="30" color="white"/>
                <FaFacebook className="footer-icon" size="30" color="white"/>
                <FaMixcloud className="footer-icon" size="30" color="white"/>
            </div>
        </div>
                <p><HiOutlineMail />bookings@djsoltrix.com</p>
        <p>&copy;2021</p>
        </>
    )
}

export default Footer
