import LinkList from '@/components/start-family/link-list/link-list';
import IntroduceText from '@/components/start-family/introduce-text/introduce-text';
import styles from './index.module.scss';
<<<<<<< HEAD

export default function StartFamily() {
=======
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

>>>>>>> 552cbd85c3362e512539e96835c45da073a0423c
  return (
    <article className={styles.article}>
      <IntroduceText />
      <LinkList />
    </article>
  );
}
