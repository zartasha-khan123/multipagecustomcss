import React from "react";

import styles from '@/app/components/contact/contact.module.css';

 function ContactUs() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to contact us!</p>
        <form className="contact-form">
          <div className={styles.formgroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message"  required></textarea>
          </div>
          <button type="submit" className ={styles.submit}>Send Message</button>
        </form>
      </div>

    </>
  );
}

export default ContactUs;
