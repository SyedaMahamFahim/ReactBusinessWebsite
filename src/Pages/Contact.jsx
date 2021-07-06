import React from 'react'
import Banner from '../Components/Banner'
import ContactForm from '../ContactForm/ContactFrom'
import "./style.css"

function Contact() {
  return (
    <>
    <Banner pageName="Contact Us" pageLink="/contact"/>
    <div className="container">
      <h1 className="contact-us">Contact Us</h1>
    </div>
     <ContactForm/>
    </>
  );
}

export default Contact;
