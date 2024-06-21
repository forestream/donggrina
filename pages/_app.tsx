import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Header } from '@/components/common/Header/back-header';
import { isHeader } from '@/utils/is-header';
import { isNav } from '@/utils/is-nav';
import { useRouter } from 'next/router';
import Nav from '@/components/common/nav/nav';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import usePullReload from '@/hooks/use-pull-to-refresh';
import Spinner from '@/components/spinner/spinner';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(() => new QueryClient());
  const containerRef = useRef(null);
  const isDragging = usePullReload({ queryClient, containerRef });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="__wrap">
          <main id="__container" ref={containerRef}>
            {!isHeader(router) && <Header />}
            {isDragging && <Spinner />}
            <Component {...pageProps} />
            {isNav(router) && <Nav />}
          </main>
        </div>
      </QueryClientProvider>
    </>
  );
}
