import React, { useState } from 'react'
import "./FAQ.css";



const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend a dental check-up and professional cleaning every six months. However, your dentist may recommend more frequent visits depending on your oral health needs.",
  },
  {
    question: "Is dental treatment painful?",
    answer:
      "Modern dental treatments are designed to be as comfortable as possible. We use gentle techniques and appropriate anesthesia when necessary to help minimize discomfort during treatment.",
  },
  {
    question: "How can I improve my oral health?",
    answer:
      "Brush your teeth twice a day with fluoride toothpaste, floss daily, maintain a balanced diet, and visit your dentist regularly for professional check-ups and cleanings.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes. We provide emergency dental care for issues such as severe toothaches, broken teeth, dental injuries, and other urgent dental problems. Contact our clinic as soon as possible.",
  },
  {
    question: "What dental treatments do you offer?",
    answer:
      "We offer a wide range of treatments including preventive care, teeth cleaning, fillings, root canal treatment, dental crowns, teeth whitening, cosmetic dentistry, and more.",
  },
  {
    question: "How long does a dental check-up take?",
    answer:
      "A routine dental check-up usually takes around 30 to 60 minutes, depending on your oral health and whether additional examinations or cleaning are required.",
  },
];
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="container">

        {/* Heading */}
        <div className="faq-header">
          <span className="faq-subtitle">FAQ</span>

          <h2>
            Have Questions?
            <span> We Have Answers.</span>
          </h2>

          <p>
            Find answers to some of the most common questions about our dental
            treatments, appointments, and patient care.
          </p>
        </div>

        <div className="faq-content">

          {/* Left Side */}
          <div className="faq-intro">

            <div className="faq-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
                alt="Dental consultation"
              />

              <div className="faq-badge">
                <div className="faq-badge-icon">🦷</div>
                <div>
                  <strong>Healthy Smile</strong>
                  <span>Starts With You</span>
                </div>
              </div>
            </div>

            <div className="faq-contact">
              <h3>Still have questions?</h3>

              <p>
                Our friendly dental team is always happy to help you with any
                questions or concerns.
              </p>

              <button className="faq-button">
                Contact Our Clinic
                <span>→</span>
              </button>
            </div>

          </div>

          {/* Right Side - Accordion */}
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isActive ? "active" : ""}`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-plus">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ



