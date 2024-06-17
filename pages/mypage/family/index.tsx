import AddFamily from '@/components/mypage/family/add-family/add-family';
import styles from './index.module.scss';

export default function MypageFamily() {
  return (
    <section className={styles.section}>
      <AddFamily />
    </section>
  );
}
