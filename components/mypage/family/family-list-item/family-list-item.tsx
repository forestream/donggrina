import Image from 'next/image';
import styles from './family-list-item.module.scss';
import ExpulsionSVG from '@/public/images/mypage/minus-circle.svg';
import OwnerSVG from '@/public/images/mypage/owner.svg';

interface FamilyListItemType {
  profileImageUrl: string;
  nickname: string;
  membersCount: number;
  id: number;
}

export default function FamilyListItem({ profileImageUrl, nickname, membersCount, id }: FamilyListItemType) {
  console.log(id);
  const listClass = membersCount === 1 ? `${styles.onlyOne} ${styles.familyList}` : styles.familyList;
  return (
    <li className={listClass}>
      <div className={styles.profileBox}>
        <div className={styles.imgBox}>
          <Image src={profileImageUrl} alt="프로필 이미지" fill priority sizes="100%" />
          <div className={styles.svgBox} aria-label="모임장">
            <OwnerSVG />
          </div>
        </div>
        <p>{nickname}</p>
      </div>
      <button className={styles.ExpulsionButton} type="button" title={`${nickname} 추방하기`}>
        <ExpulsionSVG />
      </button>
    </li>
  );
}
