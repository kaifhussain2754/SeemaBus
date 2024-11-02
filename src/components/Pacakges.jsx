import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid, CardMedia, Paper, Button, Rating, TextField, MenuItem, FormControl, InputLabel, Select, Breadcrumbs } from '@mui/material';
import packageData from './packageData';  // Import your packageData
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import SuccessModal from './SuccessModal'; // Import the SuccessModal

const TourPackageDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const tourPackage = packageData.find(pkg => pkg.id === parseInt(id));

  // Initialize AOS and scroll to top
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top on page load
  }, []);

  if (!tourPackage) {
    return <Typography variant="h4" color="error">Package not found</Typography>;
  }

  // Booking form state
  const [selectedPackage, setSelectedPackage] = React.useState(tourPackage.title);
  const [travelers, setTravelers] = React.useState(1);
  const [dates, setDates] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [rating, setRating] = React.useState(4.5);
  const [result, setResult] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false); // State for modal visibility

  const handleBooking = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formData = new FormData();
    formData.append("Package", selectedPackage); // Use package title
    formData.append("travelers", travelers);
    formData.append("travel_date", dates);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("access_key", "1510a139-e0ac-4347-98f3-01424627ef7e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Booking Submitted Successfully!");
        setIsModalOpen(true); // Open the modal on success
        e.target.reset(); // Reset form fields
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("There was an error submitting your booking.");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, fontFamily: 'Josefin Sans' }} data-aos="fade-in">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, fontFamily: 'Josefin Sans' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#1976d2', fontFamily: 'Josefin Sans' }}>
          Home
        </Link>
        <Typography color="textPrimary" sx={{ fontFamily: 'Josefin Sans' }}>{tourPackage.title}</Typography>
      </Breadcrumbs>

      {/* Image Section with Overlay */}
      <Box sx={{ mb: 4, position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={tourPackage.image}
          alt={tourPackage.title}
          sx={{ borderRadius: 2, boxShadow: 3 }}
        />
        {/* Overlay Title */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              fontFamily: 'Josefin Sans',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            {tourPackage.title}
          </Typography>
        </Box>
      </Box>

      {/* Content and Booking Form */}
      <Grid container spacing={4}>
        {/* Left Side - Package Details */}
        <Grid item xs={12} md={8}>
          {/* Ratings */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1, fontFamily: 'Josefin Sans' }}>
              {rating} / 5.0 (200 reviews)
            </Typography>
          </Box>

          {/* Description and Itinerary */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, fontFamily: 'Josefin Sans' }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans' }}>
              Package Overview
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontFamily: 'Josefin Sans' }}>
              {tourPackage.description}
            </Typography>
          </Paper>

          {/* Key Details Section with Icons */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <AccessTimeIcon sx={{ fontSize: 40, color: '#B17457' }} />
                <Typography variant="h6">Duration</Typography>
                <Typography variant="body2">{tourPackage.duration}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <AttachMoneyIcon sx={{ fontSize: 40, color: '#B17457' }} />
                <Typography variant="h6">Price</Typography>
                <Typography variant="body2">{tourPackage.price}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <StarIcon sx={{ fontSize: 40, color: '#B17457' }} />
                <Typography variant="h6">Activities</Typography>
                <Typography variant="body2">Sightseeing, Adventure, Cultural Exploration</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Back to Packages Button */}
          <Button variant="contained" sx={{ fontFamily: 'Josefin Sans', backgroundColor: '#B17457', color: '#fff', borderRadius: 2, marginBottom: '10px', boxShadow: 3, ':hover': { boxShadow: 6 } }} onClick={() => window.history.back()}>
            ← Back to Packages
          </Button>
        </Grid>

        {/* Right Side - Booking Form */}
        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ p: 4, boxShadow: 3, fontFamily: 'Josefin Sans', marginBottom: '10px' }}>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Josefin Sans' }}>Book This Package</Typography>
            <form onSubmit={handleBooking}>
              {/* Select Package Field */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Select Package</InputLabel>
                <Select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  label="Select Package"
                >
                  {packageData.map(pkg => (
                    <MenuItem key={pkg.id} value={pkg.title}> {/* Change here to use title */}
                      {pkg.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Name Field */}
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 3, fontFamily: 'Josefin Sans' }}
                required
              />
              
              {/* Phone Field */}
              <TextField
                label="Phone"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{ mb: 3, fontFamily: 'Josefin Sans' }}
                required
              />

              {/* Email Field */}
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 3, fontFamily: 'Josefin Sans' }}
                required
              />

              {/* Travelers Field */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Number of Travelers</InputLabel>
                <Select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  label="Number of Travelers"
                >
                  {[...Array(20)].map((_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Travel Dates Field */}
              <TextField
                label="Travel Dates"
                type="date"
                fullWidth
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                sx={{ mb: 3, fontFamily: 'Josefin Sans' }}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#B17457', color: '#ffffff', fontFamily: 'Josefin Sans' }}
              >
                Submit Booking
              </Button>
            </form>
            {/* Result Message */}
            {result && <Typography variant="body2" sx={{ color: 'green', mt: 2, fontFamily: 'Josefin Sans' }}>{result}</Typography>}
          </Paper>
        </Grid>
      </Grid>

      {/* Success Modal */}
      {isModalOpen && (
        <SuccessModal 
          successMessage="Your booking has been submitted successfully!" 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </Container>
  );
};

export default TourPackageDetails;
