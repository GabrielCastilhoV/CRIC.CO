import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import { Title } from './Title';

export const Banner = () => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });
  return (
    <Box w="100%" mt={['50px', '0']}>
      <Title name="Todays Match" />

      <Box position="relative">
        <Image
          w="100%"
          h="100%"
          src={
            isMobileVersion ? '/assets/bannerMobile.png' : '/assets/banner.png'
          }
          alt="Banner IPL 2021"
        />

        {!isMobileVersion && (
          <Image
            position="absolute"
            bottom="0"
            right="0"
            h="22rem"
            src="/assets/polard.png"
            alt="Polard"
          />
        )}
      </Box>
    </Box>
  );
};
