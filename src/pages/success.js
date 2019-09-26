import React from "react"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const success = ({ data }) => {
  return (
    <Layout>
      <StyledHero success="true" img={data.successBkg.childImageSharp.fluid}>
        <Banner
          title="Success"
          info="Thank you for your interest. We will be getting back with you shortly."
        >
          <AniLink fade to="/" className="btn-white">
            Go Home
          </AniLink>
        </Banner>
      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  {
    successBkg: file(relativePath: { eq: "CVIndoor2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default success
