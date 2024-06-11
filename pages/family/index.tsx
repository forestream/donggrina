import CalendarInstance from '@/utils/date/date.utils';
import styles from './index.module.scss';
import FamilyDiary from '@/components/family/family-diary';
import FamilyGrowth from '@/components/family/family-growth';

export default function Family() {
  return (
    <section className={styles['family-section']}>
      <div className={styles.today}>{CalendarInstance.getToday()}</div>
      <FamilyDiary />
      <FamilyGrowth />
    </section>
  );
}
