import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    theme: {
      100: '#2B6ABC',
      200: '#044da3',
      300: '#003D82',
      400: '#002F63',
      500: '#141414',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'gray.100',
      },
    },
  },
  components: {
    Button: {
      variants: {
        theme: {
          fontSize: 'md',
          fontWeight: 600,
          bg: 'black',
          _hover: { bg: 'gray.800', opacity: '0.8' },
          _active: {
            bg: 'gray.600',
          },
          color: 'gray.100',
        },
        header: {
          fontSize: 'md',
          fontWeight: 600,
          bg: 'theme.400',
          _hover: { bg: 'theme.300', opactiy: 0.8 },
          _active: {
            bg: 'theme.200',
          },
          color: 'gray.100',
        },
        cta: {
          fontSize: 'sm',
          fontWeight: 600,
          bg: 'cyan.800',
          _hover: { bg: 'cyan.900', opacity: '0.8' },
          _active: {
            bg: 'cyan.900',
          },
          color: 'gray.100',
        },
        'header-mobile': {
          fontSize: 'md',
          fontWeight: 600,
          bg: 'theme.400',
          _hover: { bg: 'theme.300', opactiy: 0.8 },
          _active: {
            bg: 'theme.200',
          },
          color: 'gray.100',
          border: '1px solid',
          borderColor: 'gray.500',
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
