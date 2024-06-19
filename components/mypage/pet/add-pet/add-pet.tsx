import OpenSVG from '@/public/images/mypage/plus-circle.svg';
import Link from 'next/link';
import styles from './add-pet.module.scss';

export default function AddPet() {
  return (
    <div className={styles.titleBox}>
      <h2>반려동물 관리</h2>
      <Link href={'/mypage/pet/add'} title="가족 초대 모달 열기">
        <OpenSVG />
      </Link>
    </div>
  );
}
