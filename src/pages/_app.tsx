import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import { AppLayout } from '@/components/layouts/App';

import { SidebarDrawerProvider } from '@/context/SidebarDrawerContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AppLayout>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </AppLayout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
