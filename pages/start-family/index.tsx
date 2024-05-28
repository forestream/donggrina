import TextBox from '@/components/start-family/text-box/text-box';
import LinkList from '@/components/start-family/link-list/link-list';
import styles from './index.module.scss';

export default function StartFamily() {
  return (
    <article className={styles.article}>
      <TextBox />
      <LinkList />
    </article>
  );
}
