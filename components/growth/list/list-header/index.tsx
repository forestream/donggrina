import React from 'react';
import styles from './list-header.module.scss';
import Profile from '../../profile';
import CategoryIcon from '@/public/images/growth/categroy-icon.svg';
import DropdownMenu from '@/components/kebab/kebab';

interface ListHeaderProps {
  categoryName: string;
  writer: string;
  pet: string;
}

export default function ListHeader({ categoryName, writer, pet }: ListHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <CategoryIcon alt="카테고리 아이콘" />
        <div className={styles.subHeader}>
          <div className={styles.categoryName}>사료</div>
          <div className={styles.profileContainer}>
            <Profile name="문지혜" />
            <Profile name="뽀삐" className={styles.lastProfile} />
          </div>
        </div>
      </div>
      {/* <div className={styles.kebab}>Kebab</div> */}
      <DropdownMenu.Kebab />
    </div>
  );
}
