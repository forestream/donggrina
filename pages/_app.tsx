import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/common/Header';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const hide = router.pathname === '/login' || router.pathname === '/landing' || router.pathname === '/404';

  return (
    <div id="__wrap">
      <main id="__container">
        {!hide && <Header />}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
