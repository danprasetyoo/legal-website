export const navbarStyles = {
  container: {
    px: 6,
    py: 3,
  },
  logo: {
    width: '90px',
    height: '50px',
    maxWidth: '100%',
    '@media (max-width: 48em)': {
      width: '70px',
      height: '40px',
    },
  },
  link: {
    fontSize: 'md',
    fontWeight: 'bold',
    color: 'black',
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
    gap: 6,
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
    display: 'none',
    top: '100%',
    left: 0,
    maxH: '400px',
    overflowY: 'auto',
    '@media (max-width: 48em)': {
      w: '100%',
      maxW: '300px',
    },
  },
  dropdownVisible: {
    display: 'block',
  },
  dropdownItem: {
    display: 'block',
    padding: 3,
    borderRadius: 'md',
    color: 'black',
    _hover: {
      bg: '#124d83',
      color: 'white',
      textDecoration: 'none',
    },
    '@media (max-width: 48em)': {
      fontSize: 'sm',
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
    borderTopWidth: '2px',
    borderTopColor: '#124d83',
  },
} as const;
