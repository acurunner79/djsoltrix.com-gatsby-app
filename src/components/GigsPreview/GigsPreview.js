import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../../styles/gigspreview.css'

const GigsPreview = () => {
    const query = useStaticQuery(graphql`
        query gigsPreview {
            allContentfulUpcomingGigs(sort: {order: ASC, fields: gigDate}) {
                edges {
                    node {
                    gigDate(formatString: "MMM DD YYYY")
                    gigMonth
                    gigDay
                    gigYear
                    eventName
                    eventLocation
                    eventPage
                    }
                }
            }
        }
    `)
    // console.log('gigs query', query)
    return (
        <>
        <div id="labels">
            <h4>DATE</h4>
            <h4>EVENT</h4>
            {/* <h4 id="page-label-hide">PAGE</h4> */}
        </div>
        <div id="gig-label-border"></div>
        <div id="gig-preview-card">
            <div id="calendar-container">
                <div id="event-calendar-template">
                    <h5 id="calendar-month">{query.allContentfulUpcomingGigs.edges[0].node.gigMonth}</h5>
                    <h4 id="calendar-day">{query.allContentfulUpcomingGigs.edges[0].node.gigDay}</h4>
                    <h4 id="calendar-year">{query.allContentfulUpcomingGigs.edges[0].node.gigYear}</h4>
                </div>
            </div>
            {/* <div className="dates">
                <h4>{query.allContentfulUpcomingGigs.edges[0].node.gigDate}</h4>
            </div> */}
            <div className="event-details">
                <h4 className="event-name">{query.allContentfulUpcomingGigs.edges[0].node.eventName}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[0].node.eventLocation}</h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[0].node.eventPage}>View</a></h4>
            </div>
        </div>
        <div className="gig-preview-border"></div>
        <div id="gig-preview-card">
            <div id="calendar-container">
                <div id="event-calendar-template">
                    <h5 id="calendar-month">{query.allContentfulUpcomingGigs.edges[1].node.gigMonth}</h5>
                    <h4 id="calendar-day">{query.allContentfulUpcomingGigs.edges[1].node.gigDay}</h4>
                    <h4 id="calendar-year">{query.allContentfulUpcomingGigs.edges[1].node.gigYear}</h4>
                </div>
            </div>
            {/* <div className="dates">
            <h4>{query.allContentfulUpcomingGigs.edges[1].node.gigDate}</h4>
            </div> */}
            <div className="event-details">
                <h4>{query.allContentfulUpcomingGigs.edges[1].node.eventName}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[1].node.eventLocation}</h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[1].node.eventPage}>View</a></h4>
            </div>
        </div>
        <div className="gig-preview-border"></div>
        <div id="gig-preview-card">
            <div id="calendar-container">
                <div id="event-calendar-template">
                    <h5 id="calendar-month">{query.allContentfulUpcomingGigs.edges[2].node.gigMonth}</h5>
                    <h4 id="calendar-day">{query.allContentfulUpcomingGigs.edges[2].node.gigDay}</h4>
                    <h4 id="calendar-year">{query.allContentfulUpcomingGigs.edges[2].node.gigYear}</h4>
                </div>
            </div>
            {/* <div className="dates">
            <h4>{query.allContentfulUpcomingGigs.edges[2].node.gigDate}</h4>
            </div> */}
            <div className="event-details">
                <h4>{query.allContentfulUpcomingGigs.edges[2].node.eventName}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[2].node.eventLocation}</h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[2].node.eventPage}>View</a></h4>
            </div>
        </div>
        <div className="gig-preview-border"></div>
        <div id="gig-preview-card">
        <div id="calendar-container">
                <div id="event-calendar-template">
                    <h5 id="calendar-month">{query.allContentfulUpcomingGigs.edges[3].node.gigMonth}</h5>
                    <h4 id="calendar-day">{query.allContentfulUpcomingGigs.edges[3].node.gigDay}</h4>
                    <h4 id="calendar-year">{query.allContentfulUpcomingGigs.edges[3].node.gigYear}</h4>
                </div>
            </div>
            {/* <div className="dates">
            <h4>{query.allContentfulUpcomingGigs.edges[3].node.gigDate}</h4>
            </div> */}
            <div className="event-details">
                <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventName}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventLocation}</h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[3].node.eventPage}>View</a></h4>
            </div>
        </div>
        </>
            /* <div id="gig-dates">
            <h4 className="labels">DATE</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.gigDate}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.gigDate}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.gigDate}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[3].node.gigDate}</h4>
            </div>
            <div id="event-name">
            <h4 className="labels">EVENT</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.eventName}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.eventName}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.eventName}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventName}</h4>
            </div>
            <div id="event-location">
            <h4 className="labels">LOCATION</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[0].node.eventLocation}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[1].node.eventLocation}</h4>
                <h4 className="dates">{query.allContentfulUpcomingGigs.edges[2].node.eventLocation}</h4>
                <h4>{query.allContentfulUpcomingGigs.edges[3].node.eventLocation}</h4>
            </div>
            <div id="event-link">
            <h4 className="labels">DETAILS</h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[0].node.eventPage}>View</a></h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[1].node.eventPage}>View</a></h4>
                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[2].node.eventPage}>View</a></h4>
                <h4><a target="_blank" rel="noreferrer" href={query.allContentfulUpcomingGigs.edges[3].node.eventPage}>Event Page</a></h4>
            </div> */
    )
}

export default GigsPreview
