import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const LoginView = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Indore2024*') {
      login(username, password);
    } else {
      setError('Invalid username or password');
    }
  };

  // Redirect to /admin/akta if the user is authenticated
  if (isAuthenticated) {
    return <Navigate to="/admin" />;
  }

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        onSubmit={handleSubmit}
      >
        <Heading mb={6}>Log In</Heading>

        {error && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}

        <FormControl mb={3}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            placeholder="admin"
            type="text"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            placeholder="**********"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" type="submit" mb={8}>
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginView;
