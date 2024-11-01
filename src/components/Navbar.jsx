import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import logo from '/logo.png'; // Adjust path as needed
import BookingModal from './BookingModal'; // Import the BookingModal component
import styles from './SeemaBusNavbar.module.css'; // CSS module for styling
import TopBanner from './TopBanner'; // Ensure you import the TopBanner component

const SeemaBusNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [expanded, setExpanded] = useState(false); // State to track navbar expansion

  const handleShow = () => setShowModal(true); // Function to show the modal
  const handleClose = () => setShowModal(false); // Function to hide the modal
  const handleToggle = () => setExpanded(!expanded); // Function to toggle navbar expansion

  // Inline styles for dropdown
  const dropdownMenuStyle = {
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    opacity: showDropdown ? 1 : 0,
    transform: showDropdown ? 'translateY(0)' : 'translateY(-10px)',
    display: showDropdown ? 'block' : 'none',
  };

  return (
    <>
      <TopBanner />
      <Navbar expand="lg" className={`${styles.navbar} sticky-top`} collapseOnSelect expanded={expanded}>
        {/* Left: Logo and Brand Name */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="/" className={`${styles.brand} d-flex align-items-center`}>
            <img
              src={logo}
              alt="Seema Bus Service Logo"
              className={`${styles.logo} d-inline-block align-top me-2`}
            />
            <span className={styles.brandName}>Seema Bus Service</span> {/* Brand name */}
          </Navbar.Brand>
        </div>

        {/* Book Now Button for Small Screens */}
        <div className="d-lg-none"> 
          <Button className={`${styles.bookButton} ${styles.smallButton}`} onClick={handleShow}>
            Book Now
          </Button>
        </div>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${styles.toggleButton} ${expanded ? styles.active : ''}`}
          onClick={handleToggle} // Toggle navbar on click
        >
          {expanded ? <FaTimes size={30} /> : <span className="navbar-toggler-icon"></span>}
        </Navbar.Toggle>

        {/* Center: Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="/about" className={styles.navLink}>About</Nav.Link>
            <Nav.Link href="/about" className={styles.navLink}>Rajasthan Tour</Nav.Link>
            <Nav.Link href="/about" className={styles.navLink}>Kerala Tour</Nav.Link>
            <Nav.Link href="/about" className={styles.navLink}>Manali Tour</Nav.Link>
            <Nav.Link href="/packages" className={styles.navLink}>Explore Packages</Nav.Link>
            <Nav.Link href="/services" className={styles.navLink}>Services</Nav.Link>
            <Nav.Link href="/gallery" className={styles.navLink}>Image Gallery</Nav.Link>
            <Nav.Link href="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Book Now Button for Larger Screens */}
        <div className="d-none d-lg-block">
          <Button className={styles.bookButton} onClick={handleShow}>Book Now</Button>
        </div>
      </Navbar>

      {/* Booking Modal */}
      <BookingModal showModal={showModal} handleClose={handleClose} />
    </>
  );
};

export default SeemaBusNavbar;
