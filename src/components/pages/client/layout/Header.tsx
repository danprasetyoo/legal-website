// src/components/HeaderImage.tsx

import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import {
  navigationItems,
  NavItemOrGroup,
  NavGroup,
  NavItem,
} from './NavigationItems';

// Helper function to find a NavItem by path
const findNavItem = (
  items: NavItemOrGroup[],
  path: string
): NavItem | undefined => {
  for (const item of items) {
    if (!('items' in item)) {
      // If it's a NavItem
      if (item.path === path) {
        return item;
      }
    } else {
      // If it's a NavGroup, check its items
      const foundItem = findNavItem(item.items, path);
      if (foundItem) {
        return foundItem;
      }
    }
  }
  return undefined;
};

const HeaderImage: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find the NavItem based on the current path
  const currentItem = findNavItem(navigationItems, currentPath);
  const caption = currentItem ? currentItem.label : 'Default Caption';

  // Responsive font size
  const fontSize = useBreakpointValue({
    base: 'lg',
    sm: 'xl',
    md: '4xl',
    lg: '5xl',
  });

  return (
    <Box
      position="relative"
      width="100%"
      height="450px" // Fixed height for image container
      bgImage="url('https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="rgba(0, 0, 0, 0)"
        color="white"
        p={4}
        borderRadius="md"
        textAlign="center"
        maxWidth={{ base: '90%', md: '80%' }}
      >
        <Text
          fontSize={fontSize}
          fontWeight="bold"
          textTransform="uppercase"
          mb={2}
          position="relative"
          color="white"
        >
          {caption}
          <Box
            position="absolute"
            bottom="-2px"
            left="0"
            width="100%"
            height="5px"
            bg="red.500"
          />
        </Text>
      </Box>
    </Box>
  );
};

export default HeaderImage;
