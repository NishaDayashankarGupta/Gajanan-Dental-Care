import React , { useState } from 'react'
import './BeforeAfter.css'

const treatments = [
  {
    id: "whitening",
    label: "Teeth Whitening",
    title: "A Brighter, More Confident Smile",
    description:
      "Professional teeth whitening can help remove stains and discoloration, giving your smile a noticeably brighter appearance.",
    before:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2d4?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "smile",
    label: "Smile Makeover",
    title: "Transform Your Smile",
    description:
      "A personalized smile makeover combines cosmetic treatments to create a more balanced, natural-looking smile.",
    before:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "implants",
    label: "Dental Restoration",
    title: "Restore Your Natural Smile",
    description:
      "Modern restorative dentistry can help restore the appearance and function of damaged or missing teeth.",
    before:
      "https://images.unsplash.com/photo-1606265752439-1f18756aa2d4?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80",
  },
];

const BeforeAfter = () => {

    const [activeTreatment, setActiveTreatment] = useState("whitening");

  const treatment = treatments.find(
    (item) => item.id === activeTreatment
  );

  return (
    <section className="before-after-section">
      <div className="before-after-container">

        {/* Header */}
        <div className="before-after-header">
          <span className="before-after-subtitle">
            SMILE TRANSFORMATIONS
          </span>

          <h2>
            See the Difference
            <span> for Yourself</span>
          </h2>

          <p>
            Discover how personalized dental treatments can transform smiles
            and help our patients feel more confident.
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="treatment-tabs">
          {treatments.map((item) => (
            <button
              key={item.id}
              className={
                activeTreatment === item.id ? "active" : ""
              }
              onClick={() => setActiveTreatment(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="before-after-content">

          {/* Comparison */}
          <div className="comparison-wrapper">

            <div className="comparison-card">
              <img
                src={treatment.before}
                alt={`${treatment.label} before treatment`}
              />

              <span className="comparison-label before-label">
                Before
              </span>
            </div>

            <div className="comparison-card">
              <img
                src={treatment.after}
                alt={`${treatment.label} after treatment`}
              />

              <span className="comparison-label after-label">
                After
              </span>
            </div>

            <div className="comparison-divider">
              <span>↔</span>
            </div>

          </div>

          {/* Information */}
          <div className="transformation-info">

            <span className="small-label">
              {treatment.label}
            </span>

            <h3>{treatment.title}</h3>

            <p>{treatment.description}</p>

            <div className="transformation-points">
              <div>
                <span>✓</span>
                <p>Personalized treatment plan</p>
              </div>

              <div>
                <span>✓</span>
                <p>Modern dental technology</p>
              </div>

              <div>
                <span>✓</span>
                <p>Comfort-focused care</p>
              </div>
            </div>

            <button className="transformation-button">
              Book Your Consultation
              <span>→</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BeforeAfter
