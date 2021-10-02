import React from 'react' 
// import Layout from '../../components/Layout/index'
import { Link } from 'gatsby'
import Hamburger from '../../components/Nav/Hamburger'
import TopNav from '../../components/Nav/TopNav'
import { Content, Post, Pagination } from './style'



const PaginatedBlogPage = ({pageContext}) => {
    console.log('paginated',pageContext)
    return (
        // <Layout>
            <>
            <Hamburger />
            <TopNav />
            <Content>
                <h1 id="blog-header">Soltrix News</h1>
                {pageContext.posts.map((post) => (
                    <Post key={post.contentful_id}>
                        <div>
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
            </>
        // </Layout>
    )
}


export default PaginatedBlogPage