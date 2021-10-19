const path = require(`path`)

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DJ Soltrix",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      },
    },
    // {
    //   resolve: `gatsby-source-instagram-all`,
    //   options: {
    //     access_token: ""
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Orbitron`,
          `Play`,
          `Roboto`,
          `Ubuntu`,
          `cursive\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UCPXm1RVzUIRzfqnYb0eX1sg'],
        apiKey: process.env.REACT_APP_YOUTUBE_APIKEY, // Optional for public requests
        maxVideos: 50 // Defaults to 50
      },
    },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://api.mixcloud.com/djsoltrix/cloudcasts/'
        ],
      },
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "Singles",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "singles",
    //     // Url to query from
    //     url: "https://www.googleapis.com/youtube/v3/playlistItems",
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-playlists`,
    //   options: {
    //     apiKey: 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs'
    //   }
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};
