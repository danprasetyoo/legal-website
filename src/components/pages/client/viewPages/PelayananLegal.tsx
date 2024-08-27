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
    // image: PengajuanImage,
  },
  {
    id: 2,
    title: 'Review Dokumen',
    description:
      'Dapatkan tinjauan mendalam terhadap dokumen hukum Anda untuk memastikan kepatuhan dan kelengkapan.',
    // image: ReviewImage,
  },
  {
    id: 3,
    title: 'Konsultasi Legal',
    description:
      'Konsultasikan masalah hukum Anda dengan ahli kami untuk solusi yang tepat dan efektif.',
    // image: KonsultasiImage,
  },
];

const PelayananLegal: React.FC = () => {
  const { colors } = useTheme();
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box
      position="relative"
      bg={colors.whiteAlpha[900]} // White alpha background color
      p={{ base: 6, md: 8, lg: 10 }} // Padding for the outer box
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        backgroundImage="linear-gradient(135deg, rgba(0, 0, 0, 5.05) 25%, transparent 25%), linear-gradient(-135deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%)"
        backgroundSize="60px 60px"
        backgroundPosition="0 0, 20px 50px"
      />
      <Box
        maxW="1200px"
        width="100%"
        bg={colors.whiteAlpha[500]} // Background color for the main content
        borderRadius="md"
        p={{ base: 6, md: 8, lg: 10 }} // Padding inside the content box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
      >
        <Heading
          mb={{ base: 6, md: 8, lg: 10 }} // Bottom margin for the heading
          textAlign="center"
          color={colors.blue[500]} // Text color for heading
        >
          Pelayanan Legal RIU
        </Heading>
        <SimpleGrid
          columns={columnCount}
          spacing={{ base: 6, md: 8, lg: 10 }} // Spacing between grid items
        >
          {services.map((service) => (
            <Box
              key={service.id}
              borderWidth="2px" // Adjust border width
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.3s"
              _hover={{ boxShadow: 'lg', transform: 'scale(1.05)' }}
              bg={colors.red[500]} // Red background for cards
              borderColor={colors.red[600]} // Darker red border color for cards
              p={{ base: 6, md: 8 }} // Padding inside each card
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              {/* Uncomment and adjust the image size if you want to display images
              <Image
                src={service.image}
                alt={service.title}
                borderBottomWidth="1px"
                mb={4}
                boxSize="full"
                objectFit="cover"
                borderColor={colors.red[600]}
                borderBottomColor={colors.red[600]}
              />
              */}
              <Box>
                <Heading
                  fontSize={{ base: 'lg', md: 'xl' }}
                  mb={4}
                  color={colors.white} // White text color
                >
                  {service.title}
                </Heading>
                <Text
                  color={colors.whiteAlpha[900]} // Light white color for description
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  {service.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PelayananLegal;
