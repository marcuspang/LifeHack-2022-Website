import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    theme: {
      100: '#2B6ABC',
      200: '#0C53A6',
      300: '#003D82',
      400: '#002F63',
      500: '#141414',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'theme.500',
        color: 'gray.100',
      },
    },
  },
  components: {
    Button: {
      variants: {
        theme: {
          fontSize: 'sm',
          fontWeight: 600,
          bg: 'black',
          _hover: { bg: 'gray.700' },
          _active: {
            bg: 'gray.700',
          },
          color: 'gray.100',
        },
        header: {
          fontSize: 'sm',
          fontWeight: 600,
          bg: 'blue.700',
          _hover: { bg: 'blue.600' },
          _active: {
            bg: 'blue.600',
          },
          color: 'gray.100',
        },
        cta: {
          fontSize: 'sm',
          fontWeight: 600,
          bg: 'cyan.800',
          _hover: { bg: 'cyan.900' },
          _active: {
            bg: 'cyan.900',
          },
          color: 'gray.100',
        },
      },
    },
  },

  fonts: {
    heading: 'Hammersmith One, sans-serif',
    body: 'Nunito Sans, sans-serif',
  },
});

export default theme;
