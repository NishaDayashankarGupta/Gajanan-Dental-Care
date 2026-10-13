import React from 'react'
import { Link } from 'react-router-dom'

import {
  Phone,
  Mail
} from 'lucide-react'
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import logo from '../../assets/Images/Logo.png'

import './Navbar.css'


const Navbar = () => {

  return (

    <header>

      {/* =================================
          TOP HEADER
      ================================= */}

      <div className="top-header">

        <div className="container">

          <div className="contact-info">

            <ul>

              <li>
                <a href="tel:8770722052">

                  <Phone
                    size={16}
                    strokeWidth={2}
                  />

                  <span>
                    8770722052
                  </span>

                </a>
              </li>


              <li>
                <a href="mailto:harshyadav@gmail.com">

                  <Mail
                    size={16}
                    strokeWidth={2}
                  />

                  <span>
                    harshyadav@gmail.com
                  </span>

                </a>
              </li>

            </ul>

          </div>


          {/* Social Links */}

          <div className="social-links">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
            <FaInstagram />
            </a>


            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
             <CiFacebook />
            </a>

            <a
              href="https://wp.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
            <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>


      {/* =================================
          MAIN HEADER
      ================================= */}

      <div className="main-header">

        <div className="container">


          {/* Logo */}

          <div className="logo">

            <Link to="/">

              <img
                src={logo}
                alt="Gajanan Dental Care"
              />

            </Link>

          </div>


          {/* Navigation */}

          <nav className="nav-links">

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link to="/service">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </nav>


          {/* Call Button */}

          <div className="book-btn">

            <a href="tel:8770722052">

              <Phone size={16} />

              <span>
                Call Now
              </span>

            </a>

          </div>


        </div>

      </div>

    </header>

  )
}


export default Navbar