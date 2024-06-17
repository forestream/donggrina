import AddFamily from '@/components/mypage/family/add-family/add-family';
import styles from './index.module.scss';
import FamilyList from '@/components/mypage/family/family-list/family-list';
import FamilyUtilButtons from '@/components/mypage/family/family-util-buttons/family-util-buttons';

export default function MypageFamily() {
  return (
    <section className={styles.section}>
      <div className={styles.familyContainer}>
        <AddFamily />
        <FamilyList />
      </div>
      <FamilyUtilButtons />
    </section>
  );
}
