import { Box, Image, Flex, Icon, Stack, Switch, Text } from '@chakra-ui/react';

import { RiArrowRightSLine } from 'react-icons/ri';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { FiMonitor, FiUserPlus } from 'react-icons/fi';

export const Profile = () => {
  return (
    <Box borderTop="1px solid" borderColor="gray.200">
      <Box p="15px 0">
        <Flex align="center">
          <Image
            src="/assets/profile.jpg"
            alt="user"
            borderRadius="full"
            border="1px solid"
            borderColor="gray.50"
            w="50px"
          />

          <Box pl="10px">
            <Text fontWeight="700">Gabriel Castilho</Text>

            <Flex align="center" color="gray.100">
              <Text fontSize="14px" fontWeight="400">
                3 in the huddle
              </Text>
              <Icon as={RiArrowRightSLine} fontSize="20px" />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Stack direction="row" spacing={5} pt="10px" color={'gray.100'}>
        <Icon
          as={HiOutlineMicrophone}
          fontSize="20px"
          transition="opacity 0.2s"
          _hover={{ cursor: 'pointer', opacity: 0.6 }}
        />
        <Icon
          as={FiMonitor}
          fontSize="20px"
          transition="opacity 0.2s"
          _hover={{ cursor: 'pointer', opacity: 0.6 }}
        />
        <Icon
          as={FiUserPlus}
          transition="opacity 0.2s"
          fontSize="20px"
          _hover={{ cursor: 'pointer', opacity: 0.6 }}
        />

        <Switch />
      </Stack>
    </Box>
  );
};
