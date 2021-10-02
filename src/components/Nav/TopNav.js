import React from 'react' 
import { Link } from 'gatsby'
import '../../styles/topNav.css'


const TopNav = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <ul id="nav-links">
                <Link to="/" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Home
                    </li>
                </Link>
                <Link to="/events" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Events
                    </li>
                </Link>
                <Link to="/music" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Music
                    </li>
                </Link>
                <Link to="/">
                <img id="navlogo-2" src="https://res.cloudinary.com/acurunner79/image/upload/v1632262566/Soltrix_Logo_2018_White_zozzvb.png" alt="soltrix-logo"/>
                </Link>
                <Link to="/blog-page" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    News
                    </li>
                </Link>
                <Link to="/bio" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="topnav-link" activeclassname="active" iscurrent="true">
                    <li>
                    Contact
                    </li>
                </Link>
                </ul>
            </nav>
        </div>
    )
}

export default TopNav