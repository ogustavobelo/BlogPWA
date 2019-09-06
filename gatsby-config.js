require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `Gustavo Belo`,
    position: `Frontend Developer`,
    description: `A blog about frontend development and other geek stuff.`,
    author: `@ogustavobelo`,
    siteUrl: 'https://ogustavobelo.netlify.com/',
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // esse plugin precisa ser o primeiro para funcionar com o gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          // PrismJS sempre precisa ser o último plugin
          `gatsby-remark-prismjs`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, 
        queries,
        chunkSize: 10000, 
        enablePartialUpdates: true, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Projeto Fluxo Blog`,
        short_name: `Fluxo`,
        start_url: `/`,
        background_color: `#16202C`,
        theme_color: `#16202C`,
        display: `minimal-ui`,
        icon: `static/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
