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
    // {
    //   resolve: 'gatsby-source-rest-api',
    //   options: {
    //     endpoints: [
    //       'https://www.mixcloud.com/oauth/access_token?client_id=9S8q55srmPpWCuJEjg&redirect_uri=djsoltrix&client_secret=LhMxxNT5sceNq3ZZaCUXUusPyGjKx4nm&code=OAUTH_CODE'
    //     ],
    //   },
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
