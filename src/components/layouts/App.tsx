import { Box, Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/modules/Sidebar';

interface AppLayout {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayout) => {
  return (
    <Grid h="100vh">
      <Grid h="100%" w="100%" templateColumns="266px 1fr">
        <Sidebar />
        {children}
      </Grid>
    </Grid>
  );
};
