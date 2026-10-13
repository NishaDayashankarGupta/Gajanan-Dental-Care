import React from 'react'
import { Link } from 'react-router-dom'
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight
} from 'lucide-react'

import aboutImage from '../../assets/Images/aboutImg.jpg'

import './About.css'

const About = () => {
    return (
        <section className="about">

            <div className="container">

                <div className="about-content">


                    {/* ================= IMAGE ================= */}

                    <div className="about-image-wrapper">

                        <div className="about-image-bg"></div>

                        <div className="about-image">
                            <img
                                src={aboutImage}
                                alt="Dental care at Gajanan Dental Care"
                            />
                        </div>


                        {/* Experience Card */}

                        <div className="about-experience">

                            <div className="experience-icon">
                                <ShieldCheck size={22} />
                            </div>

                            <div>
                                <strong>Trusted Care</strong>
                                <span>For Your Smile</span>
                            </div>

                        </div>

                    </div>


                    {/* ================= CONTENT ================= */}

                    <div className="about-text">

                        <span className="Subtitle">
                            ABOUT OUR CLINIC
                        </span>


                        <h2>
                            Your Smile Deserves
                            <span> The Best Care.</span>
                        </h2>


                        <p className="about-description">
                            At Gajanan Dental Care, we believe that every
                            patient deserves comfortable, personalized,
                            and quality dental care.
                        </p>


                        <p className="about-description">
                            Our clinic focuses on modern dental treatments,
                            patient comfort, and creating healthy,
                            confident smiles for every patient.
                        </p>


                        {/* Features */}

                        <div className="about-features">

                            <div className="about-feature">
                                <CheckCircle2 size={19} />
                                <span>Personalized Dental Care</span>
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 size={19} />
                                <span>Modern Treatment Approach</span>
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 size={19} />
                                <span>Patient Comfort First</span>
                            </div>

                            <div className="about-feature">
                                <CheckCircle2 size={19} />
                                <span>Trusted Dental Services</span>
                            </div>

                        </div>


                        {/* Button */}

                        <Link to="/about" className="btns about-btn" > Learn More
                           <span>→</span>
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About