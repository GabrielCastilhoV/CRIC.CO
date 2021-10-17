import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ElementType } from 'react';

interface ActiveLink {
  path: string;
  icon: ElementType;
  title: string;
}

export const ActiveLink = ({ path, icon, title }: ActiveLink) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (router.pathname === path) {
      setIsActive(true);
    }
  }, [router, path]);

  return (
    <Box h="full" position="relative">
      <Flex h="full" align="center">
        <Link href={path} passHref>
          <Flex
            align="center"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Icon as={icon} fontSize="40" pr="10px" />

            <Text
              as="a"
              fontSize="24px"
              p="0 0.5rem"
              fontWeight={isActive ? 500 : 400}
              color={isActive ? 'gray.50' : 'gray.200'}
              transition="opacity 0.3s"
              _hover={{
                opacity: '0.8',
              }}
            >
              {title}
            </Text>
          </Flex>
        </Link>
      </Flex>
      {isActive && (
        <Box
          h="full"
          borderRadius="5px"
          bg="blue.400"
          w={1}
          position="absolute"
          top={0}
          left={-5}
        />
      )}
    </Box>
  );
};
