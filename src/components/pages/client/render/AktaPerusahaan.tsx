import React, { useEffect } from 'react';
import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';

const AktaPerusahaan: React.FC = () => {
  useEffect(() => {
    console.log('DokumenAktaPage loaded');
  }, []);

  const imageSize = useBreakpointValue({ base: '150px', md: '300px' });

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
      <Link
        href="https://docs.google.com/document/d/16Plfm33MVJAJ3mO5OHweD9Wnk3wqr8bZ/edit"
        isExternal
        _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
      >
        <Box
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          _hover={{ cursor: 'pointer' }}
        >
          <Image
            src="https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png"
            alt="Option 1"
            boxSize={imageSize}
            objectFit="cover"
          />
          <Text
            mt={2}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="primary.main"
          >
            Option 1
          </Text>
        </Box>
      </Link>
      <Link
        href="https://docs.google.com/document/d/16Plfm33MVJAJ3mO5OHweD9Wnk3wqr8bZ/edit"
        isExternal
        _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
      >
        <Box
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          _hover={{ cursor: 'pointer' }}
        >
          <Image
            src="https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png"
            alt="Option 2"
            boxSize={imageSize}
            objectFit="cover"
          />
          <Text
            mt={2}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="primary.main"
          >
            Option 2
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default AktaPerusahaan;
