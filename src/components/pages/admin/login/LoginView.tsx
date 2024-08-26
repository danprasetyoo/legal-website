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
  Spinner,
} from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const LoginView: React.FC = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setIsLoading(true); // Start loading state

    try {
      await login(username, password);
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
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
        maxWidth="400px"
        w="100%"
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
            placeholder="********"
            type="password"
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        {isLoading ? (
          <Flex justifyContent="center" mb={8}>
            <Spinner size="lg" />
          </Flex>
        ) : (
          <Button
            colorScheme="teal"
            type="submit"
            mb={8}
            isDisabled={!username || !password || isLoading}
          >
            Log In
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default LoginView;
