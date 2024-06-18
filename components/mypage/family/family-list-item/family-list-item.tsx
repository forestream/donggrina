import Image from 'next/image';
import styles from './family-list-item.module.scss';
import ExpulsionSVG from '@/public/images/mypage/minus-circle.svg';
import OwnerSVG from '@/public/images/mypage/owner.svg';
import { useMemberDeleteQuery } from '@/hooks/queries/my/family/usePostFamilyQueries';

interface FamilyListItemType {
  profileImageUrl: string;
  nickname: string;
  membersCount: number;
  id: number;
  groupId: number;
}

export default function FamilyListItem({ profileImageUrl, nickname, membersCount, id, groupId }: FamilyListItemType) {
  const listClass = membersCount === 1 ? `${styles.onlyOne} ${styles.familyList}` : styles.familyList;
  const { mutate } = useMemberDeleteQuery();
  const handleDelete = () => {
    mutate({ groupId: groupId, targetId: id });
  };
  return (
    <li className={listClass}>
      <div className={styles.profileBox}>
        <div className={styles.imgBox}>
          <Image src={profileImageUrl} alt="프로필 이미지" fill priority sizes="100%" />
          {id === 1 && (
            <div className={styles.svgBox} aria-label="모임장">
              <OwnerSVG />
            </div>
          )}
        </div>
        <p>{nickname}</p>
      </div>
      <button className={styles.ExpulsionButton} type="button" title={`${nickname} 추방하기`} onClick={handleDelete}>
        <ExpulsionSVG />
      </button>
    </li>
  );
}
