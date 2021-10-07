import * as React from "react"
import {IoIosArrowForward} from 'react-icons/io'
import Layout from "../components/Layout"
import Instagram from "../components/Instagram/Instagram"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
import TopNav from "../components/Nav/TopNav"
import Hamburger from "../components/Nav/Hamburger"
import Footer from "../components/Footer/Footer"
import NewsBlog from "../components/NewsBlog/NewsBlog"
import GigsPreview from "../components/GigsPreview/GigsPreview"
import ReactPlayer from "react-player";
import '../styles/home.css'
import '../components/Layout/layout.css'


const IndexPage = (props) => {
  console.log('home page prop', props)
  return (
    // <Layout>
    <>
    <TopNav />
    <Hamburger />
    <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
    <h1>REMIXER & PRODUCER</h1>
      <div id="home-upper-container">
        <div id="gig-chart">
          <h4 id="gig-header">UPCOMING GIGS</h4><br/>
          <GigsPreview />
            <Link to="/events">
              <button className="button">More Events <IoIosArrowForward size="15"/></button>
            </Link>
        </div><br/>
          <h2>Latest Music</h2>
        <div id="latest-music-container">
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
            url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[0].node.videoId}"`}/>
            <h5>{props.data.allContentfulLatestVideo.edges[0].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[0].node.videoId}"`}/>
              <h5>{props.data.allContentfulLatestVideo.edges[0].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[0].node.videoId}"`}/>
              <h5>{props.data.allContentfulLatestVideo.edges[0].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[0].node.videoId}"`}/>
              <h5>{props.data.allContentfulLatestVideo.edges[0].node.videoTitle}</h5>
          </div>
        </div><br/>
        <Link to="/music">
          <button className="button">More music <IoIosArrowForward size="15"/></button>
        </Link>
        
        <div id="news-chart">
            <h4 id="gig-header">Soltrix News</h4>
            <NewsBlog />
            <Link to="/blog-page">
                <button className="button">More News <IoIosArrowForward size="15"/></button>
            </Link>
            <h4 id="gig-header">Instagram</h4>
            {/* <Instagram /> */}
        </div>
        <Footer />
      </div>
      </>
    // </Layout>
  )
}

export default IndexPage

export const query = graphql`
    query homeVideos {
      allContentfulLatestVideo {
        edges {
          node {
            videoId
            videoTitle
          }
        }
      }
    }
`

