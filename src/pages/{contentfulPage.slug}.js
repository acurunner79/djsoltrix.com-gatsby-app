import React from 'react'
import { RichText } from '../components/RichText'
import { graphql } from 'gatsby'

const ContentfulPage = (props) => {
    console.log('slug props', props)
    return (
        <div>
            {!!props.data.contentfulPage.pageContent && (
                <RichText 
                    references={props.data.contentfulPage.pageContent.references} 
                    raw={props.data.contentfulPage.pageContent.raw}
                />
            )}
        </div>
    )
}

export const query = graphql`
    query Data {
        allContentfulBlogPost {
            edges {
                node {
                    id
                    pageContent {
                    raw
                        references {
                            ... on ContentfulAsset{
                                __typename
                                contentful_id
                                fixed (width: 1600) {
                                    width
                                    height
                                    src
                                    srcSet
                                }
                            }
                            description
                            title
                        }
                    }
                    description
                    title           
                    pageContent {
                    raw
                        references {
                            ... on ContentfulAsset{
                                __typename
                                contentful_id
                                fixed (width: 1600) {
                                    width
                                    height
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
 `

export default ContentfulPage
