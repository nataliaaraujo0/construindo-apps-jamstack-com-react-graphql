import type { AppProps } from 'next/app';
import { Provider } from 'urql';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { client, ssrCache } from '~/lib/urlql';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
