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
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import AddDokumenDireksi from './AddDokumenDireksi'; // Uncomment if Add component is needed
import EditDokumenDireksi from './EditDokumenDireksi'; // Uncomment if Edit component is needed

// Define the fetcher function
const fetcher = async () => {
  const response = await axios.get('http://localhost:5000/akta');
  return response.data;
};

const ListDokumenDireksi = () => {
  const { data, error } = useSWR('akta', fetcher);
  const { mutate } = useSWRConfig();

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Failed to load data.
      </Alert>
    );
  }

  if (!data) {
    return <Spinner />;
  }

  const aktaData = Array.isArray(data) ? data : [];

  const deleteAkta = async (aktaId: number) => {
    try {
      await axios.delete(`http://localhost:5000/akta/${aktaId}`);
      mutate('akta');
    } catch (error) {
      console.error('Failed to delete akta:', error);
    }
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
    <Box bg="white" p={4}>
      <Text
        fontSize="6xl"
        textAlign="center"
        fontFamily="body" // Use the font family defined in theme
        fontWeight="bold"
        mb={6} // Margin-bottom for spacing
      >
        Akta Perusahaan
      </Text>
      <AddDokumenDireksi />
      <Flex
        w="full"
        bg="white"
        p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction={{ base: 'column' }} w="100%" bg="white" shadow="lg">
          {aktaData.length === 0 ? (
            <Text textAlign="center" p={4} fontSize="md">
              No records found.
            </Text>
          ) : (
            aktaData.map((akta: any) => (
              <Flex
                direction={{ base: 'row', md: 'column' }}
                bg="white"
                key={akta.id}
                mb={4} // Margin-bottom for spacing between rows
              >
                <SimpleGrid
                  spacing={4} // Adjust column spacing
                  columns={{ base: 1, md: 6 }}
                  w={{ base: 130, md: 'full' }}
                  textTransform="uppercase"
                  bg="gray.200"
                  color="black.500"
                  py={{ base: 2, md: 4 }} // Adjust vertical padding
                  px={{ base: 2, md: 6 }} // Adjust horizontal padding
                  fontSize="md" // Use font size from theme
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
                  spacing={4} // Adjust column spacing
                  columns={{ base: 1, md: 6 }}
                  w="full"
                  py={2}
                  px={{ base: 2, md: 6 }} // Adjust horizontal padding
                  fontSize="md" // Use font size from theme
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
                    {new Date(akta.createAt).toLocaleDateString('en-GB')}
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
                      <EditDokumenDireksi id={akta.id} />
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
