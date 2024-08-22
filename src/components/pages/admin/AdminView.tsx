import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './login/AuthContext';
import PrivateRoute from './login/PrivateRoute';
import LoginView from './login/LoginView';
import ListDokumenDireksi from './dokumen/ListDokumen';
import SidebarContent from './sidebar/SidebarContent';

const AdminView: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Determine if the current path is the login route
  const isLoginPage = location.pathname === '/admin/login';

  // Render different layouts based on authentication status
  return (
    <AuthProvider>
      <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh">
        {/* Conditionally render the sidebar */}
        {isAuthenticated && !isLoginPage && (
          <Box
            as="aside"
            w={{ base: 'full', md: '250px' }}
            display={{ base: 'none', md: 'block' }}
            bg="white"
            p={4}
            position="relative"
          >
            <SidebarContent />
          </Box>
        )}

        <Box as="main" flex="1" p={4}>
          <Routes>
            <Route path="/admin/login" element={<LoginView />} />
            <Route
              path="/admin/akta"
              element={<PrivateRoute element={<ListDokumenDireksi />} />}
            />
            {/* Add other protected routes here */}
            <Route path="/admin/*" element={<Navigate to="/admin/login" />} />
          </Routes>
        </Box>
      </Flex>
    </AuthProvider>
  );
};

export default AdminView;
