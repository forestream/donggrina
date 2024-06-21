import styles from './skeleton.module.scss';

export default function FamilySkeleton() {
  return (
    <ul className={styles.familySkeleton}>
      <li>
        <div className={styles.img}></div>
        <div className={styles.name}></div>
      </li>
      <li>
        <div className={styles.img}></div>
        <div className={styles.name}></div>
      </li>
      <li>
        <div className={styles.img}></div>
        <div className={styles.name}></div>
      </li>
    </ul>
  );
}
