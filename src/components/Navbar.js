import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
// import links from "../constants/links"
import logo from "../images/CVindoorLogo.png"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img
              src={logo}
              alt="Chula Vista Indoor Soccer"
              style={{ maxHeight: "100px" }}
            />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {/* {links.map((link, index) => {
            return (
              <li key={index}>
                <AniLink to={link.path}>{link.text}</AniLink>
              </li>
            )
          })} */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
