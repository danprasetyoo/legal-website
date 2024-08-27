import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarMenus from './navbar/Navbar'; // Import your Navbar component

const ClientView: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navbar at the top */}
      <Box
        as="header"
        bg="white"
        p={4}
        boxShadow="md"
        position="sticky"
        top={0}
        zIndex={1}
        width="full"
      >
        <NavbarMenus />
      </Box>

      {/* Main content area */}
      <Box as="main" flex="1" p={4} mt={4}>
        <Routes>
          {/* Example routes */}
          {/* <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          /> */}
          {/* Redirect any unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </Flex>
  );
};

export default ClientView;
