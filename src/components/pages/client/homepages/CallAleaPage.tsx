import React from 'react';
import {
  Flex,
  Box,
  Text,
  Image,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import AleaIcon from '../../../assets/client/pngwing.com (3).png';

const CallAleaPage: React.FC = () => {
  const imageSize = useBreakpointValue({ base: '200px', md: '500px' });

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      height="60vh"
      p={4}
      bg="#F5F5F5"
      gap={6}
    >
      <Box
        flex={{ base: 'none', md: '1' }}
        textAlign="center"
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          href="https://example.com"
          isExternal
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease',
          }}
        >
          <Image
            src={AleaIcon}
            alt="Robot"
            boxSize={imageSize}
            objectFit="contain"
            cursor="pointer"
          />
        </Link>
      </Box>
      <Flex
        direction="column"
        flex={{ base: 'none', md: '1' }}
        align="center"
        justify="center"
        textAlign="center"
        p={4}
        gap={4}
      >
        <Text
          fontSize={{ base: 'lg', md: '6xl' }}
          fontWeight="bold"
          color="primary.light"
        >
          Call Alea
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="primary.light" p={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quisquam
          voluptate error exercitationem obcaecati inventore voluptatum id eius
          eligendi magnam enim assumenda eveniet corrupti fuga pariatur eum,
          nisi iusto. Delectus.
        </Text>
      </Flex>
    </Flex>
  );
};

export default CallAleaPage;
