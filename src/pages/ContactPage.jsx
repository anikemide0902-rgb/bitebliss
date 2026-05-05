import React from 'react'
import "./ContactPage.css"
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <div className="contact-container">
  <div className="contact-card">
    <h1>Contact Us</h1>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </form>

  </div>
</div>
    </div>
  )
}

export default ContactPage