import React from 'react';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import Carousel from '../homepages/carousel/Carousel';
import PelayananLegal from '../homepages/PelayananLegal';
import SeparatorPage from '../homepages/SeparatorPage';
import CallAleaPage from '../homepages/CallAleaPage';
import CardsPage from '../homepages/CardsPage';

const HomePage: React.FC = () => {
  const containerPadding = useBreakpointValue({ base: 4, md: 8, lg: 12 });

  return (
    <Box>
      <Carousel />
      <Container maxW="container.xl" p={containerPadding} mt={8} mb={12}>
        <PelayananLegal />
      </Container>
      <Box bg="background.light" py={12}>
        {/* <Container maxW="container.xl" p={containerPadding}> */}
        <SeparatorPage />
        {/* </Container> */}
      </Box>
      <Container maxW="container.xl" p={containerPadding} mt={12}>
        <CallAleaPage />
      </Container>
      <Box bg="background.light" py={12}>
        <Container maxW="container.xl" p={containerPadding}>
          <CardsPage />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
