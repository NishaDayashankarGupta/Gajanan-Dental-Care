import React from "react";

import { Phone} from 'lucide-react'
import "./Services.css";

const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Complete dental care to keep your teeth and gums healthy for years to come.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    description:
      "Brighten your smile and remove stains with professional teeth whitening treatment.",
  },
  {
    icon: "🔧",
    title: "Root Canal Treatment",
    description:
      "Relieve tooth pain and save damaged teeth with gentle, modern root canal care.",
  },
  {
    icon: "😁",
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with personalized cosmetic dental treatments.",
  },
  {
    icon: "🪥",
    title: "Dental Cleaning",
    description:
      "Professional cleaning to remove plaque, tartar, and help maintain healthy gums.",
  },
  {
    icon: "🦷",
    title: "Dental Implants",
    description:
      "Restore missing teeth with natural-looking and long-lasting dental implant solutions.",
  },
  {
    icon: "👧",
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care designed especially for children's growing smiles.",
  },
  {
    icon: "😁",
    title: "Braces & Aligners",
    description:
      "Straighten your teeth and improve your bite with modern orthodontic solutions.",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">

        {/* Header */}
        <div className="services-header">

          <div>
            <span className="Subtitle">
              OUR SERVICES
            </span>

            <h2>
              Complete Care for
              <span> Your Smile</span>
            </h2>
          </div>

          <div className="services-header-right">
            <p>
              From preventive care to cosmetic and restorative treatments,
              we're here to help you achieve and maintain a healthy,
              confident smile.
            </p>

            <a href="/Service" className="services-view-all">
              View All Services
              <span>→</span>
            </a>
          </div>

        </div>

        {/* Services Grid */}
        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-card-top">
                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="service-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {/* <a href="/services" className="service-link">
                Learn More
                <span>↗</span>
              </a> */}

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">

          <div className="services-bottom-icon">
            🦷
          </div>

          <div className="services-bottom-text">
            <h3>Not sure which treatment you need?</h3>

            <p>
              Schedule a consultation and let our dental team recommend
              the right treatment for your smile.
            </p>
          </div>

          <a href="tel:+91-8770722052" className="services-cta btns">
            <Phone size={18} />
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}
