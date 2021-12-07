const path = require(`path`)

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })


require("dotenv").config({
    path: `.env`,
  });

  // const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.djsoltrix.com",
    title: "DJ Soltrix",
    description: "David Rodriguez, known professionally as DJ Soltrix, is a Latin-American DJ and music producer from Tampa, FL."
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: path.join(__dirname, `src`, `images`), 
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        host: process.env.GATSBY_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'DJ Soltrix',
        short_name: 'Soltrix',
        start_url: '/',
        background_color: '#fff',
        display: 'standalone',
        icon: 'src/images/SOLTRIX S cropped.jpg',
      }
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
          `Karla`,
          `Josefin Sans`,
          `cursive\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-source-youtube-v3`,
    //   options: {
    //     channelId: ['UCPXm1RVzUIRzfqnYb0eX1sg'],
    //     apiKey: process.env.GATSBY_YOUTUBE_APIKEY, // Optional for public requests
    //     maxVideos: 50 // Defaults to 50
    //   },
    // },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://api.mixcloud.com/djsoltrix/cloudcasts/'
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-config',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};
