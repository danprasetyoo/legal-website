export const navbarStyles = {
  container: {
    px: 6,
    py: 3,
  },
  logo: {
    width: '80px',
    height: '90px',
    maxWidth: '100%',
  },
  link: {
    fontSize: 'md',
    fontWeight: 'bold',
    color: '#9d9fa2',
    position: 'relative',
    display: 'inline-block',
    _before: {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -2,
      width: '0%',
      height: '3px',
      bg: '#ee1431',
      transition: 'width 0.3s ease, left 0.3s ease',
    },
    _hover: {
      textDecoration: 'none',
      color: '#ee1431',
      _before: {
        width: '100%',
        left: 0,
      },
    },
    _activeLink: {
      color: '#ee1431',
      _before: {
        width: '100%',
        left: 0,
      },
    },
  },
  navLinkContainer: {
    spacing: 6,
    pr: 6,
  },
  dropdown: {
    bg: 'white',
    boxShadow: 'md',
    borderRadius: 'md',
    p: 4,
    mt: 2,
    position: 'absolute',
    zIndex: 10,
    w: '240px',
    border: '1px solid',
    borderColor: '#124d83',
  },
  dropdownItem: {
    display: 'block',
    padding: 3,
    borderRadius: 'md',
    color: 'black', // Set dropdown item color to black
    _hover: {
      bg: '#124d83', // Optional: Change background on hover
      color: 'white', // Optional: Change text color on hover
      textDecoration: 'none',
    },
  },
  dropdownIcon: {
    ml: 1,
    color: '#124d83',
    transition: 'transform 0.3s ease',
  },
  dropdownIconOpen: {
    transform: 'rotate(90deg)',
  },
  mobileMenu: {
    spacing: 5,
    alignItems: 'center',
    bg: 'white',
    p: 5,
    px: 6,
    borderTopWidth: '1px',
    borderTopColor: '#124d83',
  },
} as const;
