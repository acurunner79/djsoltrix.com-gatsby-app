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
    console.log('youtube prop', query)

    return (
        <div id="youtube-container">
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/playlist?list=PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV${query.allYoutubeVideo.edges[0].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[0].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[0].node.title}</h4>
            </div>
            {/* <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/playlist?list=PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV${query.allYoutubeVideo.edges[0].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[0].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[0].node.title}</h4>
            </div>
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[1].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[1].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[1].node.title}</h4>
            </div> 
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[2].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[2].node.title}</h4>
            </div> 
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[3].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[3].node.title}</h4>
            </div>
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[4].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[4].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[5].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[5].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[6].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[6].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[7].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[7].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[8].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[8].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[9].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[9].node.title}</h4>
            </div>         
            <div className="youtube-card">
                <ReactPlayer className="videoplayer"
                    url={`"https://www.youtube.com/embed/${query.allYoutubeVideo.edges[10].node.videoId}"`}
                    light={query.allYoutubeVideo.edges[2].node.thumbnail.url}
                    controls="true"/>
                <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {query.allYoutubeVideo.edges[10].node.title}</h4>
            </div>          */}

        </div>
    )
}

export default Youtube
