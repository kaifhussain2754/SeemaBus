import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicy';

const Footer = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenPrivacyModal = () => setPrivacyModalOpen(true);
  const handleClosePrivacyModal = () => setPrivacyModalOpen(false);

  return (
    <footer style={{ backgroundColor: '#D8D2C2', color: '#4A4947', padding: '40px 0' }}>
      {/* Top Banner */}
      <div className="container mb-4">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #B17457',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
          className="d-md-flex justify-content-between align-items-center"
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div className="icon-wrapper me-3">
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
            <div>
              <h5 style={{ marginBottom: '10px' }}>Connect with Our Bus Service Experts</h5>
              <p style={{ marginBottom: '0' }}>Call us now for the best travel deals!</p>
            </div>
          </div>
          <a
            href="tel:+919166185545"
            style={{
              backgroundColor: '#B17457',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
            }}
            aria-label="Call us at +91 91661 85545"
          >
            Call Us Now +91-9166185545
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <img
              src="/logo.png"
              alt="Seema Bus Service"
              className="img-fluid mb-3"
              style={{ width: '150px', height: 'auto' }} // Adjust the logo size
            />
            <p>
              At Seema Bus Service, we prioritize your comfort and convenience. Our fleet of modern buses ensures a smooth and enjoyable journey for all our passengers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.path} style={{ color: '#4A4947', textDecoration: 'none' }}>{link.name}</a>
                </li>
              ))}
              <li>
                <button onClick={handleOpenPrivacyModal} style={{ background: 'none', border: 'none', color: '#4A4947', cursor: 'pointer', textDecoration: 'underline' }}>
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div className="col-md-3 mb-4">
            <h5>Tour Packages</h5>
            <ul className="list-unstyled">
              {[
                'Rajasthan Tour Packages',
                'Manali Tour Packages',
                'Delhi Tour Packages',
                'Agra Tour Packages',
                'Kerela Tour Packages',
                'Kashmir Tour Packages',
              ].map((tour) => (
                <li key={tour}>
                  <a href="#" style={{ color: '#4A4947', textDecoration: 'none' }}>{tour}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Info</h5>
            <address style={{ color: '#4A4947' }}>
              26, Shyam Vihar, Opposite Balati Factory, Agra Road, Jaipur, Rajasthan<br />
              <a href="tel:+919414051561" style={{ color: '#4A4947', textDecoration: 'none' }}>+91 916 618 5545</a><br />
              <a href="mailto:info@seemabusservice.in" style={{ color: '#4A4947', textDecoration: 'none' }}>seemabusservices@gmail.com</a>
            </address>
          </div>
        </div>
      </div>

      {/* Developer Info */}
      <div style={{ backgroundColor: '#D8D2C2', color: '#4A4947', padding: '10px 0', textAlign: 'center' }}>
        <p style={{ margin: '0' }}>
          Developed & Maintained by <strong><a href="https://linktr.ee/nebulixsoftware" style={{ color: '#4A4947', textDecoration: 'underline' }}>Nebulix Software Pvt Ltd.</a></strong>
        </p>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#4A4947', color: '#fff', padding: '15px 0', marginTop: '20px', textAlign: 'center' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center">
          <p style={{ marginBottom: '10px', textAlign: 'center' }}>© 2024 Seema Bus Service. All rights reserved.</p>
          <div className="d-flex justify-content-center">
            {['facebook', 'instagram', 'youtube', 'linkedin', 'tripadvisor'].map((social) => (
              <a
                key={social}
                href={`https://${social}.com`}
                style={{ color: '#fff', marginLeft: '15px', textDecoration: 'none' }}
                aria-label={`Follow us on ${social.charAt(0).toUpperCase() + social.slice(1)}`}
              >
                <i className={`bi bi-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal open={isPrivacyModalOpen} handleClose={handleClosePrivacyModal} />
    </footer>
  );
};

export default Footer;
