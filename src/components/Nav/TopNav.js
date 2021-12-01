import React from 'react' 
import { Link } from 'gatsby'
import '../../styles/topNav.css'


const TopNav = () => {
    return(
        <div id="nav-container">
            <nav id="navbar">
                <ul id="nav-links">
                <Link to="/">
                <img id="navlogo-2" src="https://res.cloudinary.com/acurunner79/image/upload/v1633740784/cropped-soltrix-logo_uu5wpm.png" alt="soltrix-logo"/>
                </Link>
                <Link to="/" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    Home
                    </li>
                </Link>
                <Link to="/events" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    Events
                    </li>
                </Link>
                <Link to="/music" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    Music
                    </li>
                </Link>
                <Link to="/blog-page" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    News
                    </li>
                </Link>
                <Link to="/bio" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="topnav-link" activeClassName="active" iscurrent="true">
                    <li className="nav-item">
                    Contact
                    </li>
                </Link>
                <a className="topnav-link" target="_blank" rel="noreferrer" href="https://dj-soltrix-apparel.creator-spring.com/">
                    <li className="nav-item">
                    Merch
                    </li>
                </a>
                </ul>
            </nav>
        </div>
    )
}

export default TopNav