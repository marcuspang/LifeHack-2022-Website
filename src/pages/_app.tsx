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
            <meta
              name="description"
              content="LifeHack 2022 is a hackathon aimed to channel the creativity, drive, and skills of the participants in the software development field."
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#000000" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
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
