import React, { useState } from 'react'
import Remixes from '../components/Remixes/Remixes'
import Remixes2 from '../components/Remixes2/Remixes2'
import Remixes3 from '../components/Remixes3/Remixes3'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Accordion from 'react-bootstrap/Accordion'
import Mixcloud from '../components/Mixcloud/Mixcloud'
import Singles from '../components/Singles/Singles'
import Footer from '../components/Footer/Footer'
import Seo from '../components/Seo'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import '../styles/music.css'

const Music = (props) => {
    // console.log('music props', props)
    const [key, setKey] = useState('home');

    return (
        <div>
            <Seo />
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png" alt="soltrix"/>
            <h1 id="page-header">MUSIC</h1>
            <div id="music-select-container">
                <Tabs activeKey={key} onSelect={(k) => setKey(k)} unmountOnExit="true" mountOnEnter="true" id="noanim-tab-example" className="mb-3">
                    <Tab className="subnav-links" eventKey="home" title="Singles">
                        <div id="singles-display">
                            <Singles />
                        </div>
                    </Tab>
                    <Tab className="subnav-links" eventKey="remixes" title="Remixes">
                            <Accordion id="remix-accordion"defaultActiveKey="4" unmountOnExit="true" mountOnEnter="true">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>2020-Present</Accordion.Header>
                                    <Accordion.Body className="accordion-main-body">
                                        <div id="singles-display">
                                            <Remixes />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2018-2019</Accordion.Header>
                                    <Accordion.Body>
                                        <div id="singles-display">
                                            <Remixes2 id="remix-tab"/>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>2015-2017</Accordion.Header>
                                    <Accordion.Body>
                                        <div id="singles-display">
                                            <Remixes3 />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                    </Tab>
                    <Tab className="subnav-links" eventKey="dj mixes" title="DJ Mixes">
                        <Mixcloud />
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </div>
    )
}

export default Music

