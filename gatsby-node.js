const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const {
        data: { contentfulBlog, allContentfulBlogPost, allContentfulUpcomingGigs },
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
        allContentfulUpcomingGigs {
          edges {
            node {
              contentful_id
              gigDate(formatString: "MMM DD YYYY")
              eventName
              eventLocation
              eventPage
            }
          }
        }
      }
    `)

    allContentfulUpcomingGigs.edges.map((gig) => {
        createGig({
            path: "/events",
            context: {
                gigId: gig.node.contentful_id,
            },
            component: path.resolve("./src/pages/events.js")
        })
    })

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