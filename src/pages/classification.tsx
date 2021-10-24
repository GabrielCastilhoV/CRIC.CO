import { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import { HomeLayout } from '@/components/layouts/Home';
import { PointsTable } from '@/components/modules/PointsTable';

const Classification: NextPage = () => (
  <Box mt={['40px', '10px']}>
    <PointsTable />
  </Box>
);

export default Classification;
