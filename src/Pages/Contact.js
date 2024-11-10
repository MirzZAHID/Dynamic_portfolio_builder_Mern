// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../Components/ContactForm';
import './Contact.css';
import Navbar from '../Components/MainBar/Navbar';

const ContactPage = () => {
  return (
    <div>
        <Navbar />

    <div className="contact-page-container">
      {/* Section 1: Introductory Part */}
      <section className="intro-section p-0">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to get in touch? We'd love to hear from you. Use the form below to send us a message.
        </p>
      </section>

      {/* Section 2: Two Columns (Information and Form) */}
      <section className="two-column-section">
        {/* Column 1: Information */}
        <div className="column information-column">
          <h3>Our Information</h3>
          <p>
            Address: 123 Main Street, Cityville<br />
            Phone: (555) 123-4567<br />
            Email: info@example.com
          </p>
        </div>

        {/* Column 2: Contact Form */}
        <div className="column form-column">
          <h3>Send Us a Message</h3>
          <ContactForm />
        </div>
      </section>
    </div>
    </div>
  );
};

export default ContactPage;