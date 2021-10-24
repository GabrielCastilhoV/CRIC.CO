import {
  Box,
  Flex,
  HStack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Title } from '../elements/Title';
import { Game } from '../elements/Game';
import { Notification } from '../elements/Notification';
import { User } from '../elements/User';
import { SearchBox } from '../elements/SearchBox';

export const ListGames = () => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });
  return (
    <Box w="90%" m="20px auto 40px">
      {!isMobileVersion && (
        <Flex align="center" justify="space-between">
          <SearchBox />

          <HStack spacing={8}>
            <Notification isNotification />
            <User image="https://github.com/gabrielcastilhov.png" />
          </HStack>
        </Flex>
      )}

      <Box mt="30px">
        <Title name="Games" />

        <HStack
          display="flex"
          align="center"
          justify="center"
          wrap="wrap"
          spacing={[0, 5]}
        >
          <Game />
          <Game />
        </HStack>

        <Flex align="center" justify="center">
          <Button
            variant="solid"
            w="200px"
            h="50px"
            bg="gray.650"
            _hover={{
              background: 'gray.700',
            }}
          >
            Show More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
