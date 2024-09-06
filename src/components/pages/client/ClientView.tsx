import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './render/Homepage';
import AktaPerusahaan from './render/AktaPerusahaan';
import AssetPerusahaan from './render/AssetPerusahaan';
import SopLegal from './render/SopLegal';
import MateriLegal from './render/MateriLegal';
import ProfilLegal from './render/ProfilLegal';

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
          <Route
            path="/dokumen/asset"
            element={
              <Layout>
                <AssetPerusahaan />
              </Layout>
            }
          />
          <Route
            path="/dokumen/sk-sop-legal"
            element={
              <Layout>
                <SopLegal />
              </Layout>
            }
          />
          <Route
            path="/materi-legal"
            element={
              <Layout>
                <MateriLegal />
              </Layout>
            }
          />
          <Route
            path="/profil-legal"
            element={
              <Layout>
                <ProfilLegal />
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
