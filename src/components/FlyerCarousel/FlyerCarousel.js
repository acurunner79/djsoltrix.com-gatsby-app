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
                        id
                        publicUrl
                            url
                    }
                }
            }
        }
    `)
    const flyerData = query.allContentfulFlyer.nodes
    console.log('image link', flyerData)
    
    const loaded = () => {
        
        return (
            <div>
                <Carousel>
                    {    
                        query.allContentfulFlyer.nodes.map(flyer => {
                            console.log('mapped image', flyer)
                            return (
                                <Carousel.Item key={flyer.id}>
                                    <img id="flyer-image" src={flyer.imageLink.url} alt={flyer.flyerTitle}/>
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
