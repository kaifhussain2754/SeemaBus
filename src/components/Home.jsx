// src/Home.jsx
import React from 'react';
import HeroSection from './HeroSection';;
import BookingForm from './BookingForm';
import Services from './Services';
import TourPackages from './TourPackage';
import AboutUs from './About';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookingForm />
      <Services />
      <TourPackages />
      <AboutUs />
    </div>
  );
};

export default Home;
