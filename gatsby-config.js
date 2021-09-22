module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "DJ Soltrix",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "b5wbscJA108gyPBNwG7yo7MrlFdf5eLO4ZmzSiMSzRQ",
        spaceId: "23el1479899l",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
};
