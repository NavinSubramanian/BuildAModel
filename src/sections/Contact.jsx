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
                    <p>+91 8778605741</p>
                </div>
            </div>
            <div className='leftContactBlock'>
                <span><Mail /></span>
                <div>
                    <h5>Email</h5>
                    <p>buildamodel.in@gmail.com</p>
                </div>
            </div>
            <div className='leftContactBlock'>
                <span><MapPinHouse /></span>
                <div>
                    <h5>Our Address</h5>
                    <p>No:18, gandhi Nagar, 2nd St, Iyyenchery, Urapakkam, Chennai - 603210</p>
                </div>
            </div>
        </div>
        <div className='rightContact'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6523035782075!2d80.07530487418077!3d12.86571948744002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7699dfa2095%3A0x484855925990cada!2sFlanzer-Mixed%20Creative%20Agency%20%7C%20Chennai&#39;s%201st%20ever%20Mixed%20Creative%20Agency!5e0!3m2!1sen!2sin!4v1750492687463!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Contact