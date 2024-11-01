// src/App.jsx
import React, { useEffect, useState } from 'react';
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
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader'; // Import the Loader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or any async operations
    const loadData = async () => {
      // Simulate a loading period
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 700);
    };

    loadData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <>
          <SeemaBusNavbar /> {/* Navbar will render only when not loading */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/allpackages" element={<TourPackages />} />
            <Route path="/gallery" element={<ImageGallery />} />
            {/* Add other routes here */}
          </Routes>
          <TapToCall />
          <WhatsAppChatButton />
          <Footer /> {/* Footer will render only when not loading */}
        </>
      )}
    </div>
  );
}

export default App;
