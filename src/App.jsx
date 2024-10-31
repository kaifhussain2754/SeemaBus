// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import BookingForm from './components/BookingForm'; // Import BookingForm for a separate route

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookingForm />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
