import Image from 'next/image';
import styles from './diary-edit-header.module.scss';

export default function DiaryEditHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <h2>반려동물 선택</h2>
        <button>전체 선택</button>
      </div>
      <ul className={styles['pet-list']}>
        <li className={styles['pet-list__item']}>
          <button className={styles['pet-list__button']}>나비</button>
        </li>
        <li>
          <button className={styles['pet-list__button']}>치즈</button>
        </li>
      </ul>
    </div>
  );
}
