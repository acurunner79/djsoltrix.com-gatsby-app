import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from 'react-player'
import '../../styles/instagram.css'

const Instagram = () => {
    const query = useStaticQuery(graphql`
         query instagram {
            allInstagramContent {
                edges {
                    node {
                    caption
                    media_type
                    media_url
                    timestamp(formatString: "MMM DD YYYY")
                    username
                    }
                }
            }
        }
    `)
    console.log('instagr props', query)
    return (
        

        <div id="instagram-container">
            <Carousel className="rounded">
                <Carousel.Item>
                    <div className="insta-card">
                        <h4>{query.allInstagramContent.edges[0].node.username}</h4>
                        <img className="insta-image" src={query.allInstagramContent.edges[0].node.media_url}/>
                        <ReactPlayer url={query.allInstagramContent.edges[0].node.media_url } controls="true"/>

                        <h4>{query.allInstagramContent.edges[0].node.caption}</h4>
                        <h4>{query.allInstagramContent.edges[0].node.timestamp}</h4>
                    </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="insta-card">
                        <img className="insta-image" src={query.allInstagramContent.edges[1].node.media_url  }/>
                        <h4>{query.allInstagramContent.edges[1].node.caption}</h4>
                        <h4>{query.allInstagramContent.edges[1].node.timestamp}</h4>
                        <h4>{query.allInstagramContent.edges[1].node.username}</h4>
                    </div>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="insta-card">
                        <img className="insta-image" src={query.allInstagramContent.edges[2].node.media_url}/>
                        <h4>{query.allInstagramContent.edges[2].node.caption}</h4>
                        <h4>{query.allInstagramContent.edges[2].node.timestamp}</h4>
                        <h4>{query.allInstagramContent.edges[2].node.username}</h4>
                    </div>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="insta-card">
                        <img className="insta-image" src={query.allInstagramContent.edges[3].node.media_url}/>
                        <h4>{query.allInstagramContent.edges[3].node.caption}</h4>
                        <h4>{query.allInstagramContent.edges[3].node.timestamp}</h4>
                        <h4>{query.allInstagramContent.edges[3].node.username}</h4>
                    </div>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="insta-card">
                        <img className="insta-image" src={query.allInstagramContent.edges[4].node.media_url}/>
                        <h4>{query.allInstagramContent.edges[4].node.caption}</h4>
                        <h4>{query.allInstagramContent.edges[4].node.timestamp}</h4>
                        <h4>{query.allInstagramContent.edges[4].node.username}</h4>
                    </div>
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="insta-card"></div>
            <div className="insta-card"></div>
        </div>
    )
}

export default Instagram
