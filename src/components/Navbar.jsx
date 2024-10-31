import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import logo from '/logo.png'; // Adjust path as needed
import BookingModal from './BookingModal'; // Import the BookingModal component
import styles from './SeemaBusNavbar.module.css'; // CSS module for styling
import TopBanner from './TopBanner'; // Ensure you import the TopBanner component

const SeemaBusNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const handleShow = () => setShowModal(true); // Function to show the modal
  const handleClose = () => setShowModal(false); // Function to hide the modal

  return (
    <>
      <TopBanner /> {/* Correctly wrapped in a fragment */}
      <Navbar expand="lg" className={styles.navbar} collapseOnSelect>
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <Navbar.Brand href="/" className={`${styles.brand} d-flex align-items-center`}>
            <img
              src={logo}
              alt="Seema Bus Service Logo"
              className={`${styles.logo} d-inline-block align-top me-2`}
            />
          </Navbar.Brand>

          {/* Book Now Button for Small Screens */}
          <div className="d-lg-none"> {/* Visible on small screens */}
            <Button className={`${styles.bookButton} ${styles.smallButton}`} onClick={handleShow}>
              Book Now
            </Button>
          </div>

          {/* Toggle Button for Small Screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggleButton} />

          {/* Center: Nav Links */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="/about" className={styles.navLink}>About</Nav.Link>
              <NavDropdown
                title="Explore Packages"
                id="explore-packages-dropdown"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                className={styles.navLink}
              >
                <NavDropdown.Item href="#package1">Honeymoon Packages</NavDropdown.Item>
                <NavDropdown.Item href="#package2">Adventure Packages</NavDropdown.Item>
                <NavDropdown.Item href="#package3">Weekend Getaways</NavDropdown.Item>
                <NavDropdown.Item href="#package4">Family Packages</NavDropdown.Item>
                <NavDropdown.Item href="#package5">Custom Packages</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services" className={styles.navLink}>Services</Nav.Link>
              <Nav.Link href="#gallery" className={styles.navLink}>Image Gallery</Nav.Link>
              <Nav.Link href="#contact" className={styles.navLink}>Contact</Nav.Link>
              <Nav.Link href="#blogs" className={styles.navLink}>Our Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Book Now Button for Larger Screens */}
          <div className="d-none d-lg-block"> {/* Hidden on small screens */}
            <Button className={styles.bookButton} onClick={handleShow}>Book Now</Button>
          </div>
        </Container>

        {/* Booking Modal */}
        <BookingModal showModal={showModal} handleClose={handleClose} />
      </Navbar>
    </>
  );
};

export default SeemaBusNavbar;
