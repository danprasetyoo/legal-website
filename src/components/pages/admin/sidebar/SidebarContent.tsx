import React from 'react';
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  Icon,
  Collapse,
} from '@chakra-ui/react';
import {
  MdBuild,
  MdHome,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdAdjust,
  MdReceipt,
} from 'react-icons/md';
import { IoMdCalculator, IoMdLogOut, IoMdPaper } from 'react-icons/io';
import NavItem from './SidebarItems';
import { Link } from 'react-router-dom';

const SidebarContent: React.FC = (props) => {
  const { isOpen: isReport, onToggle: onReport } = useDisclosure();
  const { isOpen: isClaim, onToggle: onClaim } = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="gray.50"
      borderRightWidth="2px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: '60' }}
      boxShadow="md"
      borderRadius="md"
      {...props}
    >
      <Flex
        px="4"
        py="5"
        justify="center"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/thumb/d/de/Logo_IndonesiaRe.svg/1200px-Logo_IndonesiaRe.svg.png"
          alt="Logo"
          boxSize="130px"
          objectFit="contain"
        />
      </Flex>

      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="black"
        aria-label="Main Navigation"
        my="4"
      >
        <Link to="/dashboard">
          <NavItem icon={MdHome}>Dashboard</NavItem>
        </Link>
        <NavItem icon={IoMdCalculator} onClick={onReport} isActive={isReport}>
          Reporting
          <Icon
            as={isReport ? MdKeyboardArrowDown : MdKeyboardArrowRight}
            ml="auto"
          />
        </NavItem>
        <Collapse in={isReport}>
          <Link to="/calculator">
            <NavItem pl="12" py="2">
              Calculator
            </NavItem>
          </Link>
          <Link to="/adjustmentpremium">
            <NavItem pl="12" py="2">
              Adjustment Premium
            </NavItem>
          </Link>
          <Link to="/data/staging">
            <NavItem pl="12" py="2">
              Data Staging
            </NavItem>
          </Link>
          <Link to="/data/base">
            <NavItem pl="12" py="2">
              Database
            </NavItem>
          </Link>
        </Collapse>
        <Link to="/tbill">
          <NavItem icon={MdBuild}>TBill</NavItem>
        </Link>
        <NavItem icon={IoMdPaper} onClick={onClaim} isActive={isClaim}>
          Claims
          <Icon
            as={isClaim ? MdKeyboardArrowDown : MdKeyboardArrowRight}
            ml="auto"
          />
        </NavItem>
        <Collapse in={isClaim}>
          <Link to="/claims/input">
            <NavItem pl="12" py="2">
              Claims Input
            </NavItem>
          </Link>
          <Link to="/claims/table">
            <NavItem pl="12" py="2">
              Claims Table
            </NavItem>
          </Link>
        </Collapse>
        <Link to="/logout">
          <NavItem icon={IoMdLogOut}>Logout</NavItem>
        </Link>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
