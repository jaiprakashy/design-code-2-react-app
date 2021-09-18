module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `Don’t skip design. Learn design and code, by building real apps, collaborate and solving product UI problems.`,
    author: `@jaiprakash`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
