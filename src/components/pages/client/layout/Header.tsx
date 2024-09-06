import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import CarouselImage from '../../../assets/client/carousel.jpg';

// Define types for page captions
interface PageCaptions {
  [key: string]: { caption: string };
}

// Define the captions for different routes
const pages: PageCaptions = {
  '/': { caption: 'Welcome Legal riu' },
  '/dokumen/akta': { caption: 'Akta Perusahaan Details' },
  '/dokumen/asset': { caption: 'Asset Perusahaan' },
  '/dokumen/sk-sop-legal': { caption: 'SK SOP Legal' },
  '/materi-legal': { caption: 'Materi Legal' },
  '/profil-legal': { caption: 'Profil Legal' },
};

// Define the type for the component props
const HeaderImage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Get caption based on the current path
  const { caption } = pages[currentPath] || { caption: 'Default Caption' };

  // Responsive font size
  const fontSize = useBreakpointValue({
    base: 'lg',
    sm: 'xl',
    md: '4xl',
    lg: '5xl',
  });

  return (
    <Box
      position="relative"
      width="100%"
      height="450px" // Fixed height for image container
      bgImage="url('https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent background for text
        color="white"
        p={4}
        borderRadius="md"
        textAlign="center"
        maxWidth={{ base: '90%', md: '80%' }} // Responsive max width
      >
        <Text
          fontSize={fontSize}
          fontWeight="bold"
          textTransform="uppercase"
          mb={2}
          position="relative"
          color="black"
        >
          {caption}
          <Box
            position="absolute"
            bottom="-2px"
            left="0"
            width="100%"
            height="2px"
            bg="red.500"
          />
        </Text>
      </Box>
    </Box>
  );
};

export default HeaderImage;
