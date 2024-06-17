import Link from 'next/link';
import { AvatarImage } from '@/components/avatar/avatar';
import styles from './family-growth-item.module.scss';

export default function FamilyGrowthItem() {
  return (
    <Link href="/Hello" className={styles['growth-item__layout']}>
      <div className={styles['growth-item__type']}>{/* 이미지 들어갈 곳. */}</div>
      <AvatarImage border="main" />
      <AvatarImage border="main" />
    </Link>
  );
}
