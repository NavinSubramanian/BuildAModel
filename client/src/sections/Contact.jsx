import React from 'react'
import { Phone, Mail, MapPinHouse } from 'lucide-react';

import '../styles/contact.css'

const Contact = () => {
  return (
    <section id="contact" className='contactSection'>
        <div className='leftContact'>
            <h4>CONTACT US</h4>
            <h1>Get in touch <b>with us</b></h1>
            <p>Reach out for any inquiries, support or to discuss how we can meet your needs</p>
            <div className='leftContactBlock'>
                <span><Phone /></span>
                <div>
                    <h5>Contact</h5>
                    <p>+91 9003060042</p>
                </div>
            </div>
            <div className='leftContactBlock'>
                <span><Mail /></span>
                <div>
                    <h5>Email</h5>
                    <p>info@help.com</p>
                </div>
            </div>
            <div className='leftContactBlock'>
                <span><MapPinHouse /></span>
                <div>
                    <h5>Our Address</h5>
                    <p>37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
                </div>
            </div>
        </div>
        <div className='rightContact'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.87917977995!2d77.659774950429!3d8.721552568754735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1747486820995!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Contact