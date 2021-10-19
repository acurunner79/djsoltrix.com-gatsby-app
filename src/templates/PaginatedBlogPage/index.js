import React from 'react' 
// import Layout from '../../components/Layout/index'
import { Link } from 'gatsby'
import Hamburger from '../../components/Nav/Hamburger'
import TopNav from '../../components/Nav/TopNav'
import Footer from '../../components/Footer/Footer'
import { Content, Post, Pagination } from './style'



const PaginatedBlogPage = ({pageContext}) => {
    console.log('paginated',pageContext)
    return (
        // <Layout>
            <>
            <Hamburger />
            <TopNav />
            <img id="upper-logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1632361562/DJSoltrixWhite_ojfett.png"/>
            <Content>
                <h2 id="blog-header">SOLTRIX NEWS</h2>
                {pageContext.posts.map((post, index) => (
                    <Post key={post.contentful_id}>
                        <div key={index}>
                            <Link to={`/${pageContext.blogSlug}/${post.slug}`}><p id="blog-title">{post.title}</p></Link>
                        </div>
                        <div>{post.description}</div>
                        <div>
                            <small>
                                {post.publishedDate}
                            </small>
                        </div>
                    </Post>
                ))}
            </Content>
            <Pagination>
                {Array.from({length: pageContext.totalPages}).map((n, i) => {
                    return (
                        <Link to={`/${pageContext.blogSlug}/${i === 0 ? '' : i + 1}`}>
                            {i + 1}
                        </Link>
                    )
                })}
            </Pagination>
            <Footer />
            </>
        // </Layout>
    )
}


export default PaginatedBlogPage