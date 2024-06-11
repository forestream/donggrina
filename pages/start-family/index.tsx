import LinkList from '@/components/start-family/link-list/link-list';
import IntroduceText from '@/components/start-family/introduce-text/introduce-text';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';

export default function StartFamily() {
  const {
    query: { accessToken, refreshToken },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    if (accessToken) {
      setCookie('accessToken', accessToken);
    }
    if (refreshToken) {
      setCookie('refreshToken', refreshToken);
    }
  }, [isReady]);

  return (
    <article className={styles.article}>
      <IntroduceText />
      <LinkList />
    </article>
  );
}
