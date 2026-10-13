
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


// FROM BACKEND 

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/appointments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Appointment request submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        message: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};


  return (

    <>

      {/* =========================
          HERO
      ========================= */}

      <section className="contact-hero">
        <div className="container">

          <div className="contact-container">

            <div className="contact-hero-content">
              <span className="Subtitle">
                GET IN TOUCH
              </span>

              <h1>
                Let's Take Care of
                <span>Your Smile.</span>
              </h1>

              <p>
                Have a question or ready to book your appointment?
                Our friendly dental team is here to help you.
              </p>
            </div>

            <div className="contact-hero-badge">
              <div className="contact-badge-icon">
                🦷
              </div>

              <div>
                <strong>We're Here for You</strong>
                <span>Professional & Friendly Dental Care</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          CONTACT INFO
      ========================= */}

      <section className="contact-info-section">
        <div className="container">

          <div className="contact-info-grid">

            {/* Phone */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                📞
              </div>

              <div>
                <span>CALL US</span>
                <h3>+91 8770722052</h3>
                <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                ✉️
              </div>

              <div>
                <span>EMAIL US</span>
                <h3>harshyadav@gmail.com</h3>
                <p>We usually reply within 24 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                📍
              </div>

              <div>
                <span>VISIT US</span>
                <h3>Mumbai, Maharashtra</h3>
                <p>Yogeshwar Niwash, Hanuman Nagar, Road No. - 34, Wagle Estate, Thane (West) - 400604.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          FORM + HOURS
      ========================= */}

      <section className="contact-main">

        <div className="container">

            <div className="contact-main-grid">

              {/* Form */}

              <div className="contact-form-wrapper">

                <div className="contact-section-heading">
                  <span className="Subtitle">BOOK AN APPOINTMENT</span>

                  <h2>
                    Start Your Journey to a
                    <span> Healthier Smile.</span>
                  </h2>

                  <p>
                    Fill out the form below and our team will get back to you
                    to confirm your appointment.
                  </p>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  <div className="form-row">

                    <div className="form-group">
                      <label>Your Name</label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="form-row">

                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Choose Service</label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option value="General Dentistry">
                          General Dentistry
                        </option>

                        <option value="Teeth Cleaning">
                          Teeth Cleaning
                        </option>

                        <option value="Teeth Whitening">
                          Teeth Whitening
                        </option>

                        <option value="Root Canal">
                          Root Canal Treatment
                        </option>

                        <option value="Cosmetic Dentistry">
                          Cosmetic Dentistry
                        </option>

                        <option value="Dental Implants">
                          Dental Implants
                        </option>

                        <option value="Braces">
                          Braces & Aligners
                        </option>
                      </select>
                    </div>

                  </div>

                  <div className="form-group">
                    <label>Preferred Date</label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Request an Appointment
                    <span>→</span>
                  </button>

                  <p className="form-note">
                    🔒 Your information is kept private and secure.
                  </p>

                </form>

              </div>

              {/* Side Information */}

              <aside className="contact-sidebar">

                {/* Opening Hours */}

                <div className="hours-card">

                  <div className="hours-header">
                    <div className="hours-icon">
                      🕐
                    </div>

                    <div>
                      <span>WHEN WE'RE OPEN</span>
                      <h3>Opening Hours</h3>
                    </div>
                  </div>

                  <div className="hours-list">

                    <div>
                      <span>Monday - Saturday</span>
                      <strong>10:30 AM - 2:30 PM</strong>
                    </div>

                    <div>
                      <span>Sunday</span>
                      <strong>10:30 AM - 2:30 PM</strong>
                    
                    </div>

                  </div>

                  <div className="emergency-box">
                    <strong>Dental Emergency?</strong>

                    <p>
                      Call us directly for urgent dental concerns.
                    </p>

                    <a href="tel:+918770722052">
                      📞 +91 8770722052
                    </a>
                  </div>

                </div>

                {/* Map */}

                <div className="map-card">

                  <div className="map-placeholder">
                    <div className="map-pin">
                      📍
                    </div>

                    <div>
                      <strong>Gajanan Dental Care</strong>
                      <span>
                        123 Smile Street, Mumbai
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/DP4Zxd2oH3JGjogw8"
                    target="_blank"
                    rel="noreferrer"
                    className="directions-btn "
                  >
                    Get Directions
                    <span>↗</span>
                  </a>

                </div>

              </aside>

            </div>

          </div>
          
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

       <section className="contact-cta">
        <div className="container">

          <div className="contact-cta-content">

            <div>
              <span>YOUR SMILE DESERVES THE BEST</span>

              <h2>
                Ready to Feel Good About
                <span> Your Smile?</span>
              </h2>

              <p>
                Take the first step today. Our dental team is ready to
                welcome you.
              </p>
            </div>

            <a
              href="tel:+8770722052"
              className="contact-cta-button btns"
            >
              📞 Call Us Today
            </a>

          </div>

        </div>
      </section> 

    </>

  );
}

export default Contact