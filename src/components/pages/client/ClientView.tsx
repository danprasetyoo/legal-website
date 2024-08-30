import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './render/Homepage';
import AktaPerusahaan from './render/AktaPerusahaan';

const ClientView: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box as="main" flex="1">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/dokumen/akta"
            element={
              <Layout>
                <AktaPerusahaan />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </Flex>
  );
};

export default ClientView;
