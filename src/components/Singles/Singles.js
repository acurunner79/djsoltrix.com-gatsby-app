import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FaYoutube } from 'react-icons/fa'
import '../../styles/youtube.css'

const Singles = () => {

        const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV'
     
        const apiKey = process.env.GATSBY_YOUTUBE_APIKEY
        
        const [youtubeData, setYoutubeData] = useState(null)
     
        // const getYoutubeData = React.useRef()
     
        const getYoutubeData = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?order=videoCount&part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`)
            const data = await response.json()
            setYoutubeData(data)
            // console.log('test data-', youtubeData)
        }
     
        useEffect(() => {
            getYoutubeData()
        }, [])

        
        const loaded = () => {
            
            return(
                youtubeData.items.reverse().map((item, index )=> {
                    //    console.log('item', item)
                    
                        // if (item.snippet.title === 'Private video')
                        //     return false
            
                    
    
                   return(
                        <div id="youtube-container">
                            <div className="youtube-card" key={index}>
                                <ReactPlayer className="videoplayer"
                                url={`"https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                                controls="true"/>
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

        return youtubeData ? loaded() : loading()

}

export default Singles
