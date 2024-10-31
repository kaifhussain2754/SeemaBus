import React from 'react';
import './Footer.module.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="banner-content">
          <div className="icon-wrapper">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="banner-text">
            <h3>Connect With Our Fleet Expert Representative will help you.</h3>
            <p>Call Us and we'll send the best deals to you</p>
          </div>
        </div>
        <a href="tel:+917414000073" className="call-button" aria-label="Call us at +91-7414000073">
          Call Us Now +91-7414000073
        </a>
      </div>

      {/* Main Footer */}
      <div className="main-footer">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column company-info">
            <img src="/logo-placeholder.png" alt="Satnam Travels" className="company-logo" />
            <p>
              At Satnam travels, we prioritize you, your comfort and convenience. Our fleet of luxury vehicles is equipped with modern amenities and maintained to the highest standards, ensuring a comfortable and stress-free journey for you.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              {['Home', 'About Us', 'Tour Packages', 'Gallery', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="footer-column">
            <h3>Tour Packages</h3>
            <ul>
              {[
                'Jaipur to Agra Same Day Tour',
                'Jaipur to Ranthambore Same Day Tour',
                'Jaipur to Khatushyam Ji Same Day Tour',
                'Jaipur to Pushkar Same Day Tour'
              ].map((tour) => (
                <li key={tour}>
                  <a href="#">{tour}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>Shop No 33, Sethi Colony, Transport Nagar, Jaipur, Rajasthan 302004</p>
              <p><a href="tel:+919414051561">+91 941 405 1561</a></p>
              <p><a href="tel:+919929111561">+91 992 911 1561</a></p>
              <p><a href="tel:+917414000073">+91 741 400 0073</a></p>
              <p><a href="mailto:info@satnamtravels.in">info@satnamtravels.in</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-content">
          <p>© 2024 Satnam Travels. All rights reserved.</p>
          <div className="social-links">
            {['facebook', 'instagram', 'youtube', 'linkedin', 'tripadvisor'].map((social) => (
              <a 
                key={social} 
                href={`https://${social}.com`} 
                className={`social-icon ${social}`} 
                aria-label={`Follow us on ${social.charAt(0).toUpperCase() + social.slice(1)}`}
              >
                <span className="sr-only">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
