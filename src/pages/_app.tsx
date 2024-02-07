import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import theme from '../theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Monitoring App</title>
      <meta name="description" content="Monitoring App for Monitoring Data Flow, Server issues and Server related information" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  </>
);

export default App;