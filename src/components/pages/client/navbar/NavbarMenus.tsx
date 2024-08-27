import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapse,
  Image,
  VStack,
  useDisclosure,
  useColorModeValue,
  Link as ChakraLink,
  Collapse as ChakraCollapse,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { navbarStyles } from './Navbar.styles';
import IndonesiaRe from '../../../assets/client/IndonesiaRe.png';

const NavbarMenus: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const [isDokumenOpen, setIsDokumenOpen] = useState(false);

  const toggleDokumen = () => setIsDokumenOpen(!isDokumenOpen);

  return (
    <Box
      bg={useColorModeValue(navbarStyles.container.bg, 'gray.900')}
      px={navbarStyles.container.px}
      py={navbarStyles.container.py}
      boxShadow={navbarStyles.container.boxShadow}
      borderBottomWidth={navbarStyles.container.borderBottomWidth}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Logo */}
        <HStack spacing={8} alignItems={'center'}>
          <Link to="/">
            <Image
              src={IndonesiaRe} // Path to your logo image
              alt="Company Logo"
              {...navbarStyles.logo}
            />
          </Link>
        </HStack>

        {/* Navigation links for larger screens */}
        <HStack
          as={'nav'}
          display={{ base: 'none', md: 'flex' }}
          {...navbarStyles.navLinkContainer}
        >
          <ChakraLink
            as={Link}
            to="/"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Home
          </ChakraLink>

          <Box position="relative">
            <ChakraLink
              as={Link}
              to="#"
              onClick={toggleDokumen}
              sx={{
                ...navbarStyles.link,
                ...(location.pathname.startsWith('/dokumen')
                  ? navbarStyles.link._activeLink
                  : {}),
              }}
            >
              Dokumen Perusahaan
              <Icon
                as={ChevronRightIcon}
                sx={{
                  ...navbarStyles.dropdownIcon,
                  ...(isDokumenOpen ? navbarStyles.dropdownIconOpen : {}),
                }}
              />
            </ChakraLink>
            <ChakraCollapse in={isDokumenOpen}>
              <Stack {...navbarStyles.dropdown}>
                <ChakraLink
                  as={Link}
                  to="/dokumen/akta"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/akta'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  Akta Perusahaan
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/dokumen/aset"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/aset'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  Aset Perusahaan
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/dokumen/sk-sop-legal"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/sk-sop-legal'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  SK SOP Legal
                </ChakraLink>
              </Stack>
            </ChakraCollapse>
          </Box>

          <ChakraLink
            as={Link}
            to="/materi-legal"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/materi-legal'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Materi Legal
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/profil-legal"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/profil-legal'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Profil Legal
          </ChakraLink>
        </HStack>

        {/* Mobile menu button */}
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
        />
      </Flex>

      {/* Mobile menu */}
      <Collapse in={isOpen}>
        <VStack
          as={'nav'}
          display={{ base: 'flex', md: 'none' }}
          spacing={4}
          alignItems={'center'}
        >
          <ChakraLink
            as={Link}
            to="/"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Home
          </ChakraLink>
          <Box position="relative">
            <ChakraLink
              as={Link}
              to="#"
              onClick={toggleDokumen}
              sx={{
                ...navbarStyles.link,
                ...(location.pathname.startsWith('/dokumen')
                  ? navbarStyles.link._activeLink
                  : {}),
              }}
            >
              Dokumen Perusahaan
              <Icon
                as={ChevronRightIcon}
                sx={{
                  ...navbarStyles.dropdownIcon,
                  ...(isDokumenOpen ? navbarStyles.dropdownIconOpen : {}),
                }}
              />
            </ChakraLink>
            <ChakraCollapse in={isDokumenOpen}>
              <VStack {...navbarStyles.mobileMenu}>
                <ChakraLink
                  as={Link}
                  to="/dokumen/akta"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/akta'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  Akta Perusahaan
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/dokumen/aset"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/aset'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  Aset Perusahaan
                </ChakraLink>
                <ChakraLink
                  as={Link}
                  to="/dokumen/sk-sop-legal"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    ...(location.pathname === '/dokumen/sk-sop-legal'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  SK SOP Legal
                </ChakraLink>
              </VStack>
            </ChakraCollapse>
          </Box>

          <ChakraLink
            as={Link}
            to="/materi-legal"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/materi-legal'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Materi Legal
          </ChakraLink>

          <ChakraLink
            as={Link}
            to="/profil-legal"
            sx={{
              ...navbarStyles.link,
              ...(location.pathname === '/profil-legal'
                ? navbarStyles.link._activeLink
                : {}),
            }}
          >
            Profil Legal
          </ChakraLink>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavbarMenus;
