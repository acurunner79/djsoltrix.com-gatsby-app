import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../../styles/gigspreview.css'

const UpcomingGigs = () => {
    const query = useStaticQuery(graphql`
        query gigs {
            allContentfulUpcomingGigs(sort: {order: ASC, fields: gigDate}) {
                nodes {
                    gigDate(formatString: "MMM DD YYYY")
                    eventName
                    eventLocation
                    eventPage
                    gigMonth
                    gigDay
                    gigYear
                }
            }
        }
    `)
    // console.log('gigs querys', query)

    return (
        query.allContentfulUpcomingGigs.nodes.map((gig, index)=> {
            // console.log('gigs', gig)
                    

            return (
                <>
                    <div id="event-container">
                        {/* <div id="gig-label-border"></div> */}
                        <div id="gig-preview-card" key={index}>
                            <div id="calendar-container">
                                <div id="event-calendar-template">
                                    <h5 id="calendar-month">{gig.gigMonth}</h5>
                                    <h4 id="calendar-day">{gig.gigDay}</h4>
                                    <h4 id="calendar-year">{gig.gigYear}</h4>
                                </div>
                            </div>
                            {/* <div className="dates">
                                <h4>{gig.gigDate}</h4>
                            </div> */}
                            <div className="event-details">
                                <h4>{gig.eventName}</h4>
                                <h4>{gig.eventLocation}</h4>
                                <h4 className="eventpage-link"><a target="_blank" rel="noreferrer" href={gig.eventPage}>View</a></h4>
                            </div>
                        </div>
                        <div className="gig-preview-border"></div>
                    </div>
                </>
            )
        })
    )
}

export default UpcomingGigs
