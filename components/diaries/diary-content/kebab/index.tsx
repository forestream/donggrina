import React, { MouseEventHandler } from 'react';
import styles from './kebab.module.scss';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import { deleteDiary } from '@/apis/diaries';
import { useQueryClient } from '@tanstack/react-query';

interface KebabProps {
  diaryId: number;
}

const Kebab: React.FC<KebabProps> = ({ diaryId }) => {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    try {
      await deleteDiary(diaryId);
      queryClient.invalidateQueries({ queryKey: ['diaries'] });
    } catch (error) {
      console.error('Failed to delete diary');
    }
  };

  const handleClick: MouseEventHandler = (e) => e.stopPropagation();

  return (
    <div className={styles.kebab} onClick={handleClick}>
      <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
        <DropdownMenu.Kebab />
        <DropdownMenu.Content>
          <DropdownMenu.Item>수정</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
};

export default Kebab;
