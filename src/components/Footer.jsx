import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram} from 'react-icons/fa';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <ul>
            <li>FAQS</li>
            <li>TERMS OF SERVICE</li>
            <li>PRIVACY POLICY</li>
            <li>CONTACT US</li>
            <li>GIFT CARD</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>HELP & SUPPORT</h3>
          <ul>
            <li>SHIPPING INFO</li>
            <li>RETURNS</li>
            <li>HOW TO ORDER</li>
            <li>HOW TO TRACK</li>
            <li>SIZE GUIDE</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>COMPANY INFO</h3>
          <ul>
            <li>ABOUT US</li>
            <li>OUR BLOG</li>
            <li>CAREERS</li>
            <li>STORE LOCATIONS</li>
            <li>TESTIMONIAL</li>
          </ul>
        </div>
        <div className="footer-column subscribe">
          <h3>SUBSCRIBE &amp; GET 15% DISCOUNT</h3>
          <p>
            By subscribing you agree to our Terms &amp; Conditions and Privacy &amp; Cookie Policy
          </p>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="subscribe-input"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          <div className="footer-icons">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaPinterestP className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          Copyright © 2025 Furneo. All Rights Reserved.
        </span>
        <div className="payment-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="payment-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="payment-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png" alt="RuPay" className="payment-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
