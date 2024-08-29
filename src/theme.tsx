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
  colors: {
    primary: {
      light: '#E0F2F1', // Light color
      main: '#004D40', // Main color
      dark: '#00332B', // Dark color
    },
    secondary: {
      light: '#FFE0B2',
      main: '#FF9800',
      dark: '#F57C00',
    },
    background: {
      light: '#FFFFFF',
      dark: '#303030',
    },
    text: {
      light: '#F0F0F0',
      dark: '#FFFFFF',
    },
  },
});

export default theme;
