import React from 'react'
import './Whatsapp.css'
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const phoneNumber = "91 8982586067"
    return (
        <div>
            <a href={`https://wa.me/${phoneNumber}`}
                className='whatsapp-float'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Chat with us on whatsapp'>
                <FaWhatsapp />
            </a>
        </div>
    )
}

export default Whatsapp