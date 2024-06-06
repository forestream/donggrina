import Image from 'next/image';
import styles from '@/pages/calendar/create/create.module.scss';

export default function CatCheckbox() {
  return (
    <label className={styles.petLabel}>
      <input className={styles.petInput} type="checkbox" />
      <Image className={styles.petOn} src="/images/calendar/cat-on.svg" alt="고양이 선택 상태" fill />
      <Image className={styles.petOff} src="/images/calendar/cat-off.svg" alt="고양이 선택 해제 상태" fill />
    </label>
  );
}
