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
import { Link } from 'react-router-dom';
import { navigationItems, NavItemOrGroup, NavGroup } from '../NavigationItems';
import { navbarStyles } from './Navbar.styles';
import IndonesiaRe from '../../../../assets/client/IndonesiaRe.png';

// Type guard to check if item is NavGroup
const isNavGroup = (item: NavItemOrGroup): item is NavGroup => 'items' in item;

const NavbarMenus: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDokumenOpen, setIsDokumenOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [linkColor, setLinkColor] = useState(''); // Set link color to #9d9fa2

  const toggleDokumen = () => setIsDokumenOpen(!isDokumenOpen);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setBgColor('white');
      setLinkColor('black');
    } else {
      setBgColor('transparent');
      setLinkColor('black');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavItems = (items: NavItemOrGroup[], isMobile: boolean) => {
    return items.map((item, index) => {
      if (isNavGroup(item)) {
        // Handle NavGroup
        return (
          <Box key={index} position="relative">
            <ChakraLink
              as={Link}
              to="#"
              onClick={isMobile ? toggleDokumen : undefined}
              sx={{
                ...navbarStyles.link,
                color: linkColor,
                fontWeight: 'bold',
                _before: {
                  ...navbarStyles.link._before,
                  width: isDokumenOpen && isMobile ? '100%' : '0%',
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
                  ...(isDokumenOpen &&
                    isMobile &&
                    navbarStyles.dropdownIconOpen),
                }}
              />
            </ChakraLink>
            <Collapse in={isDokumenOpen && isMobile}>
              <Stack spacing={2} mt={2} sx={navbarStyles.dropdown}>
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
            </Collapse>
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
          spacing={5}
          alignItems={'center'}
          sx={navbarStyles.mobileMenu}
        >
          {renderNavItems(navigationItems, true)}
        </VStack>
      </Collapse>
    </Box>
  );
};

export default NavbarMenus;
