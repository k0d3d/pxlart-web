module.exports = {
  siteMetadata: {
    title: 'Pxlart training landing page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,700`,
          `Bree Serif\:400`, // you can also specify font weights and styles
        ],
      },
    },
  ],
}
