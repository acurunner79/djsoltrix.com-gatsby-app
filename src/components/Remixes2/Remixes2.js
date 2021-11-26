import React, { useState, useEffect } from 'react'
import { FaYoutube } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import '../../styles/youtube.css'



const Remixes2 = () => {

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4Vv_MP_42W-n9jv_HjfPx3-P'

        const apiKey = process.env.GATSBY_YOUTUBE_APIKEY
        
        const [remixData2, setRemixData2] = useState(null)
     
     
        const getremixData2 = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`)
            const data = await response.json()
            setRemixData2(data)
        }
     
        useEffect(() => {            
            getremixData2()
        }, [])
    
    const loaded = () => {

        return (

            remixData2.items.map((item2, index )=> {
    
                return (
                    <div id="youtube-container">
                        <div className="youtube-card" key={index}>
                            <ReactPlayer className="videoplayer"
                                url={`"https://www.youtube.com/embed/${item2.snippet.resourceId.videoId}"`}
                                // light={}
                                controls={true}/>
                            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {item2.snippet.title}</h4>
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

    return remixData2 ? loaded() : loading()
}

export default Remixes2

