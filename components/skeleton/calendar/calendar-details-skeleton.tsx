import styles from './calendar-details-skeleton.module.scss';

export default function CalendarDetailsSkeleton() {
  return (
    <section className={styles.section}>
      <div className={styles.calendarDetailsSkeleton}>
        <div>
          <div className={styles.categoryBox}></div>
          <div className={styles.contentsBox}>
            <span></span>
            <h2></h2>
            <p></p>
            <div></div>
          </div>
        </div>
        <div>
          <div></div>
          <p>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
    </section>
  );
}
