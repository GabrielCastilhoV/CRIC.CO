import { CgSearch } from 'react-icons/cg';
import { Flex, IconButton, Input } from '@chakra-ui/react';

export const SearchBox = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p="5px 20px"
      w="100%"
      maxW={500}
      h="50px"
      borderRadius="40px"
      bg="gray.650"
    >
      <Input variant="unstyled" placeholder="Search" color="gray.50" />

      <IconButton
        bg="gray.650"
        isRound
        icon={<CgSearch color="gray.600" size="20px" />}
        aria-label="Search"
        _hover={{
          background: 'gray.700',
        }}
      />
    </Flex>
  );
};
