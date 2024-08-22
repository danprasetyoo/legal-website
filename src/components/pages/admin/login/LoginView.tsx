import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const LoginView = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  // State to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the credentials are correct
    if (username === 'admin' && password === 'Indore2024*') {
      setIsAuthenticated(true);
      setError('');
      // Redirect to the next page or handle successful login
      // Example: window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password');
      setIsAuthenticated(false);
    }
  };

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

        {/* Display error message */}
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

        {/* <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl> */}
      </Flex>
    </Flex>
  );
};

export default LoginView;
