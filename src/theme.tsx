import { extendTheme } from '@chakra-ui/react';

// Define the custom theme
const theme = extendTheme({
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Arial, sans-serif',
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
  },
  colors: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#FFFFFF  ',
    },
    secondary: {
      light: '#000000',
      main: '#FFFFFF',
      dark: '#000000',
    },
    background: {
      light: '#FFFFFF',
      dark: '#FFFFFF',
    },
    text: {
      light: '#000000',
      dark: '#FFFFFF',
    },
  },
});

export default theme;
