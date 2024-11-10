// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      validationErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors
    setErrors({});

    // TODO: Implement form submission logic
    // Example: Send a POST request to the server
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show success message)
        console.log('Form submitted successfully');
      } else {
        // Handle errors (e.g., show error message)
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <div className="error-message">{errors.name}</div>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <div className="error-message">{errors.email}</div>}

      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
      />
      {errors.subject && <div className="error-message">{errors.subject}</div>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />
      {errors.message && <div className="error-message">{errors.message}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;