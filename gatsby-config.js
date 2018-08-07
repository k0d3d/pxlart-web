module.exports = {
  siteMetadata: {
    title: 'Pxlart training landing page',
    siteUrl: `https://pxlart.design`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sitemap`,
      output: `/sitemap.xml`,
    },
  ],
}
