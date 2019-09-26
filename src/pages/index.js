import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
// import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
// import FeaturedTours from "../components/Home/FeaturedTours"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="coming soon"
        info="Premier indoor soccer coming to Chula Vista in 2019. Check back soon for more information. Have a question? Don't hesitate to reach out."
      >
        <AniLink fade to="/contact" className="btn-white">
          Get In Touch
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
  </Layout>
)

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "CVIndoor2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
