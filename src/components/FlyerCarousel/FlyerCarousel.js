import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'
import '../../styles/flyer.css'


const FlyerCarousel = () => {
    const query = useStaticQuery(graphql`
        query flyers {
            allContentfulFlyer {
                nodes {
                    id
                    flyerTitle
                    imageLink {
                        fixed {
                            src
                        }
                    }
                }
            }
        }
    `)

    const flyerData = query.allContentfulFlyer.nodes

    const loaded = () => {

        return (
            <div>
                <Carousel>
                    {    
                        query.allContentfulFlyer.nodes.map(flyer => {
                            return (
                                <Carousel.Item key={flyer.id}>
                                    <img id="flyer-image" src={flyer.imageLink.fixed.src} alt={flyer.flyerTitle}/>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
    const loading = () => {
        return
            <></>
    }

    return flyerData.length > 0 ? loaded() : loading()
}

export default FlyerCarousel
