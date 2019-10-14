import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import styles from "../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.location}>
          <FaMapMarkerAlt /> 555 Broadway, <br /> Chula Vista, CA, 91910
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
