import React from 'react';
import CalendarInstance from '@/utils/date/date.utils';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import styles from './story-detail-header.module.scss';
import { useDeleteStory } from '@/hooks/queries/story/mutation';
import { useRouter } from 'next/router';

interface StoryDetailHeaderProps {
  isMyStory: boolean | undefined;
  storyId: number;
}

export default function StoryDetailHeader(props: StoryDetailHeaderProps) {
  const router = useRouter();
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const today = CalendarInstance.getToday();

  const deleteStoryMutation = useDeleteStory();

  const updateFn = () => {
    // 다이어리 수정 페이지로 이동해야함.
    router.push(`/diaries/${props.storyId}/edit`);
    onCloseToggle();
  };

  const deleteFn = () => {
    deleteStoryMutation.mutate(props.storyId);
    router.push(`/story`);
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
