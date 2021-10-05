import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import UpcomingGigs from '../components/UpcomingGigs/UpcomingGigs'
import Singles from '../components/Singles/Singles'


const Events = () => {

    return (
        <div>
            <TopNav />
            <Hamburger />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>Events</h1>
            <UpcomingGigs />
            <Singles />
        </div>
    )

}

export default Events