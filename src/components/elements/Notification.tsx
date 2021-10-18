import { Box, Button, Icon } from '@chakra-ui/react';

import { IoMdNotificationsOutline } from 'react-icons/io';

interface NotificationProps {
  isNotification?: boolean;
}

export const Notification = ({ isNotification = false }: NotificationProps) => {
  return (
    <Button
      borderRadius="full"
      variant="unstyled"
      w="48px"
      h="48px"
      bg="gray.650"
      _hover={{
        background: 'gray.800',
      }}
    >
      <Icon as={IoMdNotificationsOutline} w="25px" h="25px" />

      {isNotification && (
        <Box
          position="absolute"
          bg="#E9001C"
          top="4px"
          right="2px"
          w="8px"
          h="8px"
          borderRadius="full"
        />
      )}
    </Button>
  );
};
