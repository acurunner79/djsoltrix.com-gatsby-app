import React from 'react' 
import { Link } from 'gatsby'
import '../../styles/rightNav.css'


const RightNav = () => {
    return(
        <div id="rightnav-main">
            <ul>
                <Link to="/" className="links" activeclassname="active" iscurrent="true">
                    <li >
                    Home
                    </li>
                </Link>
                <Link to="/events" className="links" activeclassname="active" iscurrent="true">
                    <li >
                    Events
                    </li>
                </Link>
                <Link to="/music" className="links" activeclassname="active" iscurrent="true">
                    <li>
                    Music
                    </li>
                </Link>
                <Link to="/news" className="links" activeclassname="active" iscurrent="true">
                    <li>
                    News
                    </li>
                </Link>
                <Link to="/bio" className="links" activeclassname="active" iscurrent="true">
                    <li>
                    Bio
                    </li>
                </Link>
                <Link to="/contact" className="links" activeclassname="active" iscurrent="true">
                    <li>
                    Contact
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default RightNav