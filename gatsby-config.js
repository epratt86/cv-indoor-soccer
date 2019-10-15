/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chula Vista Indoor Soccer",
    description:
      "Chula Vista Indoor Soccer provides a premium indoor soccer facility in San Diego County.",
    author: "Eric Pratt",
    siteUrl: "https://www.cvindoor.com",
    keywords: "soccer, Chula Vista, indoor soccer, san diego",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          "https://gmail.us20.list-manage.com/subscribe/post?u=0064e5f2c81f9a9897dab1e49&amp;id=cda5e761aa",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.cvindoor.com",
        sitemap: "https://www.cvindoor.com/sitemap.xml",
        policity: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}
