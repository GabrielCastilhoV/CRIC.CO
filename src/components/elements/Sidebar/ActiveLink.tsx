import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ElementType } from 'react';

interface ActiveLink {
  path: string;
  icon: ElementType;
  title: string;
}

export const ActiveLink = ({ path, icon, title }: ActiveLink) => {
  const { asPath } = useRouter();

  function activeItem() {
    if (path === asPath) {
      return true;
    }

    return false;
  }

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
            <Icon as={icon} fontSize={['36', '40']} pr="10px" />

            <Text
              as="a"
              fontSize={['20px', '24px']}
              p="0 0.5rem"
              fontWeight={activeItem() ? 500 : 400}
              color={activeItem() ? 'gray.50' : 'gray.200'}
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
      {activeItem() && (
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
