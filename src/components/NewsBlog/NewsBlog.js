import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Carousel from 'react-bootstrap/Carousel'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/newsblog.css'

const NewsBlog = () => {
    const query = useStaticQuery(graphql`
        query news {
            allContentfulBlogPost {
                edges {
                node {
                    title
                    description
                    publishedDate(formatString: "MMM DD YYYY")
                        blogPostThumbnail {
                            fixed {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)
    // console.log('newsblog', query.allContentfulBlogPost.edges[0].node.title)
    return (
        <div id="news-container">
            <h1 id="gig-header">NEWS</h1>
            <div className="slider">
        <Carousel className="rounded">
          <Carousel.Item >
                    <div className="news-card">
                        <div id="main-text-container">
                            <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[0].node.title}</h2>
                            <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[0].node.description}</h4>
                        </div>
                        <div id="image-card">
                            <img id="thumbnail" src={query.allContentfulBlogPost.edges[0].node.blogPostThumbnail.fixed.src} alt=""/>
                        </div>
                    </div>
                {/* <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[0].node.publishedDate}</h4> */}
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-card">
                <div id="main-text-container">
                    <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[1].node.title}</h2>
                    <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[1].node.description}</h4>
                </div>
                <div id="image-card">
                    <img id="thumbnail" src={query.allContentfulBlogPost.edges[1].node.blogPostThumbnail.fixed.src} alt=""/>
                </div>
            </div>
            <Carousel.Caption>
                {/* <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[1].node.publishedDate}</h4> */}

            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <div className="news-card">
                <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[2].node.title}</h2>
                <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[2].node.description}</h4>
                <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[2].node.publishedDate}</h4>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-card">
                <h2 className="newsblog-title">{query.allContentfulBlogPost.edges[3].node.title}</h2>
                <h4 className="newsblog-descr">{query.allContentfulBlogPost.edges[3].node.description}</h4>
                <h4 className="newsblog-date">{query.allContentfulBlogPost.edges[3].node.publishedDate}</h4>
            </div>
              <Carousel.Caption>
              </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
        </div>
        </div>
    )
}

export default NewsBlog
