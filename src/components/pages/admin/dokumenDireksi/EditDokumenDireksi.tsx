import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSWRConfig } from 'swr';

interface EditProps {
  id: number;
}

const EditDokumenDireksi = ({ id }: EditProps) => {
  const { mutate } = useSWRConfig();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('DIREKSI');
  const [document, setDocument] = useState<File | null>(null);
  const toast = useToast();

  useEffect(() => {
    const fetchAkta = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/akta/${id}`);
        const akta = response.data;
        setName(akta.name);
        setDescription(akta.description);
        setType(akta.type);
      } catch (error) {
        // Type guard to handle unknown errors safely
        const errorMessage = axios.isAxiosError(error)
          ? error.response?.data?.message || error.message
          : 'Unknown error occurred';

        toast({
          title: 'Failed to load Akta',
          description: errorMessage,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    if (id) {
      fetchAkta();
    }
  }, [id, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDocument(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !type) {
      toast({
        title: 'Please fill all fields',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('type', type);
    if (document) {
      formData.append('document', document);
    }

    try {
      await axios.put(`http://localhost:5000/akta/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast({
        title: 'Akta updated',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      mutate('akta'); // Refresh SWR cache
      onClose();
    } catch (error) {
      // Type guard to handle unknown errors safely
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : 'Unknown error occurred';

      toast({
        title: 'Failed to update Akta',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Akta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Type</FormLabel>
              <Select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="DIREKSI">DIREKSI</option>
                <option value="PENDUKUNG">PENDUKUNG</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Document</FormLabel>
              <Input type="file" onChange={handleFileChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditDokumenDireksi;
