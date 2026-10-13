import React from 'react'
import './WhyChooseUS.css'

const features = [
  {
    icon: "🦷 ",
    title: "Experienced Dentists",
    text: "Our skilled dental professionals provide personalized care using modern techniques and years of clinical experience.",
  },
  {
    icon: "✨",
    title: "Advanced Technology",
    text: "We use modern dental technology to make your diagnosis and treatment more accurate, comfortable, and efficient.",
  },
  {
    icon: "❤️",
    title: "Patient-Centered Care",
    text: "Your comfort and well-being come first. We take time to understand your needs and create a treatment plan for you.",
  },
  {
    icon: "🛡️",
    title: "Safe & Hygienic",
    text: "We follow strict sterilization and hygiene protocols to provide you with a safe and comfortable dental experience.",
  },
];


const WhyChooseUS = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-header">
          <span className="why-subtitle">WHY CHOOSE US</span>

          <h2>
            Your Smile Deserves
            <span> The Best Care</span>
          </h2>

          <p>
            We combine compassionate care, experienced dentists, and modern
            technology to give you a healthier and more confident smile.
          </p>
        </div>

        <div className="why-content">

          <div className="why-image">
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
                alt="Dentist providing dental care"
              />
            </div>

            <div className="experience-card">
              <strong>6+</strong>
              <span>Years of Experience</span>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUS
