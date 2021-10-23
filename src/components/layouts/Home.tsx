import { Box } from '@chakra-ui/react';
import { Banner } from '@/components/elements/Banner';
import { Title } from '../elements/Title';
import { SliderElement } from '../elements/Slider';

export const HomeLayout = () => {
  return (
    <Box w="90%" m="0 auto">
      <Banner />

      <Box my="20px">
        <Title name="Highlights" />
        <SliderElement />
      </Box>
    </Box>
  );
};
