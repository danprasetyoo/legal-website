import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import NavbarMenus from './navbar/NavbarMenus';
import Carousel from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavbarMenus />
      <Carousel />
      <Box as="main" flex="1" bg="gray.100">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
