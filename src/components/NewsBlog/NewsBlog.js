import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/newsblog.css'

const NewsBlog = () => {
    const query = useStaticQuery(graphql`
        query news {
            allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}){
                edges {
                node {
                    title
                    description
                    slug
                    publishedDate(formatString: "MMM DD YYYY")
                        blogPostThumbnail {
                            url
                        }
                    }
                }
            }
        }
    `)

    const link1 = `/blog-page/${query.allContentfulBlogPost.edges[0].node.slug}`
    const link2 = `/blog-page/${query.allContentfulBlogPost.edges[1].node.slug}`
    const link3 = `/blog-page/${query.allContentfulBlogPost.edges[2].node.slug}`
    const link4 = `/blog-page/${query.allContentfulBlogPost.edges[3].node.slug}`
    console.log('thumbnail url', query.allContentfulBlogPost.edges[0].node.blogPostThumbnail.url)
    return (
        <div id="news-container">
            <h1 id="gig-header">NEWS</h1>
            <div className="slider">
                <Carousel className="rounded">
                    <Carousel.Item >
                        <div className="news-card">
                            <div id="main-text-container">
                                <Link to={link1}>
                                    <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[0].node.title}</h2>
                                    <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[0].node.description}</h4>
                                </Link>
                            </div>
                            <div id="image-card">
                                <img id="thumbnail" src={query.allContentfulBlogPost.edges[0].node.blogPostThumbnail.url} alt=""/>
                            </div>
                        </div>
                {/* <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[0].node.publishedDate}</h4> */}
                    <Carousel.Caption>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-card">
                            <div id="main-text-container">
                                <Link to={link2}>
                                    <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[1].node.title}</h2>
                                    <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[1].node.description}</h4>
                                </Link>
                            </div>
                            <div id="image-card">
                                <img id="thumbnail" src={query.allContentfulBlogPost.edges[1].node.blogPostThumbnail.url} alt=""/>
                            </div>
                        </div>
                    <Carousel.Caption>
                {/* <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[1].node.publishedDate}</h4> */}

                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-card">
                            <div id="main-text-container">
                                <Link to={link3}>
                                    <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[2].node.title}</h2>
                                    <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[2].node.description}</h4>
                                </Link>
                            </div>
                            <div id="image-card">
                                <img id="thumbnail" src={query.allContentfulBlogPost.edges[2].node.blogPostThumbnail.url} alt=""/>
                            </div>
                        </div>
                    <Carousel.Caption>

                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="news-card">
                            <div id="main-text-container">
                                <Link to={link4}>
                                    <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[3].node.title}</h2>
                                    <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[3].node.description}</h4>
                                </Link>
                            </div>
                            <div id="image-card">
                                <img id="thumbnail" src={query.allContentfulBlogPost.edges[3].node.blogPostThumbnail.url} alt=""/>
                            </div>
                        </div>
                    <Carousel.Caption>
                {/* <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[3].node.publishedDate}</h4> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default NewsBlog
