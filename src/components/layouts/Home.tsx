import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Banner } from '@/components/elements/Banner';
import { Title } from '../elements/Title';
import { SliderElement } from '../elements/Slider';
import { Cards } from '../elements/Card/Cards';

export const HomeLayout = () => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });
  return (
    <Box w="90%" m="0 auto">
      <Banner />

      <Box my={['20px', '5px']}>
        <Title name="Highlights" />
        {isMobileVersion ? <SliderElement /> : <Cards />}
      </Box>
    </Box>
  );
};
