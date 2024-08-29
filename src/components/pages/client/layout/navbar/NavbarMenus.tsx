import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapse,
  Image,
  VStack,
  useDisclosure,
  Link as ChakraLink,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { navbarStyles } from './Navbar.styles';
import IndonesiaRe from '../../../../assets/client/IndonesiaRe.png';

const NavbarMenus: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const location = useLocation();
  const [isDokumenOpen, setIsDokumenOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [linkColor, setLinkColor] = useState('white');

  const toggleDokumen = () => setIsDokumenOpen(!isDokumenOpen);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setBgColor('white');
      setLinkColor('black');
    } else {
      setBgColor('transparent');
      setLinkColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      bg={bgColor}
      px={navbarStyles.container.px}
      py={navbarStyles.container.py}
      boxShadow={bgColor === 'white' ? 'md' : 'none'}
      position="fixed"
      top={0}
      width="full"
      zIndex={1000}
      backdropFilter="blur(0px)"
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} p={4}>
        {/* Logo */}
        <HStack spacing={8} alignItems={'center'}>
          <Link to="/">
            <Image
              src={IndonesiaRe}
              alt="Company Logo"
              width="80px"
              height="50px"
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
              color: linkColor,
              fontWeight: 'bold',
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
                color: linkColor,
                fontWeight: 'bold',
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
            <Collapse in={isDokumenOpen}>
              <Stack {...navbarStyles.dropdown}>
                <ChakraLink
                  as={Link}
                  to="/dokumen/akta"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    color: linkColor,
                    fontWeight: 'bold',
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
                    color: linkColor,
                    fontWeight: 'bold',
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
                    color: linkColor,
                    fontWeight: 'bold',
                    ...(location.pathname === '/dokumen/sk-sop-legal'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  SK SOP Legal
                </ChakraLink>
              </Stack>
            </Collapse>
          </Box>

          <ChakraLink
            as={Link}
            to="/materi-legal"
            sx={{
              ...navbarStyles.link,
              color: linkColor,
              fontWeight: 'bold',
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
              color: linkColor,
              fontWeight: 'bold',
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
              color: linkColor,
              fontWeight: 'bold',
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
                color: linkColor,
                fontWeight: 'bold',
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
            <Collapse in={isDokumenOpen}>
              <VStack {...navbarStyles.mobileMenu}>
                <ChakraLink
                  as={Link}
                  to="/dokumen/akta"
                  sx={{
                    ...navbarStyles.link,
                    ...navbarStyles.dropdownItem,
                    color: linkColor,
                    fontWeight: 'bold',
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
                    color: linkColor,
                    fontWeight: 'bold',
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
                    color: linkColor,
                    fontWeight: 'bold',
                    ...(location.pathname === '/dokumen/sk-sop-legal'
                      ? navbarStyles.link._activeLink
                      : {}),
                  }}
                >
                  SK SOP Legal
                </ChakraLink>
              </VStack>
            </Collapse>
          </Box>

          <ChakraLink
            as={Link}
            to="/materi-legal"
            sx={{
              ...navbarStyles.link,
              color: linkColor,
              fontWeight: 'bold',
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
              color: linkColor,
              fontWeight: 'bold',
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
