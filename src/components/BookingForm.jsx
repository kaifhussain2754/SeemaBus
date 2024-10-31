import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    travelDate: '',
    requests: '',
    passengers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    // Add form submission logic here
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: { xs: '-300px', sm: '-150px' },
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#B17457', fontWeight: '600' }}>Book Your Next Trip</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pickup Destination"
              variant="outlined"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Drop Destination"
              variant="outlined"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text" // Change this to text to allow custom formatting
              label="Travel Date"
              placeholder="dd/mm/yy" // Use placeholder to show the required format
              variant="outlined"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="No. of Passengers"
              type="number"
              variant="outlined"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              inputProps={{ min: 1 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          label="Special Requests"
          variant="outlined"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#B17457',
            color: '#fff',
            '&:hover': { backgroundColor: '#4A4947' },
            width: '100%', // Full width for the button
          }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default BookingForm;
