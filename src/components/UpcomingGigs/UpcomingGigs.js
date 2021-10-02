import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const UpcomingGigs = () => {
    const query = useStaticQuery(graphql`
        query gigs {
            allContentfulUpcomingGigs {
                nodes {
                    id
                    eventLocation
                    eventName
                    eventPage
                    gigDate
                }
            }
        }
    `)
    console.log('gigs query', query)

    return (
        query.allContentfulUpcomingGigs.nodes.map(gig => {
            console.log('gigs', gig)

            return (
                <div>
                    <h4>{gig.gigDate}</h4>
                    <h4>{gig.eventLocation}</h4>
                    <h4>{gig.eventName}</h4>
                    <h4><a target="_blank" rel="noreferrer" href={gig.eventPage}>Event Page</a></h4>
                </div>
            )
        })
    )
}

export default UpcomingGigs
