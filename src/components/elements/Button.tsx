import { IconButton, Text } from '@chakra-ui/react';

import { BsRecordCircle } from 'react-icons/bs';

export const ButtonElement = () => {
  return (
    <IconButton
      display="flex"
      as="a"
      target="_blank"
      variant="unstyled"
      href="https://www.iplt20.com/"
      alignItems="center"
      bg="linear-gradient(90deg, #A80317 0%, #E0253C 100%);"
      color="gray.50"
      w={['150px', '200px']}
      h="50px"
      p="25px 20px"
      position="relative"
      bottom="80px"
      left="15%"
      aria-label="Game"
      _hover={{
        background: 'linear-gradient(90deg, #A80317 0%, #E0253C 50%);',
      }}
      icon={
        <>
          <BsRecordCircle size="20px" />
          <Text pl="10px">Watch Live</Text>
        </>
      }
    />
  );
};
