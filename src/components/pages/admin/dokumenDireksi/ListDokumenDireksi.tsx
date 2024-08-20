import React from 'react';
import axios from 'axios';
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
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { AiTwotoneLock } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import useSWR, { useSWRConfig } from 'swr';
import FilterByType from './FilterByType';
import AddDokumenDireksi from './AddDokumenDireksi';
import EditDokumenDireksi from './EditDokumenDireksi';

const fetcher = async (filter: string) => {
  const url = filter
    ? `http://localhost:5000/akta?type=${filter}`
    : 'http://localhost:5000/akta';
  const response = await axios.get(url);
  return response.data;
};

const ListDokumenDireksi = () => {
  const [filter, setFilter] = React.useState<string>('');
  const { data, error } = useSWR(filter ? `akta-${filter}` : 'akta', () =>
    fetcher(filter)
  );
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
      mutate(filter ? `akta-${filter}` : 'akta');
    } catch (error) {
      console.error('Failed to delete akta:', error);
    }
  };

  const handleViewDocument = async (id: number, fileName: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/documents/${id}`,
        {
          responseType: 'blob', // Important for binary data
        }
      );

      if (response.status === 200 && response.data) {
        const url = window.URL.createObjectURL(
          new Blob([response.data], { type: 'application/pdf' })
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}.pdf`); // Adjust filename if needed
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error('Failed to download document:', response.data);
      }
    } catch (error) {
      console.error('Failed to download document:', error);
    }
  };

  return (
    <Box bg="white" p={4}>
      <Text
        fontSize="6xl"
        textAlign="center"
        fontFamily="body"
        fontWeight="bold"
        mb={6}
      >
        Akta Perusahaan
      </Text>
      <Flex justify="flex-end">
        <Grid templateColumns="repeat(2, auto)" gap={4}>
          <GridItem>
            <FilterByType selectedType={filter} onTypeChange={setFilter} />
          </GridItem>
          <GridItem>
            <AddDokumenDireksi />
          </GridItem>
        </Grid>
      </Flex>
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
            <>
              <SimpleGrid
                spacing={2}
                columns={{ base: 1, md: 7 }}
                w="full"
                textTransform="uppercase"
                bg="gray.200"
                color="black.500"
                py={{ base: 2, md: 4 }}
                px={{ base: 2, md: 6 }}
                fontSize="md"
                fontWeight="bold"
              >
                <chakra.span textAlign="center">Index</chakra.span>
                <chakra.span>Nama File</chakra.span>
                <chakra.span>Description</chakra.span>
                <chakra.span>Type</chakra.span>
                <chakra.span>Date</chakra.span>
                <chakra.span>Document</chakra.span>
                <chakra.span textAlign={{ md: 'right' }}>Actions</chakra.span>
              </SimpleGrid>
              {aktaData.map((akta: any, index: number) => (
                <Flex
                  direction={{ base: 'row', md: 'column' }}
                  bg="white"
                  key={akta.id}
                  mb={4}
                >
                  <SimpleGrid
                    spacing={4}
                    columns={{ base: 1, md: 7 }}
                    w="full"
                    py={2}
                    px={{ base: 2, md: 6 }}
                    fontSize="md"
                    fontWeight="hairline"
                  >
                    <chakra.span textAlign="center">{index + 1}</chakra.span>
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
                        onClick={() => handleViewDocument(akta.id, akta.name)}
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
              ))}
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ListDokumenDireksi;
