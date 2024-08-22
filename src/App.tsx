import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme'; // Import your custom theme

export const App = () => (
  <ChakraProvider theme={theme}>
    {' '}
    {/* Use the custom theme */}
    <BrowserRouter></BrowserRouter>
  </ChakraProvider>
);
