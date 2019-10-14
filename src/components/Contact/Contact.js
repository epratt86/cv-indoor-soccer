import React from "react"
import styles from "../../css/contact.module.css"
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.center}>
        <h3 className={styles.title}>contact us</h3>
        <h4 className={styles.contactHeading}>
          Have a question about our upcoming facility, rules, or leagues
          available? Please feel free to contact us with the form below and one
          of our representatives will get back to you as soon as possible. We
          look forward to hearing from you.
        </h4>
        <form
          name="contact"
          className={styles.form}
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div>
            <label htmlFor="name">
              <FaUser />
              &nbsp;name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email">
              <FaEnvelope />
              &nbsp;email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="phone">
              <FaPhone />
              &nbsp;phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className={styles.formControl}
              placeholder="619-555-5555"
            />
          </div>
          <div>
            <label htmlFor="message">
              <FaRegCommentDots />
              &nbsp;message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Leave your message"
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
          </div>
          <div>
            <button type="submit" className="btn-primary">
              send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
