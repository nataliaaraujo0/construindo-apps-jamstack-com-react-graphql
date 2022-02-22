import type { AppProps } from 'next/app';
import { Provider } from 'urql';

import { client, ssrCache } from '~/lib/urlql';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
