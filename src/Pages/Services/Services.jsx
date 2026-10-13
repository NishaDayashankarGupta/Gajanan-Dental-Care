import React from 'react'
import './Services.css'
import ServiceBanner from '../../assets/Images/service-banner.jpg'
import { Phone, CheckCircle2} from 'lucide-react'

const services = [
  {
    number: "01",
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive dental care focused on maintaining healthy teeth, gums, and overall oral health.",
    treatments: [
      "Dental Check-ups",
      "Dental Fillings",
      "Gum Care",
      "Preventive Dentistry",
    ],
  },
  {
    number: "02",
    icon: "🪥",
    title: "Teeth Cleaning",
    description:
      "Professional cleaning helps remove plaque and tartar while keeping your teeth and gums fresh and healthy.",
    treatments: [
      "Scaling",
      "Polishing",
      "Plaque Removal",
      "Gum Health Check",
    ],
  },
  {
    number: "03",
    icon: "✨",
    title: "Teeth Whitening",
    description:
      "Brighten your smile and reduce stains with professional teeth whitening treatments tailored to your needs.",
    treatments: [
      "Professional Whitening",
      "Stain Removal",
      "Smile Brightening",
      "Whitening Consultation",
    ],
  },
  {
    number: "04",
    icon: "🔧",
    title: "Root Canal Treatment",
    description:
      "A comfortable treatment designed to remove infection, relieve pain, and help save your natural tooth.",
    treatments: [
      "Tooth Infection Treatment",
      "Pain Relief",
      "Root Canal Therapy",
      "Tooth Restoration",
    ],
  },
  {
    number: "05",
    icon: "😁",
    title: "Cosmetic Dentistry",
    description:
      "Improve the appearance of your smile with personalized cosmetic treatments designed around your goals.",
    treatments: [
      "Smile Makeover",
      "Dental Veneers",
      "Cosmetic Bonding",
      "Smile Design",
    ],
  },
  {
    number: "06",
    icon: "🦷",
    title: "Dental Implants",
    description:
      "Replace missing teeth with natural-looking dental implants designed for comfort, function, and confidence.",
    treatments: [
      "Single Tooth Implants",
      "Implant Restoration",
      "Missing Tooth Replacement",
      "Implant Consultation",
    ],
  },
  {
    number: "07",
    icon: "👧",
    title: "Pediatric Dentistry",
    description:
      "Friendly and gentle dental care designed to help children develop healthy habits and confident smiles.",
    treatments: [
      "Children's Check-ups",
      "Preventive Care",
      "Fluoride Treatment",
      "Kids Dental Education",
    ],
  },
  {
    number: "08",
    icon: "😁",
    title: "Braces & Aligners",
    description:
      "Modern orthodontic solutions to straighten teeth, improve your bite, and create a more balanced smile.",
    treatments: [
      "Traditional Braces",
      "Clear Aligners",
      "Bite Correction",
      "Orthodontic Consultation",
    ],
  },
];

const Services = () => {
  return (
    <main className="services-page">

      {/* =========================
          Page Hero
      ========================= */}

      <section className="services-page-hero">
        <div className="services-page-container">

          <div className="services-page-hero-content">
            <span className='Subtitle'>OUR DENTAL SERVICES</span>

            <h1>
              Complete Care for
              <span> Every Smile.</span>
            </h1>

            <p>
              From routine check-ups to advanced cosmetic and restorative
              treatments, our experienced team provides personalized dental
              care in a comfortable environment.
            </p>

             <a
                  href="tel:8770722052"
                  className="hero-call-btn btns"
                >
                  <Phone size={18} />
                  Call Now
                </a>
          </div>

          <div className="services-page-hero-image">

            <img src={ServiceBanner} alt="Modern dental clinic" />  

            <div className="services-hero-badge">
              <strong>5+</strong>
              <span>Years of Trusted Care</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================
          Services
      ========================= */}

      <section className="all-services-section">
        <div className="services-page-container">

          <div className="all-services-header">
            <span className='Subtitle'>WHAT WE OFFER</span>

            <h2>
              Dental Care Designed
              <span> Around You.</span>
            </h2>

            <p>
              We offer a wide range of dental treatments to help you maintain
              your oral health and achieve the smile you've always wanted.
            </p>
          </div>

          <div className="all-services-grid">

            {services.map((service) => (
              <article className="service-detail-card" key={service.number}>

                <div className="service-detail-top">

                  <div className="service-detail-icon">
                    {service.icon}
                  </div>

                  <span className="service-detail-number">
                    {service.number}
                  </span>

                </div>

                <h3>{service.title}</h3>

                <p className="service-detail-description">
                  {service.description}
                </p>

                <div className="service-treatments">
                  {service.treatments.map((treatment, index) => (
                    <div className="treatment-item" key={index}>
                      <CheckCircle2 size={19} />
                      {treatment}
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="service-detail-link"
                >
                  Book Consultation
                  <span>→</span>
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =========================
          Why Choose Us Strip
      ========================= */}

      <section className="services-trust">
        <div className="services-page-container">

          <div className="services-trust-content">

            <div>
              <span className='Subtitle'>WHY PATIENTS CHOOSE US</span>

              <h2>
                Expert Care
                <span> Comfortable Experience.</span>
              </h2>

              <p>
                We combine experienced dental professionals, modern
                technology, and personalized care to make every visit
                comfortable and effective.
              </p>
            </div>

            <div className="trust-points">

              <div>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>15K+</strong>
                <span>Happy Patients</span>
              </div>

              <div>
                <strong>4.9</strong>
                <span>Patient Rating</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* {/* =========================
          CTA
      ========================= */}

      {/* <section className="services-page-cta">
        <div className="container">

          <div className="services-cta-content">

            <div>
              <span className='Subtitle'>READY TO GET STARTED?</span>

              <h2>
                Let's Create Your
                <strong> Healthiest Smile.</strong>
              </h2>

              <p>
                Schedule a consultation with our dental team and find the
                right treatment for your smile.
              </p>
            </div>

            <a href="/contact" className="services-cta-button">
              Book Your Appointment
              <span>→</span>
            </a>

          </div>

        </div>
      </section> */}

    </main>
  );
}

export default Services
