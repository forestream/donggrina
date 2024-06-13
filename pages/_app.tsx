import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/common/Header';
import { isHeader } from '@/utils/is-header';
import { isNav } from '@/utils/is-nav';
import { useRouter } from 'next/router';
import Nav from '@/components/common/nav/nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div id="__wrap">
        <main id="__container">
          {!isHeader(router) && <Header />}
          <Component {...pageProps} />
          {!isNav(router) && <Nav />}
        </main>
      </div>
    </QueryClientProvider>
  );
}
