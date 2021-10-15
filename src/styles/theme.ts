import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      800: '#13131A',
      700: 'linear-gradient(167.03deg, #282833 2.56%, #121217 97.88%)',
      600: '#4b4944',
      200: '#868686',
      50: '#FFF',
    },
    blue: {
      400: '#008CD3',
    },
    purple: {
      400: '#3F3655',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.50',
      },
    },
  },
});
