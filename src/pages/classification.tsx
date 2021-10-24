import { NextPage } from 'next';

import { Box } from '@chakra-ui/react';
import { PointsTable } from '@/components/layouts/PointsTable';

const Classification: NextPage = () => (
  <Box mt={['40px', '10px']}>
    <PointsTable />
  </Box>
);

export default Classification;
