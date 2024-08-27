import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import NavbarMenus from './navbar/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavbarMenus />
      <Box as="main" flex="1" p={4}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
