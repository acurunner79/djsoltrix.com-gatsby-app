
const path = require("path");


exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};
// import React, { useState, useEffect} from 'react'

// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems'
   
//    const playlistId = 'PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV'

//    const apiKey = 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs'
// //    console.log('apiKey', apiKey)
   
//    const [youtubeData, setYoutubeData] = useState(null)

//    const getYoutubeData = useRef()

//    getYoutubeData.current = async () => {
//        const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${playlistId}&key=${apiKey}`)
//        const data = await response.json()
//        setYoutubeData(data)
//        console.log('test data', youtubeData)
//    }

//    useEffect(() => {
//        getYoutubeData.current()
//    }, [])
// const fetch = require(`node-fetch`)

// exports.sourceNodes = async ({
//     actions: { createNode },
//     createContentDigest,
// }) => {
//     const result = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL3b1uuA7D4VtxzhUrWqyhxr2339uJ2cSV&key=AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs`)
    
//     const resultData = await result.json()
//     console.log('result datas', resultData.resourceId)

//     createNode({
//         description: resultData.description,
//         id: resultData.id,
//         internal: {
//             type: `YoutubePlaylistTest`,
//             contentDigest: createContentDigest(resultData)
//         }
//     })
// }

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const {
        data: { contentfulBlog, allContentfulBlogPost },
    } = await graphql(`
    {
        contentfulBlog {
          postPerPage
          slug
        }
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              slug
              publishedDate(formatString: "DD MMM YYYY")
              pageContent {
                raw
              }
              description
              title
              contentful_id
            }
          }
        }
      }
    `)

    allContentfulBlogPost.edges.forEach((blogPost) => {
        createPage({
            path: `${contentfulBlog.slug}/${blogPost.node.slug}`,
            context: {
                postId: blogPost.node.contentful_id,
            },
            component: path.resolve("./src/templates/BlogPost/index.js"),
        });
    });

    const numPages = Math.ceil(
        allContentfulBlogPost.edges.length / contentfulBlog.postPerPage
    );

    for (let i = 0; i < numPages; i++) {
        createPage({
            path: `${contentfulBlog.slug}${i === 0 ? "" : `/${i + 1}`}`,
            component: path.resolve(
                "./src/templates/PaginatedBlogPage/index.js"
            ),
            context: {
                blogSlug: contentfulBlog.slug,
                totalPages: numPages,
                currentPage: i + 1,
                posts: allContentfulBlogPost.edges
                    .map((blogPost) => blogPost.node)
                    .slice(
                        i * contentfulBlog.postPerPage,
                        i * contentfulBlog.postPerPage +
                            contentfulBlog.postPerPage
                    ),
            },
        });
    }
}