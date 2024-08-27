// Navbar.tsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapse,
  Text,
  VStack,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Text fontSize="xl" fontWeight="bold">
            MySite
          </Text>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </HStack>
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
        />
      </Flex>

      <Collapse in={isOpen}>
        <VStack
          as={'nav'}
          spacing={4}
          alignItems={'center'}
          display={{ base: 'flex', md: 'none' }}
          bg={useColorModeValue('gray.100', 'gray.900')}
          p={4}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
