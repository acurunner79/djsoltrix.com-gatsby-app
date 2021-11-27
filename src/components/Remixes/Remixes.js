import React, { useState, useEffect } from 'react'
import { FaYoutube } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import '../../styles/youtube.css'



const Remixes = () => {

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4VuQEMqwjfn8UPVefAIydrWO'

        const apiKey = process.env.GATSBY_YOUTUBE_APIKEY
        
        const [remixData, setRemixData] = useState(null)
     
     
        const getremixData = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`)
            const data = await response.json()
            setRemixData(data)
        }
     
        useEffect(() => {
            getremixData()  
        }, [])
    
    const loaded = () => {

        return (

            remixData.items.map((item, index )=> {
                console.log('test-data', item)
    
                return (
                    <div id="youtube-container">
                        <div className="youtube-card" key={index}>
                            <ReactPlayer className="videoplayer"
                                url={`"https://www.youtube.com/embed/${item.snippet.resourceId.videoId}"`}
                                light={item?.snippet?.thumbnails?.high?.url}
                                controls={true}/>
                            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {item.snippet.title}</h4>
                        </div>
                    </div>
                )
            })
        )
    }
    const loading = () => {
        return(
            <h1>Loading</h1>
        )
    }

    return remixData ? loaded() : loading()
}

export default Remixes
