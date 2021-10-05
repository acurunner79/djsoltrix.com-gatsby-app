import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'


const Singles = () => {

        // fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV&maxResults=50&key=AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs`)
        const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
        const playlistId = 'PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV'
     
        const apiKey = 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs'
        // console.log('apiKey', apiKey)
        
        const [youtubeData, setYoutubeData] = useState(null)
     
        // const getYoutubeData = React.useRef()
     
        const getYoutubeData = async () => {
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`)
            const data = await response.json()
            setYoutubeData(data)
            console.log('test data-', youtubeData)
        }
     
        useEffect(() => {
            getYoutubeData()
        }, [])

       const loaded = () => {

           return(
               youtubeData.items.map(item => {
                   console.log('item', item)
    
                   return(
                        <div>
                            <ReactPlayer 
                            url={`"https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}/>
                           <h4>{item.snippet.description}</h4>
                           {/* <h4>{youtubeData.items[1].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[2].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[3].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[4].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[5].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[6].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[7].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[8].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[9].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[10].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[11].snippet.resourceId.videoId}</h4>
                           <h4>{youtubeData.items[12].snippet.resourceId.videoId}</h4>  */}
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
