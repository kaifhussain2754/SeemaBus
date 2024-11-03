import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const PricingModal = ({ showModal, handleClose, service }) => {
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="pricing-modal-title"
      aria-describedby="pricing-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: 400 }, // Responsive width using inline styles
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="pricing-modal-title" variant="h6" component="h2">
            {service ? `${service.title} Pricing` : 'Service Pricing'}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {service ? (
          <>
            <Typography id="pricing-modal-description" sx={{ mt: 2 }}>
              {service.description}
            </Typography>
            <Typography
              sx={{ mt: 2, whiteSpace: 'pre-line' }} // Ensure line breaks are rendered
            >
              {service.price}
            </Typography>
          </>
        ) : (
          <Typography sx={{ mt: 2 }}>
            No service selected. Please select a service to view its pricing.
          </Typography>
        )}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PricingModal;
