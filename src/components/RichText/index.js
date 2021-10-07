import React from 'react' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { Wrapper } from './style'



const RichText = (props, {raw, references = []}) => {
    const referencesMap = {}
    references.forEach((reference) => {
        referencesMap[reference.contentful_id] = reference
    })
    const renderOptions = {
        renderNode: {
          [INLINES.EMBEDDED_ENTRY]: (node) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "blogPost") {
              return (
                <a href={`/blog/${node.data.target.fields.slug}`}>{node.data.target.fields.title}</a>
              );
            }
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "codeBlock") {
              return (
                <pre>
                  <code>{node.data.target.fields.code}</code>
                </pre>
              );
            }
      
            if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
              return (
                <iframe
                  src={node.data.target.fields.embedUrl}
                  height="100%"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  title={node.data.target.fields.title}
                  allowFullScreen={true}
                />
              );
            }
          },
      
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            // render the EMBEDDED_ASSET as you need
            return (
              <img
                src={`https://${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.description}
              />
            );
          },
        },
      };
      
        const { post } = props;
        // console.log('propss', props.raw)

    return (
        <Wrapper>
            {documentToReactComponents(JSON.parse(raw), post.fields.body, renderOptions)}
            {/* {documentToReactComponents(post.fields.body, renderOptions)} */}
        </Wrapper>
    )
}

export default RichText