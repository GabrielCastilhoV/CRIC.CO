import { Box, Flex, Text } from '@chakra-ui/react';

interface ITitle {
  name: string;
}

export const Title = ({ name }: ITitle) => {
  return (
    <Box mb="10px">
      <Flex align="center">
        <Text py="10px" mr="10px" w="200px">
          {name}
        </Text>

        <Box bg="gray.100" h="2px" w="100%" />
      </Flex>
    </Box>
  );
};
