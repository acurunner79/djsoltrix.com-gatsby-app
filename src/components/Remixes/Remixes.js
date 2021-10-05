import React from 'react'
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
            const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`)
            const data = await response.json()
            setRemixData(data)
            console.log('test data-', remixData)
        }
     
        useEffect(() => {
            getremixData()
        }, [])
    
    const loaded = () => {

        return (

            remixData.items.map(item => {

                return (
                    <div id="youtube-container">
                        <div className="youtube-card">
                            <ReactPlayer className="videoplayer"
                                url={`"https://www.youtube.com/embed/playlist?list=PL3b1uuA7D4VvWBKgVDCCF0n0l7PLHdzJ6${videoId}"`}
                                light={}
                                controls="true"/>
                            <h4 className="youtube-titles"><FaYoutube color="red" size="25"/> {}</h4>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Remixes
