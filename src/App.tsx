import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/pages/admin/login/AuthContext';
import AdminView from './components/pages/admin/AdminView';
import ClientView from './components/pages/client/ClientView';
import LoginPage from './components/pages/admin/login/LoginView'; // Halaman login admin
import PrivateRoute from './components/pages/admin/login/PrivateRoute';
import theme from './theme';

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Client Routes */}
            <Route path="/" element={<ClientView />} />

            {/* Admin Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin/*"
              element={<PrivateRoute element={<AdminView />} />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </ChakraProvider>
  );
};
