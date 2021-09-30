import React from 'react' 
import { graphql } from 'gatsby'
// import Layout from '../../components/Layout/index'
import RichText from '../../components/RichText/index'
import Seo from '../../components/Seo/index'
import Hamburger from '../../components/Nav/Hamburger'
import TopNav from '../../components/Nav/TopNav'
import { BlogContent } from '../BlogPost/style'


const BlogPost = (props) => {
    console.log("blog post prop", props)
    return (
        // <Layout>
        <>
            <Seo 
                title={props.data.contentfulBlogPost.title} 
                description={props.data.contentfulBlogPost.description}
                />
                <TopNav />
                <Hamburger />
            <BlogContent>
                <RichText raw={props.data.contentfulBlogPost.pageContent.raw}/>
            </BlogContent>
        </>
        // </Layout>
    )
}

export const query = graphql`
    query BlogPostQuery($postId: String) {
    contentfulBlogPost(contentful_id: {eq: $postId}) {
        publishedDate(formatString: "MMM DD YYYY")
            pageContent {
                raw
            }
            description
            title
            contentful_id
            slug
        }
    }
`


export default BlogPost