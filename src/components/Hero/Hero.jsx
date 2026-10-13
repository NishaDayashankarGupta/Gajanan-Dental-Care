import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react'
import dentalBanner from '../../assets/Images/dentalbg.jpg'

import './Hero.css'


const Hero = () => {
  return (
     <>

      {/* ================= HERO SECTION ================= */}

      <section className="hero" style={{ backgroundImage: `url(${dentalBanner})`,
      
      }}>

        <div className="container">
          <div className="hero-overlay"></div>

          <div className="hero-content">

            {/* LEFT CONTENT */}

            <div className="hero-text">

              <div className="hero-badge">
                <ShieldCheck size={17} />
                <span>Trusted Dental Care</span>
              </div>

              <h1>
                Confident Smiles.
                <span>Exceptional Care.</span>
              </h1>

              <p>
                Experience gentle, personalized dental care with
                modern treatments designed to keep your smile
                healthy, beautiful, and confident.
              </p>

              {/* BUTTONS */}

              <div className="hero-buttons">

                <a
                  href="tel:8770722052"
                  className="hero-call-btn btns"
                >
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="hero-image-wrapper">

              {/* <div className="hero-circle"></div> */}

              {/* <div className="hero-image">
                <img
                  src={implant}
                  alt="Dentist providing professional dental care"
                />
              </div> */}


              {/* Floating Card */}

              <div className="hero-floating-card">

                <div className="floating-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <strong>Gentle Care</strong>
                  <span>Comfort comes first</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  )
}

export default Hero
