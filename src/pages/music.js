import React from 'react'
import Remixes from '../components/Remixes/Remixes'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Mixcloud from '../components/Mixcloud/Mixcloud'
import Singles from '../components/Singles/Singles'
import '../styles/music.css'

const Music = (props) => {
    // console.log('music props', props)
    return (
        <div>
            <TopNav />
            <Hamburger />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1 id="page-header">Music</h1>
            <div id="music-select-container">
                <Tabs defaultActiveKey="home" unmountOnExit='true' id="noanim-tab-example" className="mb-3">
                    <Tab className="subnav-links" eventKey="home" title="Singles">
                        <div id="singles-display">
                            <Singles />
                        </div>
                    </Tab>
                    <Tab className="subnav-links" eventKey="profile" title="Remixes">
                        <div id="singles-display">
                            <Remixes />
                        </div>
                    </Tab>
                    <Tab className="subnav-links" eventKey="contact" title="Live Sets">
                        <Mixcloud />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Music

