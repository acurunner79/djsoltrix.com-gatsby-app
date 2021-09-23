import * as React from "react"
import {IoIosArrowForward} from 'react-icons/io'
import Layout from "../Layout/index"
import TopNav from "../components/Nav/TopNav"
import Hamburger from "../components/Nav/Hamburger"
import '../styles/home.css'
import '../Layout/layout.css'


const IndexPage = () => {
  return (
    // <Layout>
    <>
    <TopNav />
    <Hamburger />
    <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
      <div id="home-upper-container">
        <div id="gig-chart">
          <h4 id="gig-header">UPCOMING GIGS</h4><br/>
          <div id="gig-labels">
              <h4 className="labels">DATE</h4>
              <h4 className="labels">EVENT</h4>
              <h4 className="labels">LOCATION</h4>
          </div>
          <div className="gig-content">
              <p className="gig-date">SEP 24th</p>
              <p className="gig-details">Some Bachata Festival</p>
              <p className="gig-details">Washington</p>
          </div>
          <div className="gig-content">
              <p className="gig-date">OCT 24th</p>
              <p className="gig-details">Some Bachata Festival</p>
              <p className="gig-details">Chicago, IL</p>
          </div>
          <div className="gig-content">
              <p className="gig-date">NOV 24th</p>
              <p className="gig-details">Some Bachata Festival</p>
              <p className="gig-details">Tampa, FL</p>
          </div>
          <div className="gig-content">
              <p className="gig-date">DEC 24th</p>
              <p className="gig-details">Some Bachata Festival</p>
              <p className="gig-details">New York, NY</p>
          </div><br/>
              <button className="button">More Events <IoIosArrowForward size="15"/></button>
        </div><br/>
          <h2>Latest Music</h2>
        <div id="latest-music-container">
          <div>
              <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160646/hqdefault_ertjhp.webp" alt=""/>
              <h5>Farruko - Pepas (DJ Soltrix Bachata Remix)</h5>
          </div>
          <div>
              <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160659/hqdefault_1_oq1yxt.webp" alt=""/>
              <h5>DJ Soltrix - Bachata Mix Studio Sessions</h5>
          </div>
          <div>
              <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160672/hqdefault_2_pyeq28.webp" alt=""/>
              <h5>Niall Horan - This Town (DJ Soltrix Bachata Remix)</h5>
          </div>
          <div>
              <img className="latest-music-cover" src="https://res.cloudinary.com/acurunner79/image/upload/v1632160684/mqdefault_6s_uwabie.webp" alt=""/>
              <h5>Farruko - Pepas (DJ Soltrix Bachata Remix)</h5>
          </div>
        </div><br/>
          <button className="button">More music <IoIosArrowForward size="15"/></button>
        <div id="gig-chart">
            <h4 id="gig-header">Soltrix News</h4>
        </div>
            <button className="button">More News <IoIosArrowForward size="15"/></button>
      </div>
      </>
    // </Layout>
  )
}

export default IndexPage
