import React, { useState, useEffect } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { carouselStyles } from './Carousel.styles';
import Slide1 from '../../../assets/client/carousel.jpg';
import Slide2 from '../../../assets/client/carousel_2.jpg';

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  { id: 1, image: Slide1, alt: 'Image 1' },
  { id: 2, image: Slide2, alt: 'Image 2' },
  // Add more slides as needed
];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={carouselStyles.container}>
      <Box
        as={motion.div}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition="all 0.5s ease-in-out"
        sx={carouselStyles.slide}
      >
        <Box
          sx={{
            ...carouselStyles.slideImage,
            backgroundImage: `url(${slides[index].image})`,
          }}
        />
        {/* Removed button elements and mobile buttons */}
      </Box>
    </Box>
  );
};

export default Carousel;
