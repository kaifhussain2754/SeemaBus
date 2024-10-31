// src/Home.jsx
import React from 'react';
import SeemaBusNavbar from './Navbar';
import TopBanner from './TopBanner';
import HeroSection from './HeroSection';
import WhatsAppChatButton from './WhatsappChat';
import BookingForm from './BookingForm';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <SeemaBusNavbar />
      <HeroSection />
      <WhatsAppChatButton />
      <BookingForm />
    </div>
  );
};

export default Home;
