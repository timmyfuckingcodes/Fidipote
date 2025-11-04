import React from 'react'
import classes from './Footer.module.css'
import HeaderImage from '../../assets/HeaderImage.png'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css"
const Footer: React.FC=()  => {
  return (
  <div className={classes.footer}>
    <div>
  <div>
      <div className={classes['headerImage']}>
      <img  src={HeaderImage} alt='fidipote-logo' />
      </div>
</div>
<div className={classes.footerText}>
  <p>Lorem ipsum dolor sit amet consectetur ad
        ipisicing elit. Dignissimos voluptatem quia obcaecati 
         ex. Autem eaque illo nesciunt itaque. Maiores facilis tempore numquam ad accusantium officia ullam repellat aliquid amet!
</p>
</div>
</div>

<div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>What We do</li>
            <li>Latest News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get In touch</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="icon" /> 5228 Lexington Court, Mason
              Ohio, Nigeria
            </li>
            <li>
              <FaPhone className="icon" /> +234 8109345678
            </li>
            <li>
              <FaEnvelope className="icon" /> FIDIPOTE@ROYAL
            </li>
          </ul>
        </div>
        </div>
</div>

  )

}
export default Footer;