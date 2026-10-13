import React from 'react'
import './Time.css'

import {
    Clock10,
    MapPin,
    Phone,
    Mail,
    ArrowRight
} from 'lucide-react'

const Time = () => {
    return (
        <section className="time">

            <div className="container">

                {/* Section Heading */}
                <div className="time-heading">

                    <span className="time-subtitle">
                        VISIT OUR CLINIC
                    </span>

                    <h2>
                        We're Here to
                        <span> Care for Your Smile.</span>
                    </h2>

                    <p>
                        Get in touch with us or visit our clinic.
                        We're always happy to help you with your dental care.
                    </p>

                </div>


                {/* Information Cards */}
                <div className="Time-box">


                    {/* Opening Hours */}
                    <div className="time-card">

                        <div className="time-icon">
                            <Clock10 size={24} strokeWidth={2} />
                        </div>

                        <div className="time-content">

                            <span className="card-label">
                                WORKING HOURS
                            </span>

                            <h3>
                                Opening Hours
                            </h3>

                            <p>
                                Monday - Saturday
                            </p>

                            <strong>
                                10:30 AM - 2:30 PM /<br></br>
                                 6:30 PM - 10:30 PM
                            </strong>

                            <p>
                                Sunday
                            </p>

                            <strong>
                               10:30 AM - 2:30 PM
                            </strong>

                        </div>

                    </div>


                    {/* Address */}
                    <div className="time-card">

                        <div className="time-icon">
                            <MapPin size={24} strokeWidth={2} />
                        </div>

                        <div className="time-content">

                            <span className="card-label">
                                VISIT US
                            </span>

                            <h3>
                                Our Address
                            </h3>

                            <p>
                                Yogeshwar Niwash,
                                Hanuman Nagar, Road No. - 34,
                                Wagle Estate, Thane (West) - 400604.
                            </p>

                            <a
                                href="https://maps.app.goo.gl/yVCHzqrkBLhNAr376"
                                target="_blank"
                                rel="noreferrer"
                                className="direction-link"
                            >
                                Get Directions
                                <ArrowRight size={15} />
                            </a>

                        </div>

                    </div>


                    {/* Phone */}
                    <div className="time-card">

                        <div className="time-icon">
                            <Phone size={24} strokeWidth={2} />
                        </div>

                        <div className="time-content">

                            <span className="card-label">
                                CONTACT US
                            </span>

                            <h3>
                                Call Us
                            </h3>

                            <p>
                                Have a question? We're here to help.
                            </p>

                            <a href="tel:+918770722052"
                                className="contact-link">
                                +91 87707 22052 
                            </a>
                            <a href="tel:+91 8982586067"
                            className="contact-link">
                                +91 89825 86067
                            </a>

                        </div>

                    </div>


                    {/* Email */}
                    <div className="time-card">

                        <div className="time-icon">
                            <Mail size={24} strokeWidth={2} />
                        </div>

                        <div className="time-content">

                            <span className="card-label">
                                EMAIL US
                            </span>

                            <h3>
                                Send Us an Email
                            </h3>

                            <p>
                                We'll get back to you as soon as possible.
                            </p>

                            <a
                                href="mailto:harshyadav@gmail.com"
                                className="contact-link"
                            >
                                harshyadav@gmail.com
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Time