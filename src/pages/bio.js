import React from 'react'
import { graphql } from 'gatsby'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import Footer from '../components/Footer/Footer'
import { Carousel } from 'react-bootstrap'
import Img from 'gatsby-image'
// import { Sol100721_007 } from '../images/Sol100721_007.jpg'
import '../styles/bio.css'


const Bio = (props) => {
    console.log('imagess', props)

    return (
        <div id="bio-body">
            <TopNav />
            <Hamburger />
            <ScrollButton />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png" alt="soltrix"/>
            {/* <h1 id="gig-header">Bio</h1> */}
            <div id="bio-container">
                <div id="bio-upper">
                    <Img className="bio-images" fluid={props.data.slideImage1.childImageSharp.fluid} alt="soltrix-1"/>
                    <div id="upper-paragraph">
                        <p className="bio-paragraph">David Rodriguez, known professionally as DJ Soltrix, is a Latin-American DJ and music producer from Tampa, FL. Born on December 2, 1985, he became interested in music at an early age because of his father's background in local radio and the influence of other DJs' mixes. His main inspiration, however, came from having full access to his father's production studio to practice creating his own mixes.</p>
                            <br/>
                        <p className="bio-paragraph">Throughout the 2000s, David answered his calling from spending hours and hours of bedroom DJing to eventually landing his first private event bookings and local nightclub residencies within the Tampa Bay area. It wasn't until 2008 when DJ Soltrix really became popular in his community after landing his first Latin radio mix-show on 92.5 Maxima FM (WYUU). As an official radio DJ now, his career continued blooming with success as he was mixing live every week at some of the most prestigious nightclubs in the city of Tampa. </p>
                            <br/>
                    </div>
                </div>
                <div id="bio-lower">
                    <div id="carousel-container">
                        <Carousel fade="true" pause="false" variant="dark" controls="true">
                            <Carousel.Item >
                                <Img className="bio-images" fluid={props.data.slideImage2.childImageSharp.fluid}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Img className="bio-images" fluid={props.data.slideImage3.childImageSharp.fluid}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Img className="bio-images" fluid={props.data.slideImage4.childImageSharp.fluid}/>
                            </Carousel.Item>
                            {/* <Carousel.Item>
                                <Img className="bio-images" fluid={props.data.slideImage5.childImageSharp.fluid}/>
                            </Carousel.Item> */}
                        </Carousel>
                    </div>
                    <div id="lower-paragraph">
                        <p className="bio-paragraph">Around this same timeframe, DJ Soltrix developed an interest in learning how to produce and he enrolled himself into The International Academy of Design & Technology (IADT). Using the knowledge he learned, it didn't take long for David to build a small production studio in his home and start creating his own music.</p>
                            <br/>
                        <p className="bio-paragraph">In 2013, DJ Soltrix produced his first bachata remixes which included his versions to "Clocks" by Coldplay and "Young & Beautiful" by Lana Del Rey. Both projects accelerated his popularity on a worldwide scale and it wasn't until the next year, in 2014, where he discovered the Latin dance community. Upon noticing the recognition given to him from the dance world, DJ Soltrix dedicated the next couple years to doing bachata remixes only for that community. By 2015, he released his bachata remixes to "Chivalry Is Dead" by Trevor Wesley, "Invincible" by Borgeous, "Faded" by ZHU, and many more that have made him successful.</p>
                            <br/>
                        <p className="bio-paragraph">Throughout the years after and to this present day, DJ Soltrix is widely regarded as the "father of bachata remixes" amongst his peers. While he continues to travel the world to play at Latin dance music festivals and various special events, he can only hope that his crowd feels the passion and dedication he's given to the work he has provided to each dancer.</p>
                    </div>
                </div>
                <div id="bottom-image-container">
                  <Img className="bio-images" fluid={props.data.slideImage5.childImageSharp.fluid} alt="soltrix-1"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bio

export const query = graphql`
  query {
    slideImage1: file(relativePath: {eq: "Sol02.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage2: file(relativePath: {eq: "Sol03.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage3: file(relativePath: {eq: "Sol04.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage4: file(relativePath: {eq: "Sol05.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slideImage5: file(relativePath: {eq: "Sol06.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`