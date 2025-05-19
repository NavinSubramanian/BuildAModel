import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react';

import '../styles/others.css'

const Footer = () => {
  return (
    <footer className='mainFooter'>
        <div className='mainFooterWrapper'>
            <div className='leftFooter'>
                <div className='socialSide'>
                    <img className='mainLogo' src="https://www.logoai.com/oss/icons/2021/12/02/SU8HhT2n6tL-p-_.png" alt="" />
                    <p>We are committed to providing <br />personalized industrial solutions.</p>
                    <div>
                        <Instagram />
                        <Facebook />
                        <Twitter />
                    </div>
                </div>
                <div className='linksWrapper'>
                    <div>
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Portfolio</p>
                        <p>Pricing</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <p>123 Model Lane Design City, State</p>
                        <p><b>Email: </b>contact@buildamodel.com</p>
                        <p><b>Phone: </b>+91 12345 67890</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='rightFooter'>
                <p>© 2025 BuildaModel — All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer