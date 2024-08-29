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

// Define color themes for light and dark modes
const colorTheme = {
  light: { bg: '#FFFFFF', hover: 'blue.100', text: 'blue.800' },
  dark: { bg: 'blue.900', hover: 'blue.700', text: 'white' },
};

// Array of card images
const cardImages = [
  'https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDx7Z-4u20EXxhklpwJLCnWuXvRaUiLSjxqg&s',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/300px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png',
  'https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png',
];

const CardsPage: React.FC = () => {
  const cards = [
    {
      title: 'Undang-Undang',
      description: 'Peraturan dan hukum yang berlaku.',
      path: '/undang-undang',
    },
    {
      title: 'POJK',
      description: 'Peraturan Otoritas Jasa Keuangan.',
      path: '/pojk',
    },
    {
      title: 'Permen BUMN',
      description: 'Peraturan Menteri BUMN.',
      path: '/permen-bumn',
    },
    {
      title: 'Dokumen Perusahaan',
      description: 'Dokumen penting perusahaan.',
      path: '/dokumen-perusahaan',
    },
  ];

  const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const colorMode = useColorModeValue('light', 'dark');
  const colors = colorTheme[colorMode];

  return (
    <Box
      p={6}
      bgImage="url('https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_160x56dp.png')" // Replace with your desired background image URL
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading as="h1" size="2xl" mb={8} textAlign="center" color={colors.text}>
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
              h="full"
              _hover={{
                bg: colors.hover,
                shadow: 'lg',
                transform: 'translateY(-4px)',
                transition: 'all 0.3s ease',
              }}
            >
              <Image
                src={cardImages[index]}
                alt={card.title}
                borderRadius="md"
                mb={4}
                width="100%"
                height="200px"
                objectFit="cover"
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
