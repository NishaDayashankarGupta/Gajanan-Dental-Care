import React from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react'

import logo from '../../assets/Images/Logo.png'

import './Footer.css'


const Footer = () => {

  return (
    <footer className="footer">

      <div className="container">

        {/* =================================
                    TOP FOOTER
                ================================= */}

        <div className="footer-top">


          {/* =================================
                        CLINIC INFO
                    ================================= */}

          <div className="footer-about">

            <Link
              to="/"
              className="footer-logo"
            >
              <img
                src={logo}
                alt="Gajanan Dental Care"
              />
            </Link>


            <p>
              Providing gentle, personalized and
              modern dental care to help you achieve
              a healthy and confident smile.
            </p>


            {/* Social Links */}

            {/* <div className="footer-social">

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>


                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>

                        </div> */}

          </div>


          {/* =================================
                        QUICK LINKS
                    ================================= */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul>

              <li>
                <Link to="/">
                  <ArrowRight size={14} />
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <ArrowRight size={14} />
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/service">
                  <ArrowRight size={14} />
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <ArrowRight size={14} />
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================
                        SERVICES
                    ================================= */}

          <div className="footer-column">

            <h3>Our Services</h3>

            <ul>

              <li>
                <Link to="/service">
                  <ArrowRight size={14} />
                  Dental Implants
                </Link>
              </li>

              <li>
                <Link to="/service">
                  <ArrowRight size={14} />
                  Teeth Whitening
                </Link>
              </li>

              <li>
                <Link to="/service">
                  <ArrowRight size={14} />
                  Root Canal
                </Link>
              </li>

              <li>
                <Link to="/service">
                  <ArrowRight size={14} />
                  Dental Cleaning
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================
                        CONTACT
                    ================================= */}

          <div className="footer-column footer-contact">

            <h3>Contact Us</h3>


            <a href="tel:8770722052">

              <div className="footer-contact-icon">
                <Phone size={17} />
              </div>

              <span className='footer-span'>
                8770722052
              </span>

            </a>


            <a href="mailto:harshyadav@gmail.com">

              <div className="footer-contact-icon">
                <Mail size={17} />
              </div>

              <span className='footer-span'>
                harshyadav@gmail.com
              </span>

            </a>


            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <MapPin size={17} />
              </div>

              <span className='footer-span'>
                Yogeshwar Niwash,
                Hanuman Nagar, Road No. - 34,
                Wagle Estate, Thane (West) - 400604.
              </span>

            </div>


            <div className="footer-contact-item">

              <div className="footer-contact-icon">
                <Clock size={17} />
              </div>


              <div className="footer-timing">

                <strong>Monday - Saturday</strong>

                <span>10:30 AM - 2:30 PM / 6:30 PM - 10:30 PM</span>

                <strong>Sunday</strong>

                <span>10:30 AM - 2:30 PM</span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
                    BOTTOM FOOTER
                ================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()}
            <strong> Gajanan Dental Care</strong>.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer