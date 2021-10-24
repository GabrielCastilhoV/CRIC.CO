import { Box, Flex, Text } from '@chakra-ui/react';

interface ITitle {
  name: string;
}

export const Title = ({ name }: ITitle) => {
  return (
    <Box mb="10px">
      <Flex align="center">
        <Text
          py="10px"
          mr="10px"
          w={['240px', '300px']}
          fontSize={['20px', '30px']}
          fontWeight="700"
        >
          {name}
        </Text>

        <Box
          bg="linear-gradient(90deg, #FFFFFF 45.42%, rgba(255, 255, 255, 0) 101.86%)"
          h="2px"
          w="100%"
        />
      </Flex>
    </Box>
  );
};
