import { Box, Image } from '@chakra-ui/react';
import { Title } from './Title';

export const Banner = () => {
  return (
    <Box w="90%" m="0 auto">
      <Title name="Todays Match" />

      <Image src="/assets/bannerMobile.png" alt="Banner IPL 2021" />
    </Box>
  );
};
