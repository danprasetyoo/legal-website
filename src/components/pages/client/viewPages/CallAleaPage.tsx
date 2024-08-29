import React from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

const CallAleaPage: React.FC = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }} // Column layout on mobile, row on larger screens
      align="center"
      justify="center"
      height="100vh"
      p={4}
      bg="gray.100" // Optional: background color for the page
    >
      {/* Robot Image Section */}
      <Box flex={{ base: 'none', md: '1' }} p={4} textAlign="center">
        <Image
          src="https://example.com/path/to/robot.png" // Replace with the actual path to the robot image
          alt="Robot"
          boxSize={{ base: '150px', md: '300px' }} // Responsive image size
          objectFit="contain"
        />
      </Box>

      {/* Text and Arrow Section */}
      <Flex
        direction="column"
        flex={{ base: 'none', md: '2' }}
        align="center"
        justify="center"
        textAlign="center"
        p={4}
      >
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold" mb={4}>
          Call Alea
        </Text>

        <Text fontSize={{ base: 'md', md: 'lg' }} mb={4}>
          Some description or call-to-action text goes here. Make it compelling!
        </Text>

        <Image
          src="https://example.com/path/to/arrow.png" // Replace with the actual path to the arrow image
          alt="Arrow"
          boxSize={{ base: '100px', md: '150px' }} // Responsive arrow size
          transform="rotate(180deg)" // Rotate the arrow to point left
        />
      </Flex>
    </Flex>
  );
};

export default CallAleaPage;
