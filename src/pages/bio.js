import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import ScrollButton from '../components/ScrollButton/ScrollButton'

const Bio = () => {
    return (
        <div>
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>Bio</h1>
        </div>
    )
}

export default Bio
