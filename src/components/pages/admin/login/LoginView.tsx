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

const LoginView: React.FC = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" />;
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
        width={{ base: '90%', sm: '400px' }}
      >
        <Heading mb={6} textAlign="center">
          Log In
        </Heading>

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
            placeholder="Enter your username"
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
            placeholder="Enter your password"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginView;
