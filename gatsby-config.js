module.exports = {
  siteMetadata: {
    title: "Erich Florow",
    author: "Hunter Chang, elvispressler",
    description: "presentation of elvis"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/ef.png', // This path is relative to the root of the site.
      },


    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
