import React from "react"
import Img from "gatsby-image"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaEnvelope } from "react-icons/fa"
import styles from "../css/index.module.css"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      message: "",
      className: "",
    }
  }
  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }
  _handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== "success") {
          throw msg
        }
        this.setState({
          message: "You have successfully been added to our mailing list!",
          className: "success",
        })
        setTimeout(() => {
          this.setState({ message: "", className: "" })
        }, 3000)
      })
      .catch(err => {
        this.setState({
          message: "Whoops! We already have this address in our mailing list.",
          className: "failure",
        })
        setTimeout(() => {
          this.setState({ message: "", className: "" })
        }, 3000)
      })
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          description="Welcome to Chula Vista Indoor Soccer! Sign up for our mailing list and stay up to date with our future grand opening. We will be providing indoor soccer in the heart of Chula Vista in 2020."
        />
        <div className={styles.landing}>
          <StyledHero
            home="true"
            img={this.props.data.defaultBcg.childImageSharp.fluid}
          >
            <div className="container">
              <div className={styles.row}>
                <Img
                  fluid={this.props.data.logo.childImageSharp.fluid}
                  className={styles.logo}
                />
                <h1>Chula Vista Indoor Soccer</h1>
                <h4>
                  6v6 indoor soccer coming to Chula Vista in 2020. Check back
                  soon for grand opening tournament details, season leagues, and
                  sign up information.
                </h4>
                <p>
                  Join our mailing list and stay up to date on the latest
                  updates.
                </p>
                <form
                  onSubmit={this._handleSubmit}
                  className={styles.mailchimp}
                >
                  <label htmlFor="email" style={{ display: "none" }}>
                    email
                  </label>
                  <input
                    type="email"
                    onChange={this._handleChange}
                    placeholder="example@gmail.com"
                    name="email"
                    id="email"
                    required
                  />
                  <label htmlFor="submit" style={{ display: "none" }}>
                    submit
                  </label>
                  <input
                    type="submit"
                    className="btn-primary"
                    value="sign up"
                    id="submit"
                  />
                </form>
                <p className={`message ${this.state.className}`}>
                  {this.state.message}
                </p>
              </div>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/Chula-Vista-Indoor-Soccer-101796581240478/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Facebook"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="http://www.instagram.com/chulavista_indoor_soccer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="mailto:cvindoorsoccer@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </StyledHero>
        </div>
        <About />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "CVIndoor2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    logo: file(relativePath: { eq: "CVindoorLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
