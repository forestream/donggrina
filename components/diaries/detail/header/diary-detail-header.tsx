import React from 'react';
import CalendarInstance from '@/utils/date/date.utils';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import styles from './diary-detail-header.module.scss';
import { useRouter } from 'next/router';
import { useDeleteDiary } from '@/hooks/queries/diary/mutation';

interface DiaryDetailHeaderProps {
  isMyStory: boolean | undefined;
}

export default function DiaryDetailHeader(props: DiaryDetailHeaderProps) {
  const router = useRouter();
  const diaryId = +router.query.diaryId!;
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const today = CalendarInstance.getToday();

  const deleteDiaryMutation = useDeleteDiary();

  const updateFn = () => {
    // 다이어리 수정 페이지로 이동해야함.
    router.push(`/diaries/${diaryId}`);
    onCloseToggle();
  };

  const deleteFn = () => {
    deleteDiaryMutation.mutate(diaryId);
    router.push(`/diaries`);
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
