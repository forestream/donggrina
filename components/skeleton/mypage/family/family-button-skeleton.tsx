import styles from './skeleton.module.scss';

export default function FamilyButtonSkeleton() {
  return (
    <ul className={styles.buttonSkeleton}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
