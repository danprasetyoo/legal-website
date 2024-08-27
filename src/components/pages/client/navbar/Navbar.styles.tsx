// Navbar.styles.ts
import { useColorModeValue } from '@chakra-ui/react';

export const navbarStyles = {
  container: {
    bg: useColorModeValue('gray.100', 'gray.900'),
    px: 4,
  },
  link: {
    _hover: { textDecoration: 'none', color: 'teal.500' }, // Example hover styles
  },
};
