import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {appWithTranslation} from "next-i18next";

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function App({ Component, pageProps }: AppProps) {
      return (
            <Component {...pageProps} />
      );
}

export default appWithTranslation(App);
