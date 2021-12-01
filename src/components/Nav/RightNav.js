import React from 'react' 
import { Link } from 'gatsby'
import '../../styles/rightNav.css'


const RightNav = () => {
    return(
        <div id="rightnav-main">
            <ul>
                <Link to="/" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Home
                    </li>
                </Link>
                <Link to="/events" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Events
                    </li>
                </Link>
                <Link to="/music" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Music
                    </li>
                </Link>
                <Link to="/blog-page" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    News
                    </li>
                </Link>
                <Link to="/bio" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="links" activeClassName="active" iscurrent="true">
                    <li className="rightnav-item">
                    Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default RightNav