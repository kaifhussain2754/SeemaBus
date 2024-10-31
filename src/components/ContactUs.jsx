import React from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <div style={{
      backgroundImage: 'url(/contactimg.jpeg)', // Update with your image path  
      backgroundSize: 'cover', // Cover the whole div
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // Do not repeat the background image
      display: 'flex', // Flexbox for centering
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      padding: '20px', // Padding around the content
    }}>
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with transparency
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          padding: '20px', // Inner padding for the container
        }}
      >
        <Typography variant="h4" align="center" style={{ color: '#B17457', marginBottom: '20px' }}>
          Contact Us
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
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

        {/* Google Maps Embed */}
        <Typography variant="h6" align="center" style={{ marginTop: '20px', color: '#B17457' }}>
          Our Location
        </Typography>
        <div style={{ marginTop: '20px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28464.02148379895!2d75.8184962219606!3d26.90340987678619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7f7917e5e69%3A0xf5f911112d45f728!2sSeema%20Bus%20Services!5e0!3m2!1sen!2sin!4v1730401120819!5m2!1sen!2sin"
            width="100%" // Full width for the map
            height="300" // Adjust height as needed
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
