import styles from './calendar-details-skeleton.module.scss';

export default function CalendarDetailsSkeleton() {
  return (
    <div className={styles.calendarDetailsSkeleton}>
      <div>
        <div className={styles.categoryBox}></div>
        <div>
          <span></span>
          <h2></h2>
          <p></p>
          <div></div>
        </div>
      </div>
      <div>
        <div></div>
        <p></p>
      </div>
    </div>
  );
}
