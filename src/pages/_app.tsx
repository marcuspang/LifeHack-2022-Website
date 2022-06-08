import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/hammersmith-one';
import '@fontsource/nunito-sans';
import theme from '../../lib/theme';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import fetcher from '../../lib/fetcher';
import Footer from '../components/navigation/Footer';
import Header from '../components/navigation/Header';
import './index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshWhenOffline: false,
        revalidateOnFocus: false,
        revalidateIfStale: false,
      }}
    >
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </SessionProvider>
    </SWRConfig>
  );
};

export default App;
