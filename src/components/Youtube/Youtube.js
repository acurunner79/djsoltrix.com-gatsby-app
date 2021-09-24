import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaYoutube } from 'react-icons/fa'
import '../../styles/youtube.css'



const Youtube = () => {
    const query = useStaticQuery(graphql`
         query videos {
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
    `)
    // console.log('youtube props', query.allYoutubeVideo.edges[0].node.title)
    return (
        <div id="youtube-container">
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[0].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[1].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[2].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[3].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[4].node.title}</h4>
        </div>
    )
}

export default Youtube
