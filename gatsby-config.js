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
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['<< Array of Youtube channelIDs>>'],
        apiKey: '<< Add your Youtube api key here>>', // Optional for public requests
        maxVideos: 50 // Defaults to 50
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
