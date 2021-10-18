import {
  Avatar,
  Flex,
  Box,
  Button,
  Grid,
  IconButton,
  HStack,
  Image,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';

import Link from 'next/link';
import { Notification } from '@/components/elements/Notification';
import { User } from '@/components/elements/User';
import { SearchBox } from '@/components/elements/SearchBox';

import { AiOutlineMenu } from 'react-icons/ai';
import { useSidebarDrawer } from '@/context/SidebarDrawerContext';

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const showProfile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Box h="6rem" borderBottom="1px solid" borderColor="gray.100" bg="gray.700">
      <Flex w="90%" justify="space-between" align="center" m="20px auto">
        <Link href="/" passHref>
          <Box as="a">
            <Image src="/assets/logo.svg" alt="CRIC.CO" w="32" />
          </Box>
        </Link>

        <IconButton
          w="45px"
          h="45px"
          bg="gray.650"
          icon={<AiOutlineMenu color="gray.600" size="20px" />}
          aria-label="Menu"
          onClick={onOpen}
          _hover={{
            background: 'gray.800',
          }}
        />
      </Flex>

      <HStack
        display="flex"
        align="center"
        justify="space-between"
        spacing={5}
        w="90%"
        m="50px auto"
      >
        <SearchBox />

        <Stack spacing={5} direction="row">
          <Notification isNotification />
          {showProfile && (
            <User image="https://github.com/gabrielcastilhov.png" />
          )}
        </Stack>
      </HStack>
    </Box>
  );
};
