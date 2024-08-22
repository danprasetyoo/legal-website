import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './components/pages/admin/login/AuthContext';
import AdminView from './components/pages/admin/AdminView';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <AuthProvider>
        <AdminView />
      </AuthProvider>
    </Router>
  </ChakraProvider>
);
