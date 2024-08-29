import React from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// Define a single color theme
const colorTheme = {
  light: { bg: 'blue.50', hover: 'blue.100', text: 'blue.800' },
  dark: { bg: 'blue.900', hover: 'blue.700', text: 'white' },
};

const cardImages = [
  'https://via.placeholder.com/300x200', // Replace with actual image URLs
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
  'https://via.placeholder.com/300x200',
];

const CardsPage: React.FC = () => {
  // Define card data with paths and colors
  const cards = [
    {
      title: 'Undang-Undang',
      description: 'Peraturan dan hukum yang berlaku.',
      path: '/undang-undang', // Path to navigate
    },
    {
      title: 'POJK',
      description: 'Peraturan Otoritas Jasa Keuangan.',
      path: '/pojk', // Path to navigate
    },
    {
      title: 'Permen BUMN',
      description: 'Peraturan Menteri BUMN.',
      path: '/permen-bumn', // Path to navigate
    },
    {
      title: 'Dokumen Perusahaan',
      description: 'Dokumen penting perusahaan.',
      path: '/dokumen-perusahaan', // Path to navigate
    },
  ];

  // Responsive grid columns
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  // Determine the color theme based on the current color mode
  const colorMode = useColorModeValue('light', 'dark');
  const colors = colorTheme[colorMode];

  return (
    <Box
      p={6}
      bg={useColorModeValue('gray.50', 'gray.800')} // Page background color
      // minH="100vh" // Ensure full viewport height
    >
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Informasi Utama
      </Heading>
      <SimpleGrid columns={columns} spacing={8}>
        {cards.map((card, index) => (
          <Link to={card.path} key={index} style={{ textDecoration: 'none' }}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              bg={colors.bg}
              p={4}
              _hover={{
                bg: colors.hover,
                shadow: 'lg',
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease',
              }} // Hover effect
              transition="all 0.3s ease"
            >
              <Image
                src={cardImages[index]} // Image for the card
                alt={card.title}
                borderRadius="md"
                mb={4}
                width="full"
                height="200px" // Fixed height
                objectFit="cover" // Ensure the image covers the card area
              />
              <Heading
                as="h2"
                size="lg"
                mb={4}
                fontWeight="bold"
                color={colors.text}
              >
                {card.title}
              </Heading>
              <Text
                fontSize="md"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                {card.description}
              </Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CardsPage;
