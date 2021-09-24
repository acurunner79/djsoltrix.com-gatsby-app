import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaYoutube } from 'react-icons/fa'
import ReactPlayer from 'react-player'
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
            <div className="youtube-card">
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[0].node.title}</h4>
                {/* <img className="" src={query.allYoutubeVideo.edges[0].node.thumbnail.url}/> */}
                <ReactPlayer 
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[0].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[0].node.thumbnail.url}
                    controls="true"/>
            </div>            
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[1].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[2].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[3].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[4].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[5].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[6].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[7].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[8].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[9].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[10].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[11].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[12].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[13].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[14].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[15].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[16].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[17].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[18].node.title}</h4>
            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[19].node.title}</h4>
        </div>
    )
}

export default Youtube
