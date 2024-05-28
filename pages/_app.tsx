import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/common/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="__wrap">
      <main id="__container">
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
