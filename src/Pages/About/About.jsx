import React from 'react'
import "./About.css";
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react'


const values = [
  {
    icon: "❤️",
    title: "Patient First",
    text: "Every treatment begins by understanding your needs, concerns, and goals.",
  },
  {
    icon: "🦷",
    title: "Expert Care",
    text: "Our experienced dental team combines knowledge, skill, and modern techniques.",
  },
  {
    icon: "✨",
    title: "Modern Dentistry",
    text: "We use advanced technology to make your treatment accurate, comfortable, and efficient.",
  },
];

const stats = [
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "15K+",
    label: "Happy Patients",
  },
  {
    number: "25+",
    label: "Dental Treatments",
  },
  {
    number: "4.9",
    label: "Patient Rating",
  },
];

const About = () => {
  return (
    <main className="about-page">

      {/* =========================
          Hero
      ========================= */}

      <section className="about-hero">
        <div className="about-container">

          <div className="about-hero-content">
            <span className="about-eyebrow">
              ABOUT OUR CLINIC
            </span>

            <h1>
              Caring For Your Smile,
              <span> Every Step of the Way.</span>
            </h1>

            <p>
              At Gajanan Dental Care, we believe that great dentistry is
              about more than healthy teeth. It's about creating comfortable
              experiences and helping every patient smile with confidence.
            </p>

            <div className="about-hero-buttons">
               <a
                  href="tel:8770722052"
                  className="hero-call-btn btns"
                >
                  <Phone size={18} />
                  Call Now
                </a>


              <a href="/services" className="about-secondary-btn">
                Explore Our Services
              </a>
            </div>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Modern dental clinic"
            />

            <div className="about-floating-card">
              <div className="about-floating-icon">🦷</div>

              <div>
                <strong>5+ Years</strong>
                <span>of Trusted Dental Care</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          Our Story
      ========================= */}

      <section className="about-story">
        <div className="about-container">

          <div className="story-grid">

            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                alt="Dentist treating a patient"
              />

              <div className="story-experience">
                <strong>15+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>

            <div className="story-content">
              <span className="section-label">
                OUR STORY
              </span>

              <h2>
                Dentistry Built Around
                <span> You.</span>
              </h2>

              <p>
                Gajanan Dental Care Clinic was founded with a simple goal:
                to make high-quality dental care more personal, comfortable,
                and accessible.
              </p>

              <p>
                From routine check-ups to advanced restorative and cosmetic
                treatments, our team takes the time to understand each
                patient's unique needs. We believe that the best treatment
                isn't just clinically effective — it should also make you
                feel comfortable and cared for.
              </p>

              <p>
                Today, our clinic continues to combine compassionate service,
                experienced professionals, and modern dental technology to
                create healthier smiles and lasting relationships with our
                patients.
              </p>

              <div className="story-signature">
                <span className="signature-line"></span>

                <div>
                  <strong>Gajanan Dental Care Team</strong>
                  <span>Committed to your smile</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          Stats
      ========================= */}

      <section className="about-stats">
        <div className="about-container">

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          Mission / Vision
      ========================= */}

      <section className="mission-section">
        <div className="about-container">

          <div className="mission-header">
            <span className="section-label">
              WHAT DRIVES US
            </span>

            <h2>
              Our Mission Is Your
              <span> Health & Confidence.</span>
            </h2>

            <p>
              Everything we do is focused on providing thoughtful,
              high-quality dental care in a welcoming environment.
            </p>
          </div>

          <div className="mission-grid">

            <div className="mission-card">
              <div className="mission-icon">🎯</div>

              <h3>Our Mission</h3>

              <p>
                To provide exceptional dental care through personalized
                treatment, modern technology, and genuine compassion for
                every patient who walks through our doors.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon">🌱</div>

              <h3>Our Vision</h3>

              <p>
                To create a dental experience where patients feel informed,
                comfortable, and confident about their oral health and
                treatment decisions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          Core Values
      ========================= */}

      <section className="values-section">
        <div className="about-container">

          <div className="values-header">
            <span className="section-label">
              OUR VALUES
            </span>

            <h2>
              What Makes Us
              <span> Different?</span>
            </h2>

            <p>
              Our approach is built on trust, expertise, and putting patients
              at the heart of everything we do.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>

                <div className="value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">
        <div className="about-container">

          <div className="cta-content">

            <div>
              <span className='section-label'>READY FOR A HEALTHIER SMILE?</span>

              <h2>
                Your Smile Journey
                <span> Starts Here.</span>
              </h2>

              <p>
                Schedule a consultation with our dental team and take the
                first step toward a healthier, more confident smile.
              </p>
            </div>

            <a href="/contact" className="cta-button">
              Book Your Appointment
              <span>→</span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About

