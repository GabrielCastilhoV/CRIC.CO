import { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import { HomeLayout } from '@/components/layouts/Home';

const HomePage: NextPage = () => (
  <Box mt="40px">
    <HomeLayout />
  </Box>
);

export default HomePage;
