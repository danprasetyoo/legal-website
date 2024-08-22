import React from 'react';
import { Select, Flex } from '@chakra-ui/react';

interface FilterByTypeProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const FilterByType: React.FC<FilterByTypeProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <Flex mb={4} justify="center">
      <Select
        placeholder="All"
        onChange={(e) => onTypeChange(e.target.value)}
        value={selectedType}
        maxW="200px"
      >
        {/* <option value="">All</option> */}
        <option value="DIREKSI">Direksi</option>
        <option value="PERUSAHAAN">Perusahaan</option>
      </Select>
    </Flex>
  );
};

export default FilterByType;
