Contact.jsx

import React, { useState } from 'react';

function Contact() {
<div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Feel free to reach out to us via email or phone.</p>
      <p className="text-lg">Email: oladapcee3@gmail.com</p>
      <p className="text-lg">Phone: 09010020030</p>
    </div>

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Feel free to reach out to us via email or phone.</p>
      <p className="text-lg">Email: imagine_tech@gmail.com</p>
      <p className="text-lg">Phone: 09010020030</p>
    </div>
      <h2>Write Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Send</button>
      </form>
     </div>

    
  );
}

export default Contact;