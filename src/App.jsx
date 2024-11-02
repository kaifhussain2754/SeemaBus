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

const appContainerStyle = {
  maxWidth: '100%',
  width: '100%',
  overflowX: 'hidden',
  padding: '0 15px', // Optional: Add some padding for better spacing
  margin: '0 auto', // Center align the content
  boxSizing: 'border-box', // Ensures padding and borders are included in width/height
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  return (
    <div style={appContainerStyle}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SeemaBusNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<TourPackages />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/allpackages" element={<TourPackages />} />
            <Route path="/gallery" element={<ImageGallery />} />
          </Routes>
          <TapToCall />
          <WhatsAppChatButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
