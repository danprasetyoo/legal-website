import React from 'react';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import PelayananLegal from '../homepages/PelayananLegal';
import SeparatorPage from '../homepages/SeparatorPage';
import CallAleaPage from '../homepages/CallAleaPage';
import CardsPage from '../homepages/CardsPage';

const HomePage: React.FC = () => {
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

  return (
    <Box>
      <Box
        bg="#124d83"
        // py={12}
      >
        <Container
          maxW="container.xl"
          p={containerPadding}
          bg="#124d83"
          // mt={8}
          mb={12}
        >
          <PelayananLegal />
        </Container>
      </Box>
      <Box bg="#F5F5F5" py={15}>
        <SeparatorPage />
      </Box>
      <Box bg="#F5F5F5">
        <Container
          maxW="container.xl"
          bg="#F5F5F5"
          p={containerPadding}
          mt={12}
        >
          <CallAleaPage />
        </Container>
      </Box>
      <Box bg="#F5F5F5" py={12}>
        <Container maxW="container.xl" p={containerPadding} bg="#F5F5F5">
          <CardsPage />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
