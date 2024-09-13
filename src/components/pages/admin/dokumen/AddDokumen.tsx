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
import { useState } from 'react';
import axios from 'axios';

interface AddProps {
  onSuccess?: () => void; // Optional callback to refetch data or perform other actions
}

const AddDokumenDireksi = ({ onSuccess }: AddProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('DIREKSI');
  const [document, setDocument] = useState<File | null>(null);
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDocument(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !type || !document) {
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
    formData.append('document', document);

    try {
      await axios.post('http://localhost:5000/akta', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast({
        title: 'Akta created',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      onClose();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          title: 'Failed to create Akta',
          description: error.response?.data?.message || error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'An unexpected error occurred',
          description: (error as Error).message || 'Unknown error',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Add New Akta
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Akta</ModalHeader>
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
                <option value="PERUSAHAAN">PERUSAHAAN</option>
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

export default AddDokumenDireksi;
