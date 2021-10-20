import React, { useState, useEffect } from 'react'
import { FaYoutube } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import '../../styles/youtube.css'



const Remixes = () => {

    const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4VvWBKgVDCCF0n0l7PLHdzJ6'
     
        const apiKey = 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs'
        // console.log('apiKey', apiKey)
        
        const [remixData, setRemixData] = useState(null)
     
        // const getremixData = React.useRef()
     
        const getremixData = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=20&key=${apiKey}`)
            const data = await response.json()
            setRemixData(data)
            // console.log('test dataa', remixData)
        }
     
        useEffect(() => {
            getremixData()
        }, [])
    
    const loaded = () => {

        return (

            remixData.items.reverse().map(item => {
                // console.log('remix item', item)

                function skipVid(str){
                    if (item.snippet.title === 'Private video')
                        return 'null'
                }
                skipVid()
                // var privateVid = item.snippet.title

                // var removeVid = ''
                        // console.log('private vids', privateVid)
                        // return privateVid()

                    // removeVid.push(privateVid)
                    // console.log('removed vid', removeVid)
                    
                   



                return (
                    <div id="youtube-container">
                        <div className="youtube-card">
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
