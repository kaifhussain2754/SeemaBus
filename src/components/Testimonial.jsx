import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import testimonials from './testdata';
import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  const getCardsToShow = () => {
    if (isXl) return 4;
    if (isLg) return 3;
    if (isMd) return 2;
    return 1;
  };

  const cardsToShow = getCardsToShow();
  const totalSlides = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (totalSlides + 1)) % (totalSlides + 1));
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoPlaying, nextSlide]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundImage: 'url(/testbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          mx: 'auto',
          px: 2,
          py: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            TRAVELERS REVIEW
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
            100% True Reviews from Our Satisfied Customers.
          </Typography>
        </Box>
        <Box
          sx={{ position: 'relative', overflow: 'hidden' }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                sx={{
                  flex: `0 0 ${100 / cardsToShow}%`,
                  px: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 3,
                    '&:hover': { transform: 'translateY(-5px)' },
                    transition: 'transform 0.3s ease-in-out',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#F3F3F3',
                        borderRadius: '50%',
                        p: 1,
                        mr: 2,
                      }}
                    >
                      <User sx={{ color: 'gray' }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                        {testimonial.name}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    {testimonial.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <IconButton
            onClick={prevSlide}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#B17457',
              color: 'white',
              padding: 1,
              '&:hover': { backgroundColor: '#8f5d4a' },
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={nextSlide}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translate(50%, -50%)',
              backgroundColor: '#B17457',
              color: 'white',
              padding: 1,
              '&:hover': { backgroundColor: '#8f5d4a' },
            }}
            aria-label="Next slide"
          >
            <ChevronRight />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1.5 }}>
          {[...Array(totalSlides + 1)].map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: '14px',
                height: '14px',
                minWidth: 0,
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? '#B17457' : 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  backgroundColor: currentIndex === index ? '#B17457' : 'rgba(255, 255, 255, 0.75)',
                },
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
