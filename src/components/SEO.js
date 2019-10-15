import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/thumbnail.jpg"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `)

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      <html lang="en" />
      <meta name="description" content={`${description}`} />
      <meta
        name="og:title"
        property="og:title"
        content={`${title} | ${data.site.siteMetadata.title}`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={`${description}`}
      />
      <meta
        name="og:url"
        property="og:url"
        content={`${data.site.siteMetadata.siteUrl}`}
      />
      <meta name="og:image" property="og:image" content={img} />
      <meta keywords={`${data.site.siteMetadata.keywords}`} />
      <meta property="og:site_name" content="Chula Vista Indoor Soccer" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={`${title}`}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={`${description}`}
      />
      <meta name="twitter:image" property="twitter:image" content={img} />
      <meta name="twitter:image:alt" content="Chula Vista Indoor Soccer" />
      <meta name="twitter:site" content="@epratt.net" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.cvindoor.com/" />
    </Helmet>
  )
}

export default SEO
