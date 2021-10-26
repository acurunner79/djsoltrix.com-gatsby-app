import React, { useState, useEffect } from 'react'
import { FaYoutube } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import '../../styles/youtube.css'



const Remixes = () => {

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4VvWBKgVDCCF0n0l7PLHdzJ6'

        const apiKey = process.env.GATSBY_YOUTUBE_APIKEY
     
        // console.log('apiKey', apiKey)
        
        const [remixData, setRemixData] = useState(null)
     
        // const getremixData = React.useRef()
     
        const getremixData = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=20&key=${apiKey}`)
            const data = await response.json()
            setRemixData(data)
            console.log('test dataa', remixData)
        }
     
        useEffect(() => {
            getremixData()
        }, [])
    
    const loaded = () => {

        return (

            remixData.items.reverse().map((item, index )=> {
                // console.log('remix items', item)

                // const skipVid = item.filter() => {
                //     if (skipVid === 'Private video'){
                //         return false
                //     }

                // }
                  
                    // var privateVid = item.snippet.title
                    // var removedVid = ''
                    // if (privateVid === 'Private video')
                    // console.log('private indexs',privateVid)
                    // console.log(privateVid.pop())
                    // privateVid.nextVideo()
                    // console.log('privateVid removed', removedVid)
                        // return privateVid
                
                // skipVid()
               


                return (
                    <div id="youtube-container">
                        <div className="youtube-card" key={index}>
                            <ReactPlayer className="videoplayer"
                                url={`"https://www.youtube.com/embed/${item.snippet.resourceId.videoId}"`}
                                // light={}
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

    return remixData ? loaded() : loading()
}

export default Remixes
