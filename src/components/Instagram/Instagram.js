import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ReactPlayer from 'react-player'
import '../../styles/instagram.css'

const Instagram = () => {
    const query = useStaticQuery(graphql`
         query instagram {
            allInstagramContent {
                edges {
                    node {
                    caption
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
            <div className="insta-card">
                {/* <h4>{query.allInstagramContent.edges[0].node.username}</h4> */}
                <img className="insta-image" src={query.allInstagramContent.edges[0].node.media_url }/>
                <h4>{query.allInstagramContent.edges[0].node.caption}</h4>
                <h4>{query.allInstagramContent.edges[0].node.timestamp}</h4>
            </div>
            <div className="insta-card">
                <img className="insta-image" src={query.allInstagramContent.edges[1].node.media_url  }/>
                <h4>{query.allInstagramContent.edges[1].node.caption}</h4>
                <h4>{query.allInstagramContent.edges[1].node.timestamp}</h4>
                {/* <h4>{query.allInstagramContent.edges[1].node.username}</h4> */}
            </div>
            <div className="insta-card">
                <img className="insta-image" src={query.allInstagramContent.edges[2].node.media_url}/>
                <h4>{query.allInstagramContent.edges[2].node.caption}</h4>
                <h4>{query.allInstagramContent.edges[2].node.timestamp}</h4>
                {/* <h4>{query.allInstagramContent.edges[2].node.username}</h4> */}
            </div>
            <div className="insta-card">
                <img className="insta-image" src={query.allInstagramContent.edges[3].node.media_url}/>
                <h4>{query.allInstagramContent.edges[3].node.caption}</h4>
                <h4>{query.allInstagramContent.edges[3].node.timestamp}</h4>
                {/* <h4>{query.allInstagramContent.edges[3].node.username}</h4> */}
            </div>
            <div className="insta-card">
                <img className="insta-image" src={query.allInstagramContent.edges[4].node.media_url}/>
                <h4>{query.allInstagramContent.edges[4].node.caption}</h4>
                <h4>{query.allInstagramContent.edges[4].node.timestamp}</h4>
                {/* <h4>{query.allInstagramContent.edges[4].node.username}</h4> */}
            </div>
            <div className="insta-card"></div>
            <div className="insta-card"></div>
        </div>
    )
}

export default Instagram
