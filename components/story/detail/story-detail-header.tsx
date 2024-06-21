import React from 'react';
import CalendarInstance from '@/utils/date/date.utils';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import styles from './story-detail-header.module.scss';

interface StoryDetailHeaderProps {
  isMyStory: boolean | undefined;
}

export default function StoryDetailHeader(props: StoryDetailHeaderProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const today = CalendarInstance.getToday();

  const updateFn = () => {
    console.log('Update');
    onCloseToggle();
  };

  const deleteFn = () => {
    console.log('Delete');
    onCloseToggle();
  };

  return (
    <div className={styles['detail-header']}>
      <h3 className={styles['detail-today']}>{today}</h3>
      {props.isMyStory && (
        <div className={styles['detail-kebab']}>
          <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
            <DropdownMenu.Kebab />
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
              <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
}
