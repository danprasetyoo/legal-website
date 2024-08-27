import { SystemStyleObject } from '@chakra-ui/react';

export const navbarStyles = {
  container: {
    bg: 'white', // Background color for the navbar
    px: 6, // Horizontal padding
    py: 3, // Increased padding for better spacing
    boxShadow: 'md', // Subtle shadow
    borderBottomWidth: '1px',
  },
  logo: {
    width: '100px', // Set a specific width
    height: 'auto', // Maintain aspect ratio
    maxWidth: '100%', // Ensure logo doesn't exceed container width
  },
  link: {
    fontSize: 'lg',
    fontWeight: 'bold', // Bold font for prominence
    color: 'blue.700', // Primary text color
    position: 'relative', // Position relative for the pseudo-element
    display: 'inline-block', // Ensure the underline animation works
    _before: {
      content: '""', // Required for pseudo-element
      position: 'absolute',
      left: 0,
      bottom: -2, // Space below the text
      width: '0%', // Default width for non-active links
      height: '3px', // Slightly thicker underline
      bg: 'red.500', // Underline color for better contrast
      transition: 'width 0.3s ease, left 0.3s ease', // Smooth transition for width and position
    },
    _hover: {
      textDecoration: 'none',
      color: 'red.500', // Color on hover
      _before: {
        width: '100%', // Full width on hover
        left: 0, // Align underline with the text
      },
    },
    _activeLink: {
      color: 'red.500', // Color for active links
      _before: {
        width: '100%', // Full width for active links
        left: 0, // Align underline with the text
      },
    },
  },
  navLinkContainer: {
    spacing: 6, // Increased spacing between links
    pr: 6, // Right padding to create space on the right edge
  },
  dropdown: {
    bg: 'white',
    boxShadow: 'md', // Subtle shadow for the dropdown
    borderRadius: 'md', // Rounded corners
    p: 4,
    mt: 2, // Margin-top for spacing below the parent link
    position: 'absolute', // Use absolute positioning for dropdown
    zIndex: 10, // Ensure dropdown is on top
    w: '240px', // Wider dropdown for better readability
    border: '1px solid',
    borderColor: 'blue.300', // Border color for the dropdown
  },
  dropdownItem: {
    display: 'block', // Ensures each item is a block-level element
    padding: 3, // Increased padding for each dropdown item
    borderRadius: 'md', // Rounded corners for items
    color: 'blue.700', // Text color for dropdown items
    _hover: {
      bg: 'blue.50', // Background color on hover
      textDecoration: 'none', // Ensure no underline on hover
    },
  },
  dropdownIcon: {
    ml: 2, // Margin-left to space the icon from the text
    color: 'blue.700', // Icon color
    transition: 'transform 0.3s ease', // Smooth rotation animation
  },
  dropdownIconOpen: {
    transform: 'rotate(90deg)', // Rotate the icon when open
  },
  mobileMenu: {
    spacing: 5, // Increased spacing for mobile menu items
    alignItems: 'center',
    bg: 'white',
    p: 5, // Increased padding for mobile menu
    px: 6, // Horizontal padding
    borderTopWidth: '1px',
    borderTopColor: 'blue.300', // Border color for mobile menu
  },
} as const;
