import styles from './profile-skeleton.module.scss';

export default function ProfileSkeleton() {
  return (
    <section className={styles.section}>
      <h3>마이 페이지</h3>
      <div className={styles.profileSkeleton}>
        <div></div>
        <p></p>
      </div>
    </section>
  );
}
