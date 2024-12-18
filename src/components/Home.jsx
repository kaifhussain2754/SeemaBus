// src/Home.jsx
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import HeroSection from './HeroSection';
import BookingForm from './BookingForm';
import Services from './Services';
import TourPackages from './TourPackage';
import AboutUs from './About';

const homeContainerStyle = {
  overflowX: 'hidden', // Prevent horizontal overflow
  overflowY: 'auto',   // Allow vertical scroll if needed
};

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div 
      data-aos="fade-in" 
      data-aos-duration="1000" 
      style={homeContainerStyle} // Apply overflow styles here
    >
      <HeroSection />
      <BookingForm />
      <Services />
      <TourPackages />
      <AboutUs />
    </div>
  );
};

export default Home;
