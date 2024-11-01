import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';
import SuccessModal from './SuccessModal'; // Import the existing SuccessModal
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [result, setResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formSubmissionData = new FormData();
    formSubmissionData.append("access_key", "02d6bfa2-a2e8-4f71-b08f-780980ef55b4");
    formSubmissionData.append("name", formData.name);
    formSubmissionData.append("email", formData.email);
    formSubmissionData.append("phone", formData.phone);
    formSubmissionData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmissionData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully");
        setModalOpen(true); // Open the modal on success
        setFormData({ // Reset form fields
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("There was an error submitting the form.");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/contactimg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          filter: 'brightness(0.5)', // Darken the background
        }}
      ></div>
      
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
        }}
        data-aos="fade-in" // Apply AOS fade-in effect
        data-aos-duration="1000" // Duration of the fade-in
      >
        <Typography variant="h4" align="center" style={{ color: '#B17457', marginBottom: '20px' }}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#B17457',
              color: '#fff',
              '&:hover': { backgroundColor: '#4A4947' },
              width: '100%',
            }}
          >
            Submit
          </Button>
        </form>
        
        <span style={{ display: 'block', marginTop: '10px', textAlign: 'center' }}>
          {result}
        </span>

        {/* Google Maps Embed */}
        <Typography variant="h6" align="center" style={{ marginTop: '20px', color: '#B17457' }}>
          Our Location
        </Typography>
        <div style={{ marginTop: '20px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28464.02148379895!2d75.8184962219606!3d26.90340987678619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7f7917e5e69%3A0xf5f911112d45f728!2sSeema%20Bus%20Services!5e0!3m2!1sen!2sin!4v1730401120819!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Render the existing SuccessModal conditionally */}
        {modalOpen && <SuccessModal onClose={handleCloseModal} />}
      </Container>
    </div>
  );
};

export default ContactUs;
