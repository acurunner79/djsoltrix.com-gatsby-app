import * as React from "react"
import {IoIosArrowForward} from 'react-icons/io'
// import Layout from "../Layout/index"
import Instagram from "../components/Instagram/Instagram"
import { graphql, Link } from "gatsby"
import TopNav from "../components/Nav/TopNav"
import Hamburger from "../components/Nav/Hamburger"
import PaginatedBlogPage from "../templates/PaginatedBlogPage"
import '../styles/home.css'
// import '../components/Layout/layout.css'


const IndexPage = (props) => {
  // console.log('home page props', props)
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
            <Link to="/events">
              <button className="button">More Events <IoIosArrowForward size="15"/></button>
            </Link>
        </div><br/>
          <h2>Latest Music</h2>
        <div id="latest-music-container">
          <div className="latest-music-card">
              <img className="latest-music-cover" src={props.data.allYoutubeVideo.edges[0].node.thumbnail.url} alt=""/>
              <h5>{props.data.allYoutubeVideo.edges[0].node.title}</h5>
          </div>
          <div className="latest-music-card">
              <img className="latest-music-cover" src={props.data.allYoutubeVideo.edges[1].node.thumbnail.url} alt=""/>
              <h5>DJ Soltrix - Bachata Mix Studio Sessions</h5>
          </div>
          <div className="latest-music-card">
              <img className="latest-music-cover" src={props.data.allYoutubeVideo.edges[2].node.thumbnail.url} alt=""/>
              <h5>Niall Horan - This Town (DJ Soltrix Bachata Remix)</h5>
          </div>
          <div className="latest-music-card">
              <img className="latest-music-cover" src={props.data.allYoutubeVideo.edges[3].node.thumbnail.url} alt=""/>
              <h5>Farruko - Pepas (DJ Soltrix Bachata Remix)</h5>
          </div>
        </div><br/>
        <Link to="/music">
          <button className="button">More music <IoIosArrowForward size="15"/></button>
        </Link>
        <div id="news-chart">
            <h4 id="gig-header">Soltrix News</h4>
            {/* <PaginatedBlogPage /> */}
            <h4 id="gig-header">Instagram</h4>
            <Instagram />
        </div>
        <Link to="/blog-page">
            <button className="button">More News <IoIosArrowForward size="15"/></button>
        </Link>
      </div>
      </>
    // </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query homeVideos {
        allYoutubeVideo(filter: {channelId: {eq: "UCPXm1RVzUIRzfqnYb0eX1sg"}}) {
            edges {
                node {
                    id
                    title
                    description
                    videoId
                    publishedAt
                    privacyStatus
                    channelTitle
                    thumbnail {
                        url
                        height
                        width
                    }
                }
            }   
        }
    }

`

