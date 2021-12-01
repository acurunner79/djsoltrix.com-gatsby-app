import * as React from "react"
import {IoIosArrowForward} from 'react-icons/io'
import Layout from "../components/Layout"
// import Instagram from "../components/Instagram/Instagram"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql, Link } from "gatsby"
import TopNav from "../components/Nav/TopNav"
import Hamburger from "../components/Nav/Hamburger"
import Footer from "../components/Footer/Footer"
import NewsBlog from "../components/NewsBlog/NewsBlog"
import GigsPreview from "../components/GigsPreview/GigsPreview"
import ScrollButton from "../components/ScrollButton/ScrollButton";
import Seo from '../components/Seo'
import ReactPlayer from "react-player";
import '../styles/home.css'
import '../components/Layout/layout.css'


const IndexPage = (props) => {
  // console.log('home page prop', props)
  return (
    // <Layout>
    <>
    <Seo />
    <TopNav />
    <Hamburger />
    <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png" alt="soltrix"/>
    <h1 id="home-header">Latin DJ  &  Producer</h1>
    <ScrollButton />
      <div id="home-upper-container">
          <div id="news-chart">
              {/* <h1 id="gig-header">Soltrix News</h1> */}
              <NewsBlog />
              <Link to="/blog-page">
                  <button className="button">More News <IoIosArrowForward size="15"/></button>
              </Link>
          </div>
          <div id="gig-chart">
            <h4 id="gig-header">UPCOMING EVENTS</h4><br/>
            <GigsPreview />
              <Link to="/events">
                <button className="button">More Events <IoIosArrowForward size="15"/></button>
              </Link>
          </div><br/>
          <h2 id="latest-music-header">LATEST MUSIC</h2>
        <div id="latest-music-container">
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
            url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[0].node.videoId}"`}
            controls={true}/>
            <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[0].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[1].node.videoId}"`}
              controls={true}/>
              <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[1].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[2].node.videoId}"`}
              controls={true}/>
              <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[2].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[3].node.videoId}"`}
              controls={true}/>
              <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[3].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[4].node.videoId}"`}
              controls={true}/>
              <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[4].node.videoTitle}</h5>
          </div>
          <div className="latest-music-card">
            <ReactPlayer className="latest-music-cover"
              url={`"https://www.youtube.com/embed/${props.data.allContentfulLatestVideo.edges[5].node.videoId}"`}
              controls={true}/>
              <h5 className="latest-music-title">{props.data.allContentfulLatestVideo.edges[5].node.videoTitle}</h5>
          </div>
        </div>
          <Link to="/music">
            <button className="button">More music <IoIosArrowForward size="15"/></button>
          </Link>
        {/* <div id="lower-container">
          <div className="gig-preview-border"></div>
          <div id="instagram-home-card">
              <h4 id="gig-header">Instagram</h4>
              <Instagram />
          </div>
        </div> */}
      </div>
        <Footer />
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

