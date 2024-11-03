import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div
      style={{
        backgroundColor: '#4A4947',
        color: '#FAF7F0',
        padding: '5px 10px', // Reduced padding to prevent conflicts
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            flex: 1,
            textAlign: 'left',
            fontSize: '0.9rem', // Font size for mobile
            paddingRight: '10px', // Adjusted padding
            display: 'flex',
            alignItems: 'center', // Align icon and text vertically
          }}
        >
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px', fontSize: '1.2rem' }} /> {/* Font Awesome phone icon */}
          | For Bookings: +91 91661 85546
        </span>
        <div
          style={{
            display: 'flex',
            gap: '10px', // Reduced gap for better spacing
          }}
        >
          <a href="https://www.instagram.com/seemabusservices/" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              style={{
                color: '#FAF7F0',
                fontSize: '1.2rem', // Icon size for mobile
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100068316505543&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook
              style={{
                color: '#FAF7F0',
                fontSize: '1.2rem', // Icon size for mobile
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              style={{
                color: '#FAF7F0',
                fontSize: '1.2rem', // Icon size for mobile
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
