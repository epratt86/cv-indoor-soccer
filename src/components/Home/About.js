import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { TiChevronRight } from "react-icons/ti"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "CVIndoor.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  // name must match name of query
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="winter" subtitle="2019" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Chula Vista Indoor Soccer rendering"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Key features</h4>
          <p>
            <TiChevronRight />
            Ten, all-weather synthetic ProTurf fields
          </p>
          <p>
            <TiChevronRight />
            LED stadium lighting
          </p>
          <p>
            <TiChevronRight />
            Convenient location in the heart of Chula Vista
          </p>
          <p>
            <TiChevronRight />
            Leagues for both men, women, and co-ed
          </p>
          <AniLink fade to="/contact" className="btn-primary">
            contact us
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
