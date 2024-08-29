import React from 'react';
import { Flex, Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import AleaIcon from '../../../assets/client/pngwing.com (3).png';
import Arrow from '../../../assets/client/pngwing.com (4).png';

const CallAleaPage: React.FC = () => {
  // Perbesar ukuran gambar
  const imageSize = useBreakpointValue({ base: '200px', md: '500px' });
  const arrowSize = useBreakpointValue({ base: '150px', md: '200px' });

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center" // Center items horizontally
      justify="center" // Center items vertically
      height="80vh"
      p={4}
      bg="background.light"
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
        <Image
          src={AleaIcon}
          alt="Robot"
          boxSize={imageSize}
          objectFit="contain"
        />
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
          color="primary.main"
        >
          Call Alea
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="text.black" p={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quisquam
          voluptate error exercitationem obcaecati inventore voluptatum id eius
          eligendi magnam enim assumenda eveniet corrupti fuga pariatur eum,
          nisi iusto. Delectus.
        </Text>
        {/* <Image
          src={Arrow}
          alt="Arrow"
          boxSize={arrowSize}
          transform="rotate(180deg)"
        /> */}
      </Flex>
    </Flex>
  );
};

export default CallAleaPage;
