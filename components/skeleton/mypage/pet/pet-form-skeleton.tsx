import styles from './pet-form-skeleton.module.scss';

function InputSkeleton() {
  return (
    <div className={styles.inputSkeleton}>
      <p></p>
      <div></div>
    </div>
  );
}

export default function PetFormSkeleton() {
  return (
    <section className={styles.section}>
      <h2>반려동물 수정</h2>
      <div className={styles.imgBox}></div>
      <div className={styles.inputBox}>
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
      </div>
    </section>
  );
}
