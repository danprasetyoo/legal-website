import React from 'react';
import { Flex, Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';

const CallAleaPage: React.FC = () => {
  const imageSize = useBreakpointValue({ base: '150px', md: '300px' });
  const arrowSize = useBreakpointValue({ base: '100px', md: '150px' });

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      height="100vh"
      p={4}
      bg="background.light"
      gap={6}
    >
      <Box flex={{ base: 'none', md: '1' }} textAlign="center" p={4}>
        <Image
          src="https://example.com/path/to/robot.png"
          alt="Robot"
          boxSize={imageSize}
          objectFit="contain"
        />
      </Box>
      <Flex
        direction="column"
        flex={{ base: 'none', md: '2' }}
        align="center"
        justify="center"
        textAlign="center"
        p={4}
        gap={4}
      >
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          fontWeight="bold"
          color="primary.main"
        >
          Call Alea
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="text.light">
          Some description or call-to-action text goes here. Make it compelling!
        </Text>
        <Image
          src="https://example.com/path/to/arrow.png"
          alt="Arrow"
          boxSize={arrowSize}
          transform="rotate(180deg)"
        />
      </Flex>
    </Flex>
  );
};

export default CallAleaPage;
