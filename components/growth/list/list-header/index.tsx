import React from 'react';
import styles from './list-header.module.scss';
import Profile from '../../profile';
import CategoryIcon from '@/public/images/growth/categroy-icon.svg';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';

interface ListHeaderProps {
  category: string;
  writerImage: string;
  petImage: string;
  nickname: string;
  isMine: boolean;
}

export default function ListHeader({ isMine, nickname, category, writerImage, petImage }: ListHeaderProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <CategoryIcon alt="카테고리 아이콘" />
        <div className={styles.subHeader}>
          <div className={styles.categoryName}>{category}</div>
          <div className={styles.profileContainer}>
            <Profile name={nickname} image={writerImage} />
            <Profile name="뽀삐" className={styles.lastProfile} image={petImage} />
          </div>
        </div>
      </div>
      {isMine ? (
        <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
          <DropdownMenu.Kebab />
          <DropdownMenu.Content>
            <DropdownMenu.Item>수정</DropdownMenu.Item>
            <DropdownMenu.Item>삭제</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
