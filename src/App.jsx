// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import TapToCall from './components/TapToCall';
import WhatsAppChatButton from './components/WhatsappChat';
import Services from './components/Services';
import SeemaBusNavbar from './components/Navbar';
import TourPackages from './components/TourPackage';
import AboutUs from './components/About';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <SeemaBusNavbar /> {/* Navbar will render on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<TourPackages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/allpackages" element={<TourPackages/>} />
        {/* Add other routes here */}
      </Routes>
      <TapToCall />
      <WhatsAppChatButton />
      <Footer />
    </div>
  );
}

export default App;
