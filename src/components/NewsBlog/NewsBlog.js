import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
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
                    }
                }
            }
        }
    `)
    // console.log('newsblog', query.allContentfulBlogPost.edges[0].node.title)
    return (
        <div id="news-container">
            <div className="slider">
        <Carousel className="rounded">
          <Carousel.Item >
            <div className="news-card">
                <h4>{query.allContentfulBlogPost.edges[0].node.publishedDate}</h4>
                <h2>{query.allContentfulBlogPost.edges[0].node.title}</h2>
                <h4>{query.allContentfulBlogPost.edges[0].node.description}</h4>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-card">
                <h2>{query.allContentfulBlogPost.edges[1].node.title}</h2>
                <h4>{query.allContentfulBlogPost.edges[1].node.description}</h4>
                <h4>{query.allContentfulBlogPost.edges[1].node.publishedDate}</h4>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-card">
                <h2>{query.allContentfulBlogPost.edges[2].node.title}</h2>
                <h4>{query.allContentfulBlogPost.edges[2].node.description}</h4>
                <h4>{query.allContentfulBlogPost.edges[2].node.publishedDate}</h4>
            </div>
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-card">
                <h2>{query.allContentfulBlogPost.edges[3].node.title}</h2>
                <h4>{query.allContentfulBlogPost.edges[3].node.description}</h4>
                <h4>{query.allContentfulBlogPost.edges[3].node.publishedDate}</h4>
            </div>
              <Carousel.Caption>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
    )
}

export default NewsBlog
