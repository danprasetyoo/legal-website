import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './login/AuthContext';
import PrivateRoute from './login/PrivateRoute';
import LoginView from './login/LoginView';
import ListDokumenDireksi from './dokumen/ListDokumen';
import SidebarContent from './sidebar/SidebarContent';

export default function App() {
  return (
    <AuthProvider>
      <Flex direction={{ base: 'column', md: 'row' }} minHeight="100vh">
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

        <Box as="main" flex="1" p={4}>
          <Routes>
            <Route path="/admin/login" element={<LoginView />} />
            <Route
              path="/admin/akta"
              element={<PrivateRoute element={<ListDokumenDireksi />} />}
            />
            {/* Add other protected routes here */}
          </Routes>
        </Box>
      </Flex>
    </AuthProvider>
  );
}
