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
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      variants: {
        theme: {
          fontSize: 'sm',
          fontWeight: 400,
          bg: 'theme.500',
          _hover: { bg: 'theme.400' },
          _active: {
            bg: 'theme.400',
          },
          color: 'white',
        },
        themeBlue: {
          fontSize: 'sm',
          fontWeight: 600,
          bg: 'theme.300',
          _hover: { bg: 'theme.400' },
          _active: {
            bg: 'theme.400',
          },
          color: 'white',
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
