import { PetData } from '@/types/my-page/pet';
import styles from './pets-list-item.module.scss';
import Image from 'next/image';
import ModifySVG from '@/public/images/pets/modify.svg';
import Link from 'next/link';

export default function PetsListItem({ imageUrl, petId }: PetData) {
  return (
    <div className={styles.imgBox}>
      <Image src={imageUrl} alt="프로필 이미지" fill priority sizes="100%" />
      <Link className={styles.modifyLink} href={`/start-pet/${petId}`} title="반려동물 수정하기로 이동">
        <ModifySVG />
      </Link>
    </div>
  );
}
