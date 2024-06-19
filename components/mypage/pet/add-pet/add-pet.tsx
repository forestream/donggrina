import OpenSVG from '@/public/images/mypage/plus-circle.svg';
import Link from 'next/link';
import styles from './add-pet.module.scss';

export default function AddPet() {
  return (
    <div className={styles.titleBox}>
      <h2>반려동물 관리</h2>
      <Link href={'/mypage/pet/add'} title="반려동물 추가 페이지로 이동">
        <OpenSVG />
      </Link>
    </div>
  );
}
