import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@fontsource/hammersmith-one';
import '@fontsource/nunito-sans';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
