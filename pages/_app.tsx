import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="__wrap">
      <main id="__container">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
