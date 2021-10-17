import { Avatar, Flex, Box, Button, Image, Stack } from '@chakra-ui/react';

import Link from 'next/link';
import { Notification } from '@/components/elements/Notification';
import { User } from '@/components/elements/User';

export const Header = () => {
  return (
    <Box h="6rem" borderBottom="1px solid" borderColor="gray.100">
      <Flex w="90%" justify="space-between" align="center" m="20px auto">
        <Link href="/" passHref>
          <Box as="a">
            <Image src="/assets/logo.svg" alt="CRIC.CO" w="32" />
          </Box>
        </Link>

        <Stack spacing={5} direction="row">
          <Notification isNotification />

          <User image="https://github.com/gabrielcastilhov.png" />
        </Stack>
      </Flex>
    </Box>
  );
};
