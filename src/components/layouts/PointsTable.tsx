import { Box, Flex, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Classification } from '../elements/Classification';
import { Notification } from '../elements/Notification';
import { SearchBox } from '../elements/SearchBox';
import { User } from '../elements/User';

export const PointsTable = () => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });
  return (
    <Box w="90%" m="20px auto 0">
      {!isMobileVersion && (
        <Flex align="center" justify="space-between">
          <SearchBox />

          <HStack spacing={8}>
            <Notification isNotification />
            <User image="https://github.com/gabrielcastilhov.png" />
          </HStack>
        </Flex>
      )}
      <Classification />
    </Box>
  );
};
