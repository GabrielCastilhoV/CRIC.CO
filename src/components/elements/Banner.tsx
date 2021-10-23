import { Box, Image } from '@chakra-ui/react';
import { Title } from './Title';

export const Banner = () => {
  return (
    <Box w="100%" mt="50px">
      <Title name="Todays Match" />

      <Image src="/assets/bannerMobile.png" alt="Banner IPL 2021" />
    </Box>
  );
};
