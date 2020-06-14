module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter Lite Plus`,
    description: `🧹 A Gatsby.js starter based on the default starter without the boilerplate.`,
    author: `AJ Clemente`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    }
  ],
}
