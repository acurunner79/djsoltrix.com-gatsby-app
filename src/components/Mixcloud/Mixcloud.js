import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import ReactPlayer from 'react-player'
import { SiMixcloud } from 'react-icons/si'
import '../../styles/mixcloud.css'

const Mixcloud = () => {
    const query = useStaticQuery(graphql`
         query cloudcasts {
            allRestApiDjsoltrixCloudcasts {
                nodes {
                    data {
                        url
                        created_time
                        audio_length
                        key
                        name
                        play_count
                        slug
                    }
                }
            }
        }
    `)
    // console.log('mixcloud querys', query.allRestApiDjsoltrixCloudcasts.nodes[0].data[0])
    return (
        <div id="mixcloud-container">
            
            <h2>Mixcloud <SiMixcloud size="30"/></h2>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[0].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[1].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[2].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[3].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[4].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[5].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[6].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[7].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[8].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[9].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[10].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[11].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[12].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[13].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[14].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[15].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[16].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[17].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[18].url} controls/>
            <ReactPlayer className="cloudcast-player" url={query.allRestApiDjsoltrixCloudcasts.nodes[0].data[19].url} controls/>
        </div>
    )
}

export default Mixcloud
