import React from 'react'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    Smile,
    Sparkles,
    ShieldCheck,
    Activity,
    HeartPulse,
    Stethoscope
} from 'lucide-react'

import './Services.css'


const services = [
    {
        icon: <Smile />,
        title: 'Dental Implants',
        description:
            'Restore missing teeth with strong, natural-looking dental implants designed for a confident smile.'
    },

    {
        icon: <Sparkles />,
        title: 'Teeth Whitening',
        description:
            'Brighten your smile with professional teeth whitening treatment for a cleaner and more confident look.'
    },

    {
        icon: <ShieldCheck />,
        title: 'Root Canal Treatment',
        description:
            'Comfortable root canal treatment to protect damaged teeth and help maintain your natural smile.'
    },

    {
        icon: <Activity />,
        title: 'Dental Cleaning',
        description:
            'Professional cleaning to remove plaque and maintain healthy teeth and gums.'
    },

    {
        icon: <HeartPulse />,
        title: 'Gum Treatment',
        description:
            'Effective care for gum problems to maintain healthy gums and improve overall oral health.'
    },

    {
        icon: <Stethoscope />,
        title: 'General Dentistry',
        description:
            'Complete dental care including regular checkups, fillings, consultations and preventive treatments.'
    }
]


const Services = () => {
    return (
        <section className="services">

            <div className="container">

                {/* =================================
                    SECTION HEADING
                ================================= */}

                <div className="services-heading">

                    <span className="Subtitle">
                        OUR SERVICES
                    </span>

                    <h2>
                        Complete Care For
                        <span>Your Smile.</span>
                    </h2>

                    <p>
                        We provide personalized dental treatments
                        using modern techniques to keep your smile
                        healthy, beautiful and confident.
                    </p>

                </div>


                {/* =================================
                    SERVICES CARDS
                ================================= */}

                <div className="services-grid">

                    {services.map((service, index) => (

                        <div
                            className="service-card"
                            key={index}
                        >

                            {/* Number */}

                            <span className="service-number">
                                0{index + 1}
                            </span>


                            {/* Icon */}

                            <div className="service-icon">
                                {service.icon}
                            </div>


                            {/* Content */}

                            <div className="service-content">

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>

                            </div>


                            {/* Arrow */}

                            <Link
                                to="/service"
                                className="service-link"
                            >
                                Learn More
                                <ArrowRight size={16} />
                            </Link>

                        </div>

                    ))}

                </div>


                {/* =================================
                    BOTTOM BUTTON
                ================================= */}

                <div className="services-button">

                    <Link
                        to="/service"
                        className="btns"
                    >
                        View All Services
                        <ArrowRight size={17} />
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Services