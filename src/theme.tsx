import { extendTheme } from '@chakra-ui/react';

// Define the custom theme
const theme = extendTheme({
  fonts: {
    body: 'Arial, sans-serif', // Change to your preferred sans-serif font
    heading: 'Arial, sans-serif',
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
});

export default theme;
