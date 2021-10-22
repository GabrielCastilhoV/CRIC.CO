import { useSidebarDrawer } from '@/context/SidebarDrawerContext';
import {
  Box,
  Flex,
  Stack,
  Image,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';

import Link from 'next/link';

import { Profile } from '../elements/Sidebar/Profile';
import { SidebarNav } from '../elements/Sidebar/SidebarNav';

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="35px" />

            <DrawerHeader borderBottomWidth="1px">
              <Link href="/" passHref>
                <Box as="a">
                  <Image src="/assets/logo.svg" alt="CRIC.CO" w="120px" />
                </Box>
              </Link>
            </DrawerHeader>

            <DrawerBody>
              <Flex h="full" align="center" justify="center">
                <SidebarNav />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Flex h="full" bg="gray.700" align="center" justify="center" py={5}>
      <Box h="full">
        <Stack spacing="40px" h="full" display="flex" justify="space-between">
          <Link href="/" passHref>
            <Box as="a">
              <Image src="/assets/logo.svg" alt="CRIC.CO" />
            </Box>
          </Link>

          <SidebarNav />
          <Profile />
        </Stack>
      </Box>
    </Flex>
  );
};
