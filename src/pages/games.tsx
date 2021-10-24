import { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import { ListGames } from '@/components/layouts/ListGames';

const Games: NextPage = () => (
  <Box mt={['80px', '10px']}>
    <ListGames />
  </Box>
);

export default Games;
