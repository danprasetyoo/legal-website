import React from 'react';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
// import Carousel from '../layout/carousel/Carousel';
import PelayananLegal from '../homepages/PelayananLegal';
import SeparatorPage from '../homepages/SeparatorPage';
import CallAleaPage from '../homepages/CallAleaPage';
import CardsPage from '../homepages/CardsPage';

const HomePage: React.FC = () => {
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

  return (
    <Box bg="#FFFFFF">
      {/* <Carousel /> */}
      <Container
        maxW="container.xl"
        p={containerPadding}
        bg="#FFFFFF"
        mt={8}
        mb={12}
      >
        <PelayananLegal />
      </Container>
      <Box bg="#FFFFFF" py={12}>
        <SeparatorPage />
      </Box>
      <Container maxW="container.xl" bg="#FFFFFF" p={containerPadding} mt={12}>
        <CallAleaPage />
      </Container>
      <Box bg="#FFFFFF" py={12}>
        <Container maxW="container.xl" p={containerPadding} bg="#FFFFFF">
          <CardsPage />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
