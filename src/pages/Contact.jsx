import React, { useState } from "react";
import "./contact.css";// Import CSS file for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
    // Here you can send formData to a backend API
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container">
      

      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        <br /><br />
        <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
      </form>

      <div className="contact-info">
        <h2>Our Address</h2>
        <p>123 Health Street, Wellness City, 45678</p>
        <p>Email: contact@medicalshop.com</p>
        <p>Phone: +1 (234) 567-890</p>

        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
        <p>Saturday: 10:00 AM - 6:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="map">
        <h2>Find Us on the Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5047580489516!2d144.9559232156533!3d-37.81720997975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e2d66bdb%3A0x2a1b7e6f2b4f8f99!2sMedical%20Shop!5e0!3m2!1sen!2sus!4v1619824479015!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "5px" }}
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;