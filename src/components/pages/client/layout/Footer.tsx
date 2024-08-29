import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  Link as ChakraLink,
  Stack,
  Icon,
  useTheme,
} from '@chakra-ui/react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Box
      bg={colors.background.dark}
      color={colors.text.light}
      py={8}
      px={{ base: 4, md: 8 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        {/* Footer Navigation */}
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" fontSize="lg">
            Navigation
          </Text>
          <Stack spacing={2}>
            <ChakraLink
              as={Link}
              to="/"
              _hover={{ textDecoration: 'underline' }}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/about"
              _hover={{ textDecoration: 'underline' }}
            >
              About Us
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/services"
              _hover={{ textDecoration: 'underline' }}
            >
              Services
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/contact"
              _hover={{ textDecoration: 'underline' }}
            >
              Contact
            </ChakraLink>
          </Stack>
        </Stack>
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold" fontSize="lg">
            Contact Us
          </Text>
          <Stack spacing={2}>
            <Text>
              Email:{' '}
              <ChakraLink
                href="mailto:info@example.com"
                color={colors.primary.main}
              >
                info@example.com
              </ChakraLink>
            </Text>
            <Text>
              Phone:{' '}
              <ChakraLink href="tel:+1234567890" color={colors.primary.main}>
                +123 456 7890
              </ChakraLink>
            </Text>
          </Stack>
        </Stack>

        {/* Social Media Links */}
        <Stack spacing={4} alignItems="center">
          <Text fontWeight="bold" fontSize="lg">
            Follow Us
          </Text>
          <HStack spacing={4}>
            <ChakraLink href="https://facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={6} />
            </ChakraLink>
            <ChakraLink href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} boxSize={6} />
            </ChakraLink>
            <ChakraLink href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedinIn} boxSize={6} />
            </ChakraLink>
            <ChakraLink href="https://instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} />
            </ChakraLink>
          </HStack>
        </Stack>
      </Flex>

      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderTopWidth={1}
        borderColor={colors.border}
        pt={4}
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
