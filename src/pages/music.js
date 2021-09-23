import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import '../styles/music.css'

const Music = () => {
    return (
        <div>
            <TopNav />
            <Hamburger />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>Music</h1>
            <div id="music-select-container">
                <nav>
                    <ul id="subnav-links">
                        <li>All</li>
                        <li>Remixes</li>
                        <li>Live Sets</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Music
