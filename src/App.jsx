import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import SeemaBusNavbar from './components/Navbar';
import TourPackages from './components/TourPackage';
import AboutUs from './components/About';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader'; // Import the Loader component
import WhatsAppChatButton from './components/WhatsappChat';
import TapToCall from './components/TapToCall';
import TourPackageDetails from './components/Pacakges';


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
    <div>
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
            <Route path="/package/:id" element={<TourPackageDetails />} />
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
