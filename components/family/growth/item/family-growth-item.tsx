// import Link from 'next/link';
import { AvatarImage } from '@/components/avatar/avatar';
import { GrowthData } from '@/types/growth';
import { GROWTH_CATEGORY_FAMILY_ICON } from '@/utils/constants/growth';
import Image from 'next/image';
import styles from './family-growth-item.module.scss';

export default function FamilyGrowthItem(props: GrowthData) {
  return (
    // <Link href={`/growth/${props.id}`} className={styles['growth-item__layout']}>
    <div className={styles['growth-item__layout']}>
      <div className={styles['growth-item__type']}>
        <Image src={GROWTH_CATEGORY_FAMILY_ICON[props.category]} alt={props.category} width={20} height={20} />
      </div>
      <AvatarImage border="main" image={props.writerProfileImageUrl} />
      <AvatarImage border="main" image={props.petProfileImageUrl} />
    </div>
  );
}
