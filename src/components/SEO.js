import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/thumbnail.jpg"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)

  const { siteDesc, siteTitle, siteUrl } = site.siteMetadata

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
      {/* twitter card */}
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
      <meta
        name="twitter:image"
        property="twitter:image"
        content="https://photos.google.com/u/1/search/_tra_/photo/AF1QipMZPsUehSeIxz99XYfhhAc8R8AR26Sq8mWVzxBA"
      />
      <meta name="twitter:image:alt" content="Chula Vista Indoor Soccer" />
      <meta name="twitter:site" content="@epratt.net" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.cvindoor.com/" />
      {/* facebook card */}
      <meta
        name="og:title"
        property="og:title"
        content={`${title} | ${siteTitle}`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={`${description}`}
      />
      <meta name="og:url" property="og:url" content={`${siteUrl}`} />
      <meta name="og:image" property="og:image" content={img} />
      <meta property="og:site_name" content="Chula Vista Indoor Soccer" />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default SEO
