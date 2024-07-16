import React, { MouseEventHandler } from 'react';
import styles from './kebab.module.scss';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { deleteDiary } from '@/apis/diaries';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

interface KebabProps {
  diaryId: number;
}

const Kebab: React.FC<KebabProps> = ({ diaryId }) => {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteDiary(diaryId);
      queryClient.invalidateQueries({ queryKey: ['diaries'] });
    } catch (error) {
      console.error('Failed to delete diary');
    }
  };

  const handleClick: MouseEventHandler = (e) => e.stopPropagation();

  const updateFn = () => {
    router.push(`/diaries/${diaryId}/edit`);
  };

  return (
    <div className={styles.kebab} onClick={handleClick}>
      <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
        <DropdownMenu.Kebab />
        <DropdownMenu.Content>
          <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
};

export default Kebab;
