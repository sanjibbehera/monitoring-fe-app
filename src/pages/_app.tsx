import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';

import { store } from '@/store/store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '../styles/root.css';
import theme from '../theme/themeConfig';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Monitoring App</title>
      <meta name="description" content="Monitoring App for Monitoring Data Flow, Server issues and Server related information" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  </>
);

export default App;