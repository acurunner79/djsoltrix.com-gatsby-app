import React from 'react'
import TopNav from '../components/Nav/TopNav'
import Hamburger from '../components/Nav/Hamburger'
import { graphql } from 'gatsby'

const Events = ({props}) => {
    console.log('events props', props)

    
    return (
        <div>
            <TopNav />
            <Hamburger />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <h1>Events</h1>
            <div>
                {/* <h4>{gig}</h4> */}
            </div>
        </div>
    )
}

export default Events

// export const query = graphql`
//     query MyQuery {
//         allContentfulUpcomingGigs {
//             edges {
//                 node {
//                     contentful_id
//                     gigDate(formatString: "MMM DD YYYY")
//                     eventName
//                     eventLocation
//                     eventPage
//                 }
//             }
//         }
//     }
// `