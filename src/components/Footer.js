import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaFacebookSquare, FaInstagram, FaEnvelope } from "react-icons/fa"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.location}>
          <FaMapMarkerAlt /> 555 Broadway, <br /> Chula Vista, CA, 91910
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
        <div className={styles.copyright}>
          &copy; chula vista indoor soccer {new Date().getFullYear()} <br /> all
          rights reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
