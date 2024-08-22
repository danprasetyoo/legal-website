import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Collapse,
  Divider,
  Text,
  useColorModeValue,
  VStack,
  useBreakpointValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
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
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
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
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
