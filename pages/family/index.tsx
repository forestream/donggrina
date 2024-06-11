import CalendarInstance from '@/utils/date/date.utils';
import styles from './index.module.scss';

export default function Family() {
  return (
    <section className={styles['family-section']}>
      <div className={styles.today}>{CalendarInstance.getToday()}</div>
    </section>
  );
}

/**
 * !
 */

/**
 * ! 다이어리 is
 * ! 성장기록 is
 * ! 일정기록 is
 */
