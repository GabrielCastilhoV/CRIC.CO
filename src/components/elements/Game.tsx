import { Box, Image, Flex, Stack } from '@chakra-ui/react';
import { ButtonElement } from './Button';

export const Game = () => {
  return (
    <Box>
      <Stack position="relative">
        <Image
          src="/assets/games/gameOne.png"
          alt="game"
          w={['100%', '550px']}
          h={['100%', '350px']}
        />

        <ButtonElement />
      </Stack>
    </Box>
  );
};
