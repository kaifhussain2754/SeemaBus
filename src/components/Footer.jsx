import React, { useState } from 'react';
import PrivacyPolicyModal from './PrivacyPolicy';
import TermsAndConditionsModal from './TermsConditions';

const Footer = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false); // State for Privacy Policy Modal
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);     // State for Terms and Conditions Modal

  const handleOpenPrivacyModal = () => setPrivacyModalOpen(true);
  const handleClosePrivacyModal = () => setPrivacyModalOpen(false);

  const handleOpenTermsModal = () => setTermsModalOpen(true);
  const handleCloseTermsModal = () => setTermsModalOpen(false);

  return (
    <footer style={{ backgroundColor: '#D8D2C2', color: '#4A4947', padding: '40px 0' }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <img
              src="/logo.png"
              alt="Seema Bus Service"
              className="img-fluid mb-3"
              style={{ width: '150px', height: 'auto' }}
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

          {/* Policies */}
          <div className="col-md-3 mb-4">
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li>
                <button onClick={handleOpenPrivacyModal} style={{ background: 'none', border: 'none', color: '#4A4947', cursor: 'pointer', textDecoration: 'underline' }}>
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={handleOpenTermsModal} style={{ background: 'none', border: 'none', color: '#4A4947', cursor: 'pointer', textDecoration: 'underline' }}>
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#4A4947', color: '#fff', padding: '15px 0', textAlign: 'center' }}>
        <p>© 2024 Seema Bus Service. All rights reserved.</p>
      </div>

      {/* Privacy Policy Modal */}
      {/* Privacy Policy Modal */}
<PrivacyPolicyModal 
  open={isPrivacyModalOpen} 
  handleClose={handleClosePrivacyModal} 
/>

      {/* Terms and Conditions Modal */}
      {isTermsModalOpen && <TermsAndConditionsModal onClose={handleCloseTermsModal} />}
    </footer>
  );
};

export default Footer;
