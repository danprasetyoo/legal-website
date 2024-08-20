import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import SidebarContent from './components/pages/admin/sidebar/SidebarContent';
import AppRoutes from './components/pages/AppRoutes';
import theme from './theme'; // Import your custom theme

export const App = () => (
  <ChakraProvider theme={theme}>
    {' '}
    {/* Use the custom theme */}
    <BrowserRouter>
      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens and horizontally on medium and up
        minHeight="100vh" // Ensure full height of viewport
      >
        {/* Sidebar */}
        <Box
          as="aside"
          w={{ base: 'full', md: '250px' }} // Full width on small screens, fixed width on medium and up
          display={{ base: 'none', md: 'block' }} // Hide on small screens
          bg="white"
          p={4}
          position="relative" // Ensure proper positioning
        >
          <SidebarContent />
        </Box>

        {/* Main content */}
        <Box
          as="main"
          flex="1" // Allow main content to take up the remaining space
          p={4}
        >
          <AppRoutes />
        </Box>
      </Flex>
    </BrowserRouter>
  </ChakraProvider>
);
