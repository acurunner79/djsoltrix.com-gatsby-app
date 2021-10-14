import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook, FaMixcloud } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
import '../../styles/footer.css'

const Footer = () => {
    return (
        <div id="footer-main">
            <div id="footer-container">
                <div>
                    <p><img id="footer-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1633740784/cropped-soltrix-logo_uu5wpm.png" alt=""/></p>
                </div>
                <div id="social-media-icons">
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCPXm1RVzUIRzfqnYb0eX1sg"><FaYoutube className="footer-icon" size="30" color="white"/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/djsoltrix/"><FaInstagram className="footer-icon" size="30" color="white"/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/djsoltrixfanpage"><FaFacebook className="footer-icon" size="30" color="white"/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.mixcloud.com/djsoltrix/"><FaMixcloud className="footer-icon" size="30" color="white"/></a>
                </div>
            </div>
            <div id="footer-text-container">
                <p className="footer-text">&copy;2021 DJSOLTRIX </p>
                <p className="footer-text"><HiOutlineMail />bookings@djsoltrix.com </p>
            </div>
        </div>
    )
}

export default Footer
