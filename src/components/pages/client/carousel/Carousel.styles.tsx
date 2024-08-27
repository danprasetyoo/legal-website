// Carousel.styles.ts
import { SystemStyleObject } from '@chakra-ui/react';

export const carouselStyles = {
  container: {
    position: 'relative',
    width: 'full',
    height: { base: '400px', md: '550px' }, // Responsive height
    overflow: 'hidden',
    p: 0, // Ensure no padding
  },
  slide: {
    width: 'full',
    height: 'full',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slideImage: {
    width: 'full',
    height: 'full',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  // Remove button styles
  // button: {
  //   position: 'absolute',
  //   top: '50%',
  //   transform: 'translateY(-50%)',
  //   colorScheme: 'teal',
  //   size: 'lg',
  //   zIndex: 1,
  //   bg: 'transparent',
  //   border: '2px solid',
  //   borderColor: 'teal.500',
  //   _hover: {
  //     bg: 'rgba(0, 0, 0, 0.3)',
  //   },
  // },
  // prevButton: {
  //   left: '20px',
  // },
  // nextButton: {
  //   right: '20px',
  // },
  // mobileButtonsContainer: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   position: 'absolute',
  //   bottom: '10px',
  //   width: 'full',
  //   px: 4,
  //   p: 0,
  // },
};
