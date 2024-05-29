import LinkList from '@/components/start-family/link-list/link-list';
import IntroduceText from '@/components/start-family/introduce-text/introduce-text';
import styles from './index.module.scss';

export default function StartFamily() {
  return (
    <article className={styles.article}>
      <IntroduceText />
      <LinkList />
    </article>
  );
}
