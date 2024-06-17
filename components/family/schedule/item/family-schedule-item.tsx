import Avatar from '@/components/avatar/avatar';
import styles from './family-schedule-item.module.scss';

export default function FamilyScheduleItem() {
  return (
    <li className={styles['schedule-list__item']}>
      <div className={styles['schedule-item__type']}></div>
      <div className={styles['schedule-item__content']}>
        <div className={styles['content-todo']}>산책 (09:00)</div>
        <Avatar border="gray" />
      </div>
      <div className={styles['schedule-item__input']}>
        <input type="checkbox" />
      </div>
    </li>
  );
}
