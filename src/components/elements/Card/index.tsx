import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ICard {
  title: string;
  shortDescription: string;
  image: string;
}

export const Card = ({ title, shortDescription, image }: ICard) => {
  return (
    <Box
      w="100%"
      h="100%"
      position="relative"
      transition="opacity 0.3s"
      _hover={{ cursor: 'pointer', opacity: '0.8' }}
    >
      <Image borderRadius="10px" src={image} alt={title} />

      <Flex
        position="absolute"
        bottom="0"
        p="10px"
        w="100%"
        h="100%"
        align="center"
        flexDir="column"
        justify="flex-end"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 53.17%, rgba(0, 0, 0, 0.66) 69.73%, rgba(0, 0, 0, 0.87) 84.79%, rgba(0, 0, 0, 0.93) 100%)"
      >
        <Text fontWeight="700" fontSize="18px">
          {title}
        </Text>
        <Text>{shortDescription}</Text>
      </Flex>
    </Box>
  );
};
