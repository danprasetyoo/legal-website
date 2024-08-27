import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/pages/admin/login/AuthContext';
import AdminView from './components/pages/admin/AdminView';
import ClientView from './components/pages/client/ClientView';
import theme from './theme';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {/* Client Routes */}
          <Route path="/" element={<ClientView />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <AuthProvider>
                <AdminView />
              </AuthProvider>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
