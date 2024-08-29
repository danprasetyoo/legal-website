import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const SeparatorPage: React.FC = () => {
  return (
    <Flex
      position="relative"
      width="full"
      height="350px"
      backgroundImage="url('https://cdn.antaranews.com/cache/1200x800/2024/03/11/Foto-Gedung-Indonesia-Re-1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      px={0}
      py={0}
      borderRadius="sm"
    >
      <Flex
        direction="column"
        width="100%"
        maxW={{ base: '90%', md: '1200px' }}
        // bg="rgba(0, 0, 0, 0.5)"
        p={6}
        borderRadius="md"
      >
        <Heading as="h1" size={{ base: 'lg', md: 'xl' }} mb={4}>
          TUJUAN MEMBANTU BISNIS PERUSAHAAN SESUAI DENGAN GOOD CORPORATE
          GOVERNANCE
        </Heading>
      </Flex>
    </Flex>
  );
};

export default SeparatorPage;
