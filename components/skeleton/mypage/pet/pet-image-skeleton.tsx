import styles from './pet-image-skeleton.module.scss';

export default function PetImageSkeleton() {
  return (
    <ul className={styles.petImageSkeleton}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
