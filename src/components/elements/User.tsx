import { Button, Avatar } from '@chakra-ui/react';

interface UserProps {
  image: string;
}

export const User = ({ image }: UserProps) => {
  return (
    <Button
      borderRadius="full"
      w="48px"
      h="48px"
      bg="gray.650"
      colorScheme="gray.650"
      border="1px solid #6C6782"
    >
      <Avatar src={image} size="md" />
    </Button>
  );
};
