import React from "react"
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
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>All-weather artificial turf field</p>
          </div>
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>Leagues for me, women, co-ed, and youth</p>
          </div>
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>6 vs 6 soccer</p>
          </div>
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>LED Lighting</p>
          </div>
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>Convenient location in the heart of Chula Vista</p>
          </div>
          <div className={styles.feature}>
            <TiChevronRight size={26} />
            <p>Games start this winter. Sign your team up now!</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
