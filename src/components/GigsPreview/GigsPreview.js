import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../../styles/gigspreview.css'

const GigsPreview = () => {
    const query = useStaticQuery(graphql`
        query gigsPreview {
            allContentfulUpcomingGigs {
                edges {
                    node {
                        gigDate(formatString: "MMM DD ")
                        eventLocation
                        eventName
                        eventPage
                    }
                }
            }
        }
    `)
    console.log('gigs query', query)
    return (
        <div id="gig-preview-container">
            <div id="gig-dates">
            <h4 className="labels">DATE</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.gigDate}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.gigDate}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.gigDate}</h4>
                {/* <h4>{query.allContentfulUpcomingGigs.edges[3].node.gigDate}</h4> */}
            </div>
            <div id="event-name">
            <h4 className="labels">EVENT</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.eventName}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.eventName}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.eventName}</h4>
                {/* <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventName}</h4> */}
            </div>
            <div id="event-location">
            <h4 className="labels">LOCATION</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.eventLocation}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.eventLocation}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.eventLocation}</h4>
                {/* <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventLocation}</h4> */}
            </div>
            <div id="event-link">
            <h4 className="labels">DETAILS</h4>
                <h4><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[0].node.eventPage}>Event Page</a></h4>
                <h4><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[1].node.eventPage}>Event Page</a></h4>
                <h4><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[2].node.eventPage}>Event Page</a></h4>
                {/* <h4><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[3].node.eventPage}>Event Page</a></h4> */}
            </div>
        </div>
    )
}

export default GigsPreview
