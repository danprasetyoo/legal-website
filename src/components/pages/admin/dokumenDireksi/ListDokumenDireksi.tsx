import {
  Flex,
  Stack,
  SimpleGrid,
  chakra,
  Button,
  IconButton,
  Icon,
  ButtonGroup,
  Text,
  Box,
} from '@chakra-ui/react';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
// import Add from './Add';
// import Edit from './Edit';
// import Danger from '../../../future/danger';

const ListDokumenDireksi = () => {
  const { mutate } = useSWRConfig();

  // Adjusted endpoint and fetcher to reflect the `akta` model
  const fetcher = async () => {
    const response = await axios.get(`http://localhost:5000/akta`);
    return response.data.map((item: any) => ({
      ...item,
      createdAt: new Date(item.createAt).toLocaleDateString('en-GB'),
    }));
  };

  const { data } = useSWR('akta', fetcher);

  //   if (!data) return <Danger />;

  const deleteAkta = async (aktaId: number) => {
    await axios.delete(`http://localhost:5000/akta/${aktaId}`);
    mutate('akta');
  };

  const handleViewDocument = (url: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box bg="white">
      <Text
        fontSize="4xl"
        textAlign="center"
        fontFamily="poppins"
        fontWeight="bold"
        pt={5}
      >
        Daftar Dokumen Direksi
      </Text>
      {/* <Add /> */}
      <Flex
        w="full"
        bg="white"
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction={{ base: 'column' }} w="100%" bg="white" shadow="lg">
          {data === null ? (
            <></>
          ) : (
            data.map((akta: any) => (
              <Flex
                direction={{ base: 'row', md: 'column' }}
                bg="white"
                key={akta.id}
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 4 }}
                  w={{ base: 130, md: 'full' }}
                  textTransform="uppercase"
                  bg="gray.200"
                  color="black.500"
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="bold"
                >
                  <chakra.span>Nama File</chakra.span>
                  <chakra.span>Description</chakra.span>
                  <chakra.span>Type</chakra.span>
                  <chakra.span>Date</chakra.span>
                  <chakra.span>Document</chakra.span>
                  <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
                </SimpleGrid>
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 4 }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="hairline"
                >
                  <chakra.span>{akta.name}</chakra.span>
                  <chakra.span>{akta.description}</chakra.span>
                  <chakra.span>{akta.type}</chakra.span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {akta.createdAt}
                  </chakra.span>
                  <Flex>
                    <Button
                      size="sm"
                      variant="solid"
                      leftIcon={<Icon as={AiTwotoneLock} />}
                      colorScheme="purple"
                      onClick={() =>
                        handleViewDocument(
                          `http://localhost:5000/uploads/${akta.id}`,
                          akta.name
                        )
                      }
                    >
                      Lihat Dokumen
                    </Button>
                  </Flex>
                  <Flex justify={{ md: 'end' }}>
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      {/* <Edit id={akta.id} /> */}
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                        onClick={() => deleteAkta(akta.id)}
                      />
                    </ButtonGroup>
                  </Flex>
                </SimpleGrid>
              </Flex>
            ))
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ListDokumenDireksi;
