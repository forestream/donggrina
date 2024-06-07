import LinkList from '@/components/start-family/link-list/link-list';
import IntroduceText from '@/components/common/introduce-text/introduce-text';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';

export default function StartFamily() {
  const {
    query: { token },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    if (token) {
      setCookie('accessToken', token);
    }
  }, [isReady]);

  return (
    <article className={styles.article}>
      <IntroduceText />
      <LinkList />
    </article>
  );
}
