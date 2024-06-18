import React from 'react';
import styles from './list-header.module.scss';
import Profile from '../../profile';
import CategoryIcon from '@/public/images/growth/categroy-icon.svg';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { useDeleteGrowthMutation } from '@/hooks/queries/growth/use-post-growth-query';
import { useRouter } from 'next/router';

interface ListHeaderProps {
  category: string;
  writerImage: string;
  petImage: string;
  nickname: string;
  isMine: boolean;
  petName: string;
  id: number;
}

export default function ListHeader({
  id: growthId,
  petName,
  isMine,
  nickname,
  category,
  writerImage,
  petImage,
}: ListHeaderProps) {
  const router = useRouter();

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const deleteMutation = useDeleteGrowthMutation();

  const handleEditClick = () => {};
  const handleDeleteClick = () => {
    deleteMutation.mutate(growthId, {
      onSuccess: () => router.push('/growth'),
    });
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <CategoryIcon alt="카테고리 아이콘" />
        <div className={styles.subHeader}>
          <div className={styles.categoryName}>{category}</div>
          <div className={styles.profileContainer}>
            <Profile name={nickname} image={writerImage} />
            <Profile name={petName} className={styles.lastProfile} image={petImage} />
          </div>
        </div>
      </div>
      {isMine ? (
        <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
          <DropdownMenu.Kebab />
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={handleEditClick}>수정</DropdownMenu.Item>
            <DropdownMenu.Item onClick={handleDeleteClick}>삭제</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      ) : null}
    </div>
  );
}
