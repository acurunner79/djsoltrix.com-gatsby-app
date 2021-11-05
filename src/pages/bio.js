import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import '../styles/bio.css'


const Bio = () => {

    return (
        <div>
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png" alt="soltrix"/>
            <h1 id="gig-header">Bio</h1>
            <div id="event-calendar-template">
                <h5 id="calendar-month">OCTOBER</h5>
                <h4 id="calendar-day">20</h4>
                <h4 id="calendar-year">2021</h4>
            </div>
        </div>
    )
}

export default Bio