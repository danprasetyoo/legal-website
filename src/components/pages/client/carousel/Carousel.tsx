import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, Variants } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  { id: 1, image: '/path/to/image1.jpg', alt: 'Image 1' },
  { id: 2, image: '/path/to/image2.jpg', alt: 'Image 2' },
  { id: 3, image: '/path/to/image3.jpg', alt: 'Image 3' },
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

  const handleNext = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Box position="relative" width="full" overflow="hidden" height="300px">
      <Box
        as={motion.div}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition="all 0.5s ease-in-out"
        width="full"
        height="full"
        backgroundImage={`url(${slides[index].image})`}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        {!isMobile && (
          <>
            <IconButton
              aria-label="Previous Slide"
              icon={<ChevronLeftIcon />}
              position="absolute"
              top="50%"
              left="10px"
              transform="translateY(-50%)"
              colorScheme="teal"
              onClick={handlePrev}
              zIndex={1}
            />
            <IconButton
              aria-label="Next Slide"
              icon={<ChevronRightIcon />}
              position="absolute"
              top="50%"
              right="10px"
              transform="translateY(-50%)"
              colorScheme="teal"
              onClick={handleNext}
              zIndex={1}
            />
          </>
        )}
        {/* Mobile navigation controls (optional) */}
        {isMobile && (
          <Box
            display="flex"
            justifyContent="space-between"
            position="absolute"
            bottom="10px"
            width="full"
            px={4}
          >
            <IconButton
              aria-label="Previous Slide"
              icon={<ChevronLeftIcon />}
              colorScheme="teal"
              onClick={handlePrev}
            />
            <IconButton
              aria-label="Next Slide"
              icon={<ChevronRightIcon />}
              colorScheme="teal"
              onClick={handleNext}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Carousel;
