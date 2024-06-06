import Image from 'next/image';
import styles from '@/pages/calendar/create/create.module.scss';

export default function DogCheckbox() {
  return (
    <label className={styles.petLabel}>
      <input className={styles.petInput} type="checkbox" />
      <Image className={styles.petOn} src="/images/calendar/dog-on.svg" alt="강아지 선택 상태" fill />
      <Image className={styles.petOff} src="/images/calendar/dog-off.svg" alt="강아지 선택 해제 상태" fill />
    </label>
  );
}
