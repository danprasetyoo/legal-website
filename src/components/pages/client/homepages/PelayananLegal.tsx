import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
  useTheme,
} from '@chakra-ui/react';

const services = [
  {
    id: 1,
    title: 'Pengajuan Legal Opinion',
    description:
      'Ajukan legal opinion untuk mendapatkan panduan hukum terkait isu atau keputusan yang Anda hadapi.',
  },
  {
    id: 2,
    title: 'Review Dokumen',
    description:
      'Dapatkan tinjauan mendalam terhadap dokumen hukum Anda untuk memastikan kepatuhan dan kelengkapan.',
  },
  {
    id: 3,
    title: 'Konsultasi Legal',
    description:
      'Konsultasikan masalah hukum Anda dengan ahli kami untuk solusi yang tepat dan efektif.',
  },
];

const PelayananLegal: React.FC = () => {
  const { colors } = useTheme();
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box
      maxW="1200px"
      width="100%"
      minH="80vh"
      bg={colors.primary.light}
      borderRadius="md"
      p={{ base: 6, md: 8, lg: 10 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        mb={{ base: 6, md: 8, lg: 10 }}
        textAlign="center"
        color={colors.primary.main}
      >
        Pelayanan Legal RIU
      </Heading>
      <SimpleGrid columns={columnCount} spacing={{ base: 6, md: 8, lg: 10 }}>
        {services.map((service) => (
          <Box
            key={service.id}
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
            bg={colors.primary.main}
            borderColor={colors.primary.dark}
            p={{ base: 6, md: 8 }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box>
              <Heading
                fontSize={{ base: 'lg', md: 'xl' }}
                mb={4}
                color={colors.text.light}
              >
                {service.title}
              </Heading>
              <Text
                color={colors.text.light}
                fontSize={{ base: 'sm', md: 'md' }}
              >
                {service.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PelayananLegal;
