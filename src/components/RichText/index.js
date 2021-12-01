import React from 'react' 
import { Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { IoIosArrowForward } from 'react-icons/io'
import ReactPlayer from 'react-player'
import '../RichText/richtext.css'
import { Wrapper } from './style'



const RichText = ({ assetRef, raw }) => {
    // console.log('richtext prop', assetRef)
    // console.log('raw', raw)
    
    const renderOptions = { 
        renderNode: { 
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const asset = assetRef.fixed;
                // console.log('asset', assetRef.fixed.src)

            //   if ((assetRef.fixed.src).includes('//images')){
              return (
                <img id="asset-image" src={asset.src} alt={asset.title} />
              );
            //   }
            },
            [INLINES.HYPERLINK]: (node) => {
                // console.log(node)
                if ((node.data.uri).includes('youtube.com/embed')){
                    return(
                        <ReactPlayer id="blog-embedded-video" url={node.data.uri} controls={true}/>
                    )
                }
            }
        },
    }
      
 
    // const post = assetRef
    
    return (
        <Wrapper>
            {/* <img id="blog-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/> */}
            <h1 id="blog-header">SOLTRIX NEWS</h1>
            {documentToReactComponents(JSON.parse(raw), renderOptions)}
            <Link to="/blog-page">
                  <button className="button">Go Back <IoIosArrowForward size="15"/></button>
              </Link>
        </Wrapper>
    )
}

export default RichText

export const query = graphql`
    query blogData {
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