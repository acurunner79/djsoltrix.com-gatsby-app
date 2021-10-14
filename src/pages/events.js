import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import UpcomingGigs from '../components/UpcomingGigs/UpcomingGigs'
import Footer from '../components/Footer/Footer'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import '../styles/gigspreview.css'


const Events = () => {

    return (
        <div>
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>Upcoming Events</h1>
            <div id="gig-chart">
                <div id="labels">
                    <h4>DATE</h4>
                    <h4>EVENT</h4>
                    <h4 id="page-label-hide">PAGE</h4>
                </div>
                    <div id="gig-label-border"></div>
            <UpcomingGigs />
            </div>
            <Footer />
        </div>
    )

}

export default Events