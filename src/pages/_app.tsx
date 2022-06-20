import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/hammersmith-one';
import '@fontsource/nunito-sans';
import Footer from 'components/navigation/Footer';
import Header from 'components/navigation/Header';
import fetcher from 'lib/fetcher';
import theme from 'lib/theme';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
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
          <Head>
            <title>LifeHack 2022</title>
            <meta property="og:title" content="LifeHack 2022" key="title" />
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </SessionProvider>
    </SWRConfig>
  );
};

export default App;
