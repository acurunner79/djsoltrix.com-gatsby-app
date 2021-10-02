module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DJ Soltrix",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "bsIx7a42gJhFDv_eovFDemZbtzmrv_01Bins4-jUSOs",
        spaceId: "23el1479899l",
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJValNVWGZApSHF5bDQ5WkxsLU1iT2RGSkptM1I4Mnh6SEJTVmVKY0hoZAExuWjVPVndOajNHYjc3b1ljeEQ5NE80ZAjdUTUhicU1GaDdPTFl3SmYtUWRyR3FjYUgwRS1pMXZAGSWRCcUZAUUGk5dzNncAZDZD"
      }
    },
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
        apiKey: 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs', // Optional for public requests
        maxVideos: 50 // Defaults to 50
      },
    },
  //   {
  //     resolve: `gatsby-source-youtube-playlist`,
  //     options: {
  //         apiKey: 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs' ,
  //         channelId: 'UCPXm1RVzUIRzfqnYb0eX1sg',
  //         maxResults: 20 
  //     },
  // },
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://api.mixcloud.com/djsoltrix/cloudcasts/'
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-playlists`,
    //   options: {
    //     apiKey: 'AIzaSyC_Nk5v8pQlCJEXhXi-Qe7zy6Qt8mqBPJs'
    //   }
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
