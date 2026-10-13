import React from 'react'
import './Contact.css'


const contactInfo = [
  {
    icon: "📍",
    title: "Visit Our Clinic",
    text: "123 Smile Avenue, Your City, India",
  },
  {
    icon: "📞",
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: "✉️",
    title: "Email Us",
    text: "hello@smilecare.com",
  },
];

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span className="Subtitle">GET IN TOUCH</span>

          <h2>
            Let's Take Care of
            <span> Your Smile</span>
          </h2>

          <p>
            Have a question or ready to book your appointment? Our friendly
            dental team is here to help you every step of the way.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-left">

            <div className="contact-info-list">
              {contactInfo.map((item, index) => (
                <div className="contact-info-card" key={index}>
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="hours-card">
              <div className="hours-heading">
                <div className="clock-icon">🕐</div>

                <div>
                  <h3>Opening Hours</h3>
                  <p>We're here when you need us</p>
                </div>
              </div>

              <div className="hours-row">
                <span>Monday - Friday</span>
                <strong>9:00 AM - 7:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <strong>9:00 AM - 5:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <strong>Emergency Only</strong>
              </div>
            </div>

            {/* Emergency */}
            <div className="emergency-card">
              <div className="emergency-icon">🦷</div>

              <div>
                <span>Dental Emergency?</span>
                <strong>+91 8770722052</strong>
              </div>

              <span className="emergency-arrow">→</span>
            </div>

          </div>

          {/* Right Side - Form */}
          <div className="contact-form-card">

            <div className="form-heading">
              <span>BOOK AN APPOINTMENT</span>
              <h3>Send Us a Message</h3>
              <p>
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form className="contact-form">

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Service</label>

                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Choose a service
                    </option>
                    <option value="checkup">
                      Dental Check-up
                    </option>
                    <option value="cleaning">
                      Teeth Cleaning
                    </option>
                    <option value="whitening">
                      Teeth Whitening
                    </option>
                    <option value="root-canal">
                      Root Canal
                    </option>
                    <option value="cosmetic">
                      Cosmetic Dentistry
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                Request an Appointment
                <span>→</span>
              </button>

              <p className="form-note">
                🔒 Your information is safe and will never be shared with
                third parties.
              </p>

            </form>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact
