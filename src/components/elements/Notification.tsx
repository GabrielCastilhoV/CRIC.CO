import { Box, Button, Icon } from '@chakra-ui/react';

import { RiNotificationLine } from 'react-icons/ri';

interface NotificationProps {
  isNotification?: boolean;
}

export const Notification = ({ isNotification = false }: NotificationProps) => {
  return (
    <Button
      borderRadius="full"
      w="48px"
      h="48px"
      bg="gray.650"
      colorScheme="gray.650"
      border="1px solid #6C6782"
      position="relative"
    >
      <Icon as={RiNotificationLine} />
      {isNotification && (
        <Box
          position="absolute"
          bg="#E9001C"
          top="0"
          right="2px"
          w="8px"
          h="8px"
          borderRadius="full"
        />
      )}
    </Button>
  );
};
