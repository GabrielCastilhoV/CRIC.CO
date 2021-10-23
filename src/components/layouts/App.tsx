import { Grid, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Sidebar } from '@/components/modules/Sidebar';
import { Header } from '@/components/modules/Header';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface AppLayout {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayout) => {
  const isMobileVersion = useBreakpointValue({ base: true, lg: false });

  return (
    <Grid h="100%">
      <Grid
        h="100%"
        w="100%"
        templateColumns={['100%', '100%', '100%', '266px 1fr']}
      >
        <Sidebar />
        {isMobileVersion && <Header />}

        {children}
      </Grid>
    </Grid>
  );
};
