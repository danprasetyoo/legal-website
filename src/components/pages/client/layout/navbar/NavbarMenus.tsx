import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Collapse,
  Image,
  VStack,
  Link as ChakraLink,
  useDisclosure,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, NavItemOrGroup, NavGroup } from '../NavigationItems';
import { navbarStyles } from './Navbar.styles';
import IndonesiaRe from '../../../../assets/client/IndonesiaRe.png';

// Type guard to check if item is NavGroup
const isNavGroup = (item: NavItemOrGroup): item is NavGroup => 'items' in item;

const NavbarMenus: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [bgColor, setBgColor] = useState('transparent');
  const [linkColor, setLinkColor] = useState('black');
  const [isDokumenOpen, setIsDokumenOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 48em)').matches
  ); // Check if the screen is mobile
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBgColor('white');
      setLinkColor('black');
    } else {
      setBgColor('transparent');
      setLinkColor('black');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 48em)').matches); // Update isMobile based on screen width
    };

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup listeners on component unmount
    return () => {
      if (!isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const toggleDokumen = () => {
    setIsDokumenOpen(!isDokumenOpen);
  };

  const renderNavItems = (items: NavItemOrGroup[], isMobile: boolean) => {
    return items.map((item, index) => {
      if (isNavGroup(item)) {
        // Handle NavGroup
        return (
          <Box key={index} position="relative">
            <ChakraLink
              as={Link}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                if (isMobile) {
                  toggleDropdown(index);
                } else {
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  );
                }
              }}
              sx={{
                ...navbarStyles.link,
                color: linkColor,
                fontWeight: 'bold',
                _before: {
                  ...navbarStyles.link._before,
                  width: openDropdownIndex === index ? '100%' : '0%',
                },
                _hover: navbarStyles.link._hover,
                _activeLink: navbarStyles.link._activeLink,
              }}
            >
              {item.label}
              <Icon
                as={ChevronRightIcon}
                sx={{
                  ...navbarStyles.dropdownIcon,
                  ...(openDropdownIndex === index &&
                    navbarStyles.dropdownIconOpen),
                }}
              />
            </ChakraLink>
            <Box
              sx={{
                ...navbarStyles.dropdown,
                ...(openDropdownIndex === index &&
                  navbarStyles.dropdownVisible),
              }}
            >
              <Stack spacing={3} mt={2}>
                {item.items.map((subItem) => (
                  <ChakraLink
                    key={subItem.path}
                    as={Link}
                    to={subItem.path}
                    sx={navbarStyles.dropdownItem}
                  >
                    {subItem.label}
                  </ChakraLink>
                ))}
              </Stack>
            </Box>
          </Box>
        );
      } else {
        // Handle NavItem
        return (
          <ChakraLink
            key={index}
            as={Link}
            to={item.path}
            sx={navbarStyles.link}
          >
            {item.label}
          </ChakraLink>
        );
      }
    });
  };

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
      backdropFilter="blur(1px)"
      transition="background-color 0.3s ease, box-shadow 0.3s ease"
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} p={4}>
        {/* Logo */}
        <HStack spacing={8} alignItems={'center'}>
          <Link to="/">
            <Image
              src={IndonesiaRe}
              alt="Company Logo"
              sx={navbarStyles.logo}
            />
          </Link>
        </HStack>

        {/* Navigation links for larger screens */}
        <HStack
          as={'nav'}
          display={{ base: 'none', md: 'flex' }}
          sx={navbarStyles.navLinkContainer}
        >
          {renderNavItems(navigationItems, false)}
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
          alignItems={'flex-start'}
          sx={navbarStyles.mobileMenu}
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
              <VStack
                spacing={3}
                alignItems={'flex-start'}
                sx={navbarStyles.mobileMenu}
              >
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
                  to="/dokumen/asset"
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
