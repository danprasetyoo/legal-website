import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const SeparatorPage: React.FC = () => {
  return (
    <Flex
      position="relative"
      width="full"
      height="100vh" // Full viewport height
      backgroundImage="url('https://cdn.antaranews.com/cache/1200x800/2024/03/11/Foto-Gedung-Indonesia-Re-1.jpg')"
      backgroundSize="cover" // Ensure image covers the entire container
      backgroundPosition="center" // Center the image
      backgroundRepeat="no-repeat" // Prevent repeating the image
      backgroundAttachment="fixed" // Fix the image in place
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      p={4}
    >
      <Flex
        direction="column"
        maxW={{ base: '90%', md: '600px' }} // Responsive width
        bg="rgba(0, 0, 0, 0.5)" // Semi-transparent background for better text visibility
        p={6}
        borderRadius="md"
      >
        <Heading as="h1" size={{ base: 'md', md: 'lg' }} mb={4}>
          TUJUAN MEMBANTU BISNIS PERUSAHAAN SESUAI DENGAN GOOD CORPORATE
          GOVERNANCE
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }}>
          Menyediakan panduan dan solusi untuk meningkatkan praktik corporate
          governance yang baik dalam bisnis perusahaan, memastikan transparansi,
          akuntabilitas, dan kinerja yang berkelanjutan.
        </Text>
      </Flex>
    </Flex>
  );
};

export default SeparatorPage;
