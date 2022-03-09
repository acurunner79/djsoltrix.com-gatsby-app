import React from 'react' 
import { Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { IoIosArrowForward } from 'react-icons/io'
import ReactPlayer from 'react-player'
import '../RichText/richtext.css'
import { Wrapper } from './style'



const RichText = ({ assetRef, raw }) => {
    console.log('richtext prop', assetRef)
    console.log('raw', raw)
    
    const renderOptions = { 
        renderNode: { 
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = assetRef.fixed;

              return (
                <img id="asset-image" src={asset.src} alt={asset.title} />
              );
            },
            [INLINES.HYPERLINK]: (node) => {
                if ((node.data.uri).includes('youtube.com/embed')){
                    return(
                        <ReactPlayer id="blog-embedded-video" url={node.data.uri} controls={true}/>
                    )
                } else {
                    // console.log(node)
                    return <a target="_blank" rel="noreferrer" href={node.data.uri}>{node.content[0].value}</a>
                }
            }
        },
    }
    
    return (
        <Wrapper>
            <h1 id="blog-header">NEWS</h1>
            {documentToReactComponents(JSON.parse(raw), renderOptions)}
            <Link to="/blog-page">
                  <button className="button">Go Back <IoIosArrowForward size="15"/></button>
              </Link>
        </Wrapper>
    )
}

export default RichText

// export const query = graphql`
//     query blogData {
//         allContentfulBlogPost {
//             edges {
//                 node {
//                     id
//                     pageContent {
//                     raw
//                         references {
//                             ... on ContentfulAsset{
//                                 __typename
//                                 contentful_id
//                                 fixed (width: 1600) {
//                                     width
//                                     height
//                                     src
//                                     srcSet
//                                 }
//                             }
//                             description
//                             title
//                         }
//                     }
//                     description
//                     title           
//                     pageContent {
//                     raw
//                         references {
//                             ... on ContentfulAsset{
//                                 __typename
//                                 contentful_id
//                                 fixed (width: 1600) {
//                                     width
//                                     height
//                                     src
//                                     srcSet
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     } 
// `